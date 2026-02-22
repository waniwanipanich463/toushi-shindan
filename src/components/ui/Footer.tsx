import React from 'react';
import Link from 'next/link';
import { Container } from './Container';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.links}>
                        <Link href="/about" className={styles.link}>運営主体</Link>
                        <Link href="/privacy" className={styles.link}>プライバシーポリシー</Link>
                    </div>
                    <p className={styles.disclaimer}>
                        免責事項：本診断結果は一般的な情報提供のみを目的としており、特定の金融商品の売買を勧誘するものではありません。
                        投資の最終決定は、ご自身の判断と責任において行っていただけますようお願いいたします。
                    </p>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} toushi-shindan. All rights reserved.
                    </p>
                </div>
            </Container>
            <a
                href="https://shota-world.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.designerLink}
            >
                Designed by Shota Niwano
            </a>
        </footer>
    );
};
