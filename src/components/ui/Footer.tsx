import React from 'react';
import { Container } from './Container';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.content}>
                    <p className={styles.disclaimer}>
                        免責事項：本診断結果は一般的な情報提供のみを目的としており、特定の金融商品の売買を推奨するものではありません。
                        投資の最終決定は、ご自身の判断と責任において行っていただけますようお願いいたします。
                    </p>
                    <p className={styles.copyright}>
                        &copy; {new Date().getFullYear()} toushi-shindan. All rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};
