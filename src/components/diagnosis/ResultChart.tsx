import React from 'react';
import styles from './ResultChart.module.css';
import { DiagnosisScores } from '@/types';

interface ResultChartProps {
    scores: DiagnosisScores;
}

export const ResultChart: React.FC<ResultChartProps> = ({ scores }) => {
    // Config for axes
    const axes = [
        { key: 's_g', labelL: '守備 (Safe)', labelR: '攻撃 (Growth)', val: scores.s_g },
        { key: 'i_a', labelL: '指数 (Index)', labelR: '裁量 (Active)', val: scores.i_a },
        { key: 'l_t', labelL: '長期 (Long)', labelR: '短期 (Term)', val: scores.l_t },
        { key: 'd_f', labelL: '分散 (Div.)', labelR: '集中 (Focus)', val: scores.d_f },
    ];

    return (
        <div className={styles.chartContainer}>
            {axes.map((axis) => (
                <div key={axis.key} className={styles.axisRow}>
                    <div className={styles.labelL}>{axis.labelL}</div>
                    <div className={styles.barTrack}>
                        <div className={styles.centerLine} />
                        {/* 
              Value is -100 to 100. 
              If negative (Left), width is -val/2 %, left is 50% - width.
              If positive (Right), width is val/2 %, left is 50%.
            */}
                        <div
                            className={`${styles.barFill} ${axis.val < 0 ? styles.left : styles.right}`}
                            style={{
                                width: `${Math.abs(axis.val) / 2}%`,
                                left: axis.val < 0 ? `calc(50% - ${Math.abs(axis.val) / 2}%)` : '50%'
                            }}
                        />
                    </div>
                    <div className={styles.labelR}>{axis.labelR}</div>
                </div>
            ))}
        </div>
    );
};
