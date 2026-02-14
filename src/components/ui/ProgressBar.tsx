import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
    progress: number; // 0 to 100
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className={styles.track}>
            <div
                className={styles.fill}
                style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            />
        </div>
    );
};
