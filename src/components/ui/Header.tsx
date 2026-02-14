import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import { Button } from './Button';
import styles from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.logoIcon}>📊</span>
                    <span className={styles.logoText}>toushi-shindan</span>
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
