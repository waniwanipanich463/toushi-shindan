'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

type Props = {
    text: string;
    className?: string;
    delay?: number;
};

export const DissolveText: React.FC<Props> = ({ text, className, delay = 0 }) => {
    const characters = Array.from(text);

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            } as any,
        },
        hidden: {
            opacity: 0,
            y: 10,
            filter: 'blur(4px)',
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 100,
            } as any,
        },
    };

    return (
        <motion.span
            style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {characters.map((char, index) => (
                <motion.span
                    key={index}
                    variants={child}
                    style={{ display: 'inline-block' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
};
