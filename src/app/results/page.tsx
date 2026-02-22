import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import { getTypeContent } from '@/lib/typesContent';
import styles from './page.module.css';

export const metadata: Metadata = {
    title: '投資診断結果一覧 | つむぎの投資診断',
    description: '全16種類の投資スタイル診断結果をご覧いただけます。',
};

const ALL_TYPE_CODES = [
    'SILD', 'SILF', 'SITD', 'SITF',
    'SALD', 'SALF', 'SATD', 'SATF',
    'GILD', 'GILF', 'GITD', 'GITF',
    'GALD', 'GALF', 'GATD', 'GATF'
];

export default function ResultsListPage() {
    const allResults = ALL_TYPE_CODES.map(code => getTypeContent(code));

    return (
        <main className={styles.main}>
            <Container size="lg">
                <MotionWrapper className={styles.header}>
                    <h1 className={styles.title}>診断結果一覧</h1>
                    <p className={styles.subtitle}>
                        あなたの性格や価値観に基づいた16種類の投資スタイルを紹介します。
                        それぞれのタイプが持つ強みや最適なポートフォリオを確認してみましょう。
                    </p>
                </MotionWrapper>

                <div className={styles.grid}>
                    {allResults.map((result, index) => (
                        <MotionWrapper key={result.id} delay={index * 0.05}>
                            <Link href={`/result?type=${result.id}`} className={styles.card}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={result.characterImage}
                                        alt={result.name}
                                        width={200}
                                        height={200}
                                        className={styles.characterImage}
                                    />
                                </div>
                                <div className={styles.content}>
                                    <span className={styles.typeCode}>{result.id}</span>
                                    <h2 className={styles.typeName}>{result.name}</h2>
                                    <p className={styles.description}>{result.description}</p>
                                    <div className={styles.footer}>
                                        <span>詳しく見る</span>
                                        <span className={styles.arrow}>→</span>
                                    </div>
                                </div>
                            </Link>
                        </MotionWrapper>
                    ))}
                </div>

                <div style={{ marginTop: '4rem' }}>
                    <MotionWrapper className={styles.header}>
                        <Link href="/diagnosis">
                            <button style={{
                                padding: '12px 32px',
                                fontSize: '1rem',
                                background: 'var(--color-primary)',
                                color: 'white',
                                border: 'none',
                                borderRadius: 'var(--radius-md)',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                            }}>
                                診断をはじめる
                            </button>
                        </Link>
                    </MotionWrapper>
                </div>
            </Container>
        </main>
    );
}
