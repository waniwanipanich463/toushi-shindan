import React from 'react';
import styles from './LikertScale.module.css';
import { AnswerValue } from '@/types';

interface LikertScaleProps {
    value: AnswerValue | null;
    onChange: (value: AnswerValue) => void;
}

export const LikertScale: React.FC<LikertScaleProps> = ({ value, onChange }) => {
    const options: { value: AnswerValue; label: string; size: string }[] = [
        { value: -3, label: '同意しない', size: 'lg' },
        { value: -2, label: '', size: 'md' },
        { value: -1, label: '', size: 'sm' },
        { value: 0, label: 'どちらでもない', size: 'xs' },
        { value: 1, label: '', size: 'sm' },
        { value: 2, label: '', size: 'md' },
        { value: 3, label: '同意する', size: 'lg' },
    ];

    return (
        <div className={styles.container}>
            <div className={styles.options}>
                {options.map((opt) => (
                    <button
                        key={opt.value}
                        type="button"
                        className={`${styles.option} ${styles[opt.size]} ${value === opt.value ? styles.selected : ''
                            } ${opt.value < 0 ? styles.negative : opt.value > 0 ? styles.positive : styles.neutral
                            }`}
                        onClick={() => onChange(opt.value)}
                        aria-label={`Rating ${opt.value}`}
                    >
                        <span className={styles.circle} />
                    </button>
                ))}
            </div>
            <div className={styles.labels}>
                <span className={styles.labelNegative}>同意しない</span>
                <span className={styles.labelNeutral}>中立</span>
                <span className={styles.labelPositive}>同意する</span>
            </div>
        </div>
    );
};
