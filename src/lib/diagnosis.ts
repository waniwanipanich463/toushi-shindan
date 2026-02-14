import { AnswerValue, DiagnosisResult, DiagnosisScores, Question, QuestionAxis } from "@/types";

/**
 * Calculates the score for a specific axis based on answers.
 * Returns a score between -100 and +100 (approximately, depending on question count).
 */
const calculateAxisScore = (
    axis: QuestionAxis,
    answers: Record<string, AnswerValue>,
    questions: Question[]
): number => {
    const axisQuestions = questions.filter((q) => q.axis === axis);
    if (axisQuestions.length === 0) return 0;

    let rawScore = 0;
    let maxPossibleScore = 0;

    axisQuestions.forEach((q) => {
        const answer = answers[q.id] || 0;
        // weight is 1 or -1.
        // If weight is 1 (Positive direction), answer 3 adds 3.
        // If weight is -1 (Negative direction), answer 3 adds -3 (towards negative side).
        rawScore += answer * q.weight;
        maxPossibleScore += 3; // Max absolute value per question is 3
    });

    // Normalize to -100 to 100 range
    if (maxPossibleScore === 0) return 0;
    return Math.round((rawScore / maxPossibleScore) * 100);
};

/**
 * Determines the 4-letter type string based on scores.
 */
const determineType = (scores: DiagnosisScores): string => {
    const s_g = scores.s_g >= 0 ? "G" : "S"; // Growth vs Safety (Tie goes to Growth?) - Let's use 0 as threshold
    const i_a = scores.i_a >= 0 ? "A" : "I"; // Active vs Index
    const l_t = scores.l_t >= 0 ? "T" : "L"; // Short-term (T) vs Long-term (L)
    const d_f = scores.d_f >= 0 ? "F" : "D"; // Focused vs Diversified

    return `${s_g}${i_a}${l_t}${d_f}`;
};

export const calculateDiagnosis = (
    answers: Record<string, AnswerValue>,
    questions: Question[]
): DiagnosisResult => {
    const scores: DiagnosisScores = {
        s_g: calculateAxisScore("S_G", answers, questions),
        i_a: calculateAxisScore("I_A", answers, questions),
        l_t: calculateAxisScore("L_T", answers, questions),
        d_f: calculateAxisScore("D_F", answers, questions),
    };

    const type = determineType(scores);

    return {
        id: crypto.randomUUID(),
        scores,
        type,
        createdAt: new Date(),
    };
};
