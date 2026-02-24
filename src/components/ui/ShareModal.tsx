'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import styles from './ShareModal.module.css';

interface ShareModalProps {
    isOpen: boolean;
    onClose: () => void;
    typeCode: string;
    typeName: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, typeCode, typeName }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const shareUrl = window.location.href;

    const handleTwitterShare = () => {
        const text = `私の投資スタイルは「${typeName} (${typeCode})」でした！\nあなたも診断してみよう！\n#投資スタイル診断`;
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
        window.open(url, '_blank');
    };

    const handleLineShare = () => {
        const text = `私の投資スタイルは「${typeName} (${typeCode})」でした！`;
        const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                <MotionWrapper className={styles.modal}>
                    <button className={styles.closeButton} onClick={onClose} aria-label="閉じる">
                        <svg viewBox="0 0 24 24" width="24" height="24">
                            <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    </button>

                    <h3 className={styles.title}>結果をSNSでシェアする</h3>
                    <p className={styles.subtitle}>お好みのSNSを選択してください</p>

                    <div className={styles.buttonContainer}>
                        <button
                            onClick={handleTwitterShare}
                            className={`${styles.shareButton} ${styles.twitter}`}
                        >
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                            Xでポスト
                        </button>

                        <button
                            onClick={handleLineShare}
                            className={`${styles.shareButton} ${styles.line}`}
                        >
                            <Image
                                src="/images/logo_line.png"
                                alt="LINE Logo"
                                width={24}
                                height={24}
                                className={styles.lineIcon}
                            />
                            LINEで送る
                        </button>
                    </div>
                </MotionWrapper>
            </div>
        </div>
    );
};
