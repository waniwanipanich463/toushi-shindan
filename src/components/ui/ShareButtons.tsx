'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/Button';
import styles from './ShareButtons.module.css';

interface ShareButtonsProps {
    typeCode: string;
    typeName: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ typeCode, typeName }) => {
    const [shareUrl, setShareUrl] = useState('');

    useEffect(() => {
        setShareUrl(window.location.href);
    }, []);

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

    if (!shareUrl) return null; // Client-side only

    return (
        <div className={styles.container}>
            <p className={styles.label}>結果をシェアする</p>
            <div className={styles.buttons}>
                <button
                    onClick={handleTwitterShare}
                    className={`${styles.button} ${styles.twitter}`}
                    aria-label="Xでシェア"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className={styles.icon}>
                        <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                    Xでポスト
                </button>
                <button
                    onClick={handleLineShare}
                    className={`${styles.button} ${styles.line}`}
                    aria-label="LINEで送る"
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" className={styles.icon}>
                        <path fill="currentColor" d="M12 2C6.48 2 2 5.92 2 10.75c0 4.3 3.54 7.9 8.35 8.63.33.07.78.22.9.5.1.25.07.64-.02 1.13l-.33 1.95c-.1.59-.47 2.3 2.02 1.25 2.49-1.05 6.77-3.99 9.24-6.82C23.67 15.65 25 13.3 25 10.75 25 5.92 20.52 2 12 2zm1.2 13.9h-6.4c-.44 0-.8-.36-.8-.8s.36-.8.8-.8h5.6l.01-8.6c0-.44.36-.8.8-.8.44 0 .8.36.8.8v9.4c0 .44-.36.8-.8.8z" />
                        <path fill="currentColor" d="M22.02 10.75c0 4.83-4.48 8.75-10 8.75-1.02 0-2 .14-2.95.4-.53-.28-1.34-.84-1.92-1.2-2.18 1.05-3.08-1.2-3.08-1.2l.66-3.9c.12-.72-.18-1.4-.72-1.84C2.56 10.2 1.05 8.3 1.05 6.1c0-2.8 3.1-5.1 7-5.1s7 2.3 7 5.1c0 2.2-1.5 4.1-3.96 4.75.54.44.84 1.12.72 1.84l-.66 3.9c0 .01.9-.25 3.08 1.2.98.58 2.35 1.5 2.76 1.8.7.2 1.4.3 2.05.3 4.4 0 8-3.1 8-7 0-3.9-3.6-7-8-7-4.4 0-8 3.1-8 7 0 .58.07 1.14.2 1.68.74-1.57 2.36-2.68 4.2-2.68 1.2 0 2.3.47 3.14 1.23.84.76 1.36 1.8 1.36 3.07 0 1.27-.52 2.3-1.36 3.06z" style={{ display: 'none' }} />{/* Simplified Path for Icon */}
                        <path fill="currentColor" d="M12 2.5c-5.2 0-9.5 3.6-9.5 8s4.3 8 9.5 8c.9 0 1.8-.1 2.6-.3 1.2 1.2 3.5 2.8 4 2.8.2 0 .4-.2.3-.4-.2-.8-.7-2.3-.7-2.3.1 0 .1-.1.2-.1 3-1.6 5.6-4.2 5.6-7.7 0-4.4-4.3-8-9.5-8zm-5.7 9.8c-.3 0-.6-.3-.6-.6 0-.3.3-.6.6-.6h.5v-2.8h-.5c-.3 0-.6-.3-.6-.6 0-.3.3-.6.6-.6h2.7c.3 0 .6.3.6.6s-.3.6-.6.6h-.5v2.8h.5c.3 0 .6.3.6.6s-.3.6-.6.6H6.3zm4.5 0c-.3 0-.6-.3-.6-.6V6.7c0-.3.3-.6.6-.6s.6.3.6.6v4.4h2.2c.3 0 .6.3.6.6s-.3.6-.6.6h-2.8zm5.7 0c-.3 0-.6-.3-.6-.6V6.7c0-.3.3-.6.6-.6.3 0 .6.3.6.6 0 .2.4.9 1.5 2.2 0 0 .1.1.1.1V6.7c0-.3.3-.6.6-.6s.6.3.6.6v4.9c0 .3-.3.6-.6.6-.3 0-.6-.3-.6-.6 0-.2-.4-.9-1.5-2.2 0 0-.1-.1-.1-.1v2.3c0 .3-.3.6-.6.6z" />
                    </svg>
                    LINEで送る
                </button>
            </div>
        </div>
    );
};
