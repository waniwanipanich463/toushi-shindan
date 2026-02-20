import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from './Container';
import { Button } from './Button';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoImageWrapper}>
                        <Image
                            src="/images/logo_icon.png"
                            alt="つむぎの投資診断 ロゴ"
                            width={40}
                            height={40}
                            className={styles.logoImage}
                        />
                    </div>
                    <span className={styles.logoText}>つむぎの投資診断</span>
                </Link>

                <nav className={styles.nav}>
                    <Link href="/about" className={styles.navLink}>
                        当サイトについて
                    </Link>
                    <Link href="/diagnosis">
                        <Button size="sm" variant="primary">
                            診断スタート
                        </Button>
                    </Link>
                </nav>
            </Container>
        </header>
    );
};
