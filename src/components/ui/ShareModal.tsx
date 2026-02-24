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
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                <path d="M19.7 12.1c0-4.2-4-7.6-9-7.6s-9 3.4-9 7.6c0 3.7 3.1 6.9 7.4 7.5.3.1.7.2.8.5l.2 1.3c.1.5-.2.6-.4.4l-1.6-1.1c-2.1-.6-6.4-3.2-6.4-8.1 0-4.8 4.7-8.7 10.4-8.7 5.7 0 10.4 3.9 10.4 8.7 0 3.5-2.5 6.6-6 7.9-.3.1-.4.3-.4.6l.2 1.2c.1.4.3.4.4.2 1.2-1 2.8-2.6 3.4-4.8 1-2.1 1.6-4.4 1.6-6.7zm-11.8.8h-1.6c-.1 0-.2-.1-.2-.2V9.6c0-.1.1-.2.2-.2h1.6c.1 0 .2.1.2.2 0 .1-.1.2-.2.2h-1.4v.9h1.4c.1 0 .2.1.2.2 0 .1-.1.2-.2.2h-1.4v.9h1.4c.1 0 .2.1.2.2 0 .1-.2.2-.2.2zm2.6 0h-1.4c-.1 0-.2-.1-.2-.2V9.6c0-.1.1-.2.2-.2h.2c.1 0 .2.1.2.2v2.8h1c.1 0 .2.1.2.2 0 .1-.1.2-.2.2zm1.6 0c-.1 0-.2-.1-.2-.2V9.6c0-.1.1-.2.2-.2h.2c.1 0 .2.1.2.2v1.9l1.4-1.9h.3c.1 0 .2.1.1.2l-1.2 1.6 1.3 1.2c0 .1 0 .2-.1.2h-.2c-.1 0-.1 0-.2-.1l-1.3-1.1v.9c0 .1-.1.2-.2.2zm3.8 0h-1.6c-.1 0-.2-.1-.2-.2V9.6c0-.1.1-.2.2-.2h1.6c.1 0 .2.1.2.2 0 .1-.1.2-.2.2h-1.4v.9h1.4c.1 0 .2.1.2.2 0 .1-.1.2-.2.2h-1.4v.9h1.4c.1 0 .2.1.2.2 0 .1-.2.2-.2.2z" />
                            </svg>
                            LINEで送る
                        </button>
                    </div>
                </MotionWrapper>
            </div>
        </div>
    );
};
