import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoImageWrapper}>
                        <Image
                            src="/images/icons/char_icon.png"
                            alt="つむぎの投資診断 ロゴ"
                            width={40}
                            height={40}
                            className={styles.logoImage}
                        />
                    </div>
                    <div className={styles.logoTextWrapper}>
                        <span className={`${styles.logoText} ${styles.glitch}`} data-text="つむぎの投資診断">つむぎの投資診断</span>
                        <span className={styles.logoSubText}>INVESTMENT DIAGNOSIS</span>
                    </div>
                </Link>

                <nav className={styles.nav}>
                    <a
                        href="https://tumugi-lp.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.lpButton}
                    >
                        100歳まで安心するための“出口戦略”を今すぐ受け取る
                    </a>
                </nav>
            </Container>
        </header>
    );
};
