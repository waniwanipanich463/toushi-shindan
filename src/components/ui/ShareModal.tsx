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
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878.375.058.513-.162.513-.362l-.001-1.272c-3.141.684-3.804-1.514-3.804-1.514-.514-1.306-1.255-1.654-1.255-1.654-1.025-.7.078-.686.078-.686 1.133.079 1.73 1.163 1.73 1.163 1.007 1.725 2.64 1.226 3.284.937.102-.73.391-1.226.712-1.508-2.507-.285-5.143-1.254-5.143-5.581 0-1.233.441-2.241 1.165-3.03-.116-.286-.505-1.434.111-2.988 0 0 .948-.304 3.106 1.158A10.82 10.82 0 0112 5.8c1.02.005 2.047.138 3.006.406 2.156-1.462 3.103-1.158 3.103-1.158.618 1.554.229 2.702.113 2.988.726.789 1.163 1.797 1.163 3.03 0 4.338-2.64 5.293-5.155 5.572.406.35.767 1.039.767 2.094l-.001 3.104c0 .202.136.425.517.351C18.347 21.123 22 16.988 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            LINEで送る
                        </button>
                    </div>
                </MotionWrapper>
            </div>
        </div>
    );
};
