'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './LoadingScreen.module.css';

export const LoadingScreen: React.FC = () => {
    return (
        <motion.div
            className={styles.overlay}
            initial={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
            <div className={styles.content}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className={styles.logoWrapper}
                >
                    <Image
                        src="/images/icons/char_icon.png"
                        alt="ロゴ"
                        width={80}
                        height={80}
                        className={styles.logoIcon}
                    />
                    <motion.h1
                        className={styles.logoText}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        つむぎの投資診断
                    </motion.h1>
                </motion.div>

                <motion.div
                    className={styles.progressBar}
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
            </div>
        </motion.div>
    );
};
