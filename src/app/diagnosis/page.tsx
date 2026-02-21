'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/lib/questions';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { LikertScale } from '@/components/diagnosis/LikertScale';
import { AnswerValue } from '@/types';
import { calculateDiagnosis } from '@/lib/diagnosis';
import styles from './page.module.css';

export default function DiagnosisPage() {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<Record<string, AnswerValue>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const currentQuestion = questions[currentIndex];
    const totalQuestions = questions.length;
    const progress = ((currentIndex + 1) / totalQuestions) * 100;

    const handleAnswer = (value: AnswerValue) => {
        setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }));

        // Auto-advance after short delay for better UX
        setTimeout(() => {
            if (currentIndex < totalQuestions - 1) {
                setCurrentIndex((prev) => prev + 1);
            }
        }, 300);
    };

    const handleNext = () => {
        if (currentIndex < totalQuestions - 1) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleComplete = async () => {
        if (!canProceed) {
            alert("質問に回答してください");
            return;
        }

        setIsSubmitting(true);
        try {
            // Calculate result locally
            const result = calculateDiagnosis(answers, questions);

            // Attempt to save to database via API (Non-blocking)
            fetch('/api/diagnosis/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(result),
            }).catch(err => console.warn("Background save failed:", err));

            // Log for debugging
            console.log("Navigating to result with type:", result.type);

            // For MVP, just putting scores in query params or simple ID
            const query = new URLSearchParams({
                type: result.type,
                sg: result.scores.s_g.toString(),
                ia: result.scores.i_a.toString(),
                lt: result.scores.l_t.toString(),
                df: result.scores.d_f.toString(),
            }).toString();

            router.push(`/result?${query}`);
        } catch (error) {
            console.error("Failed to calculate diagnosis", error);
            alert("エラーが発生しました。もう一度お試しください。");
            setIsSubmitting(false);
        }
    };

    // Use nullish coalescing because 0 is a valid answer (but falsy)
    const currentAnswer = answers[currentQuestion.id] ?? null;
    const isLastQuestion = currentIndex === totalQuestions - 1;
    const canProceed = currentAnswer !== null;

    return (
        <main className={styles.main}>
            <Container size="md">
                <div className={styles.header}>
                    <p className={styles.progressText}>
                        Question {currentIndex + 1} / {totalQuestions}
                    </p>
                    <ProgressBar progress={progress} />
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentQuestion.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className={styles.card}
                    >
                        <h2 className={styles.questionText}>{currentQuestion.text}</h2>

                        <div className={styles.scaleWrapper}>
                            <LikertScale
                                value={currentAnswer}
                                onChange={handleAnswer}
                            />
                        </div>

                        <div className={styles.actions}>
                            <Button
                                variant="ghost"
                                onClick={handleBack}
                                disabled={currentIndex === 0}
                            >
                                前へ
                            </Button>

                            {isLastQuestion ? (
                                <Button
                                    onClick={handleComplete}
                                    disabled={isSubmitting}
                                    className={styles.nextButton}
                                    style={{ opacity: canProceed ? 1 : 0.5, cursor: canProceed ? 'pointer' : 'not-allowed' }}
                                >
                                    診断結果を見る
                                </Button>
                            ) : null}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </Container>
        </main>
    );
}
