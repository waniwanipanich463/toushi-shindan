'use client';

import React, { useEffect } from 'react';
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
                            <svg viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M12 2.5c-5.2 0-9.5 3.6-9.5 8s4.3 8 9.5 8c.9 0 1.8-.1 2.6-.3 1.2 1.2 3.5 2.8 4 2.8.2 0 .4-.2.3-.4-.2-.8-.7-2.3-.7-2.3.1 0 .1-.1.2-.1 3-1.6 5.6-4.2 5.6-7.7 0-4.4-4.3-8-9.5-8zm-5.7 9.8c-.3 0-.6-.3-.6-.6 0-.3.3-.6.6-.6h.5v-2.8h-.5c-.3 0-.6-.3-.6-.6 0-.3.3-.6.6-.6h2.7c.3 0 .6.3.6.6s-.3.6-.6.6h-.5v2.8h.5c.3 0 .6.3.6.6s-.3.6-.6.6H6.3zm4.5 0c-.3 0-.6-.3-.6-.6V6.7c0-.3.3-.6.6-.6s.6.3.6.6v4.4h2.2c.3 0 .6.3.6.6s-.3.6-.6.6h-2.8zm5.7 0c-.3 0-.6-.3-.6-.6V6.7c0-.3.3-.6.6-.6.3 0 .6.3.6.6 0 .2.4.9 1.5 2.2 0 0 .1.1.1.1V6.7c0-.3.3-.6.6-.6s.6.3.6.6v4.9c0 .3-.3.6-.6.6-.3 0-.6-.3-.6-.6 0-.2-.4-.9-1.5-2.2 0 0-.1-.1-.1-.1v2.3c0 .3-.3.6-.6.6z" />
                            </svg>
                            LINEで送る
                        </button>
                    </div>
                </MotionWrapper>
            </div>
        </div>
    );
};
