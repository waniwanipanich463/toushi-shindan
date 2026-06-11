'use client';

import React, { useState } from 'react';
import { ShareModal } from './ShareModal';
import styles from './ShareButtons.module.css';

interface ShareButtonsProps {
    typeCode: string;
    typeName: string;
}

export const ShareButtons: React.FC<ShareButtonsProps> = ({ typeCode, typeName }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.container}>
            <button
                className={styles.ctaButton}
                onClick={() => setIsModalOpen(true)}
            >
                結果をSNSでシェアする
            </button>

            <ShareModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                typeCode={typeCode}
                typeName={typeName}
            />
        </div>
    );
};
