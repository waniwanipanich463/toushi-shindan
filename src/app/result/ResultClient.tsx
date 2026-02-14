'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ResultChart } from '@/components/diagnosis/ResultChart';
import { SubscriptionForm } from '@/components/diagnosis/SubscriptionForm';
import { getTypeContent } from '@/lib/typesContent';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import charStyles from './characteristics.module.css';
import styles from './page.module.css';

function ResultContent() {
    const searchParams = useSearchParams();

    const typeCode = searchParams.get('type') || 'UNKNOWN';
    const s_g = parseInt(searchParams.get('sg') || '0', 10);
    const i_a = parseInt(searchParams.get('ia') || '0', 10);
    const l_t = parseInt(searchParams.get('lt') || '0', 10);
    const d_f = parseInt(searchParams.get('df') || '0', 10);

    const content = getTypeContent(typeCode);

    return (
        <main className={styles.main}>
            <Container size="lg">
                <MotionWrapper className={styles.header}>
                    <h1 className={styles.titlePrefix}>診断結果</h1>

                    <div className={styles.characterImageWrapper}>
                        <Image
                            src={content.characterImage}
                            alt={`${content.name}のキャラクター`}
                            width={280}
                            height={280}
                            priority
                            className={styles.characterImage}
                        />
                    </div>

                    <h2 className={styles.typeTitle}>
                        <span className={styles.typeCode}>{typeCode}</span>
                        <span className={styles.typeName}>{content.name}</span>
                    </h2>
                    <p className={styles.description}>{content.description}</p>
                </MotionWrapper>

                <MotionWrapper className={styles.chartSection} delay={0.2}>
                    <h3 className={styles.sectionTitle}>4つの投資軸</h3>
                    <ResultChart scores={{ s_g, i_a, l_t, d_f }} />
                </MotionWrapper>

                <MotionWrapper className={charStyles.characteristicsSection} delay={0.4}>
                    <h3 className={styles.sectionTitle}>強みと弱み</h3>
                    <div className={charStyles.characteristicsGrid}>
                        <div className={charStyles.strengthBox}>
                            <h4 className={charStyles.boxTitle}>
                                <Image src="/images/icons/strength.png" alt="Strength" width={24} height={24} className={charStyles.icon} /> 強み
                            </h4>
                            <ul className={charStyles.list}>
                                {content.strengths.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))}
                            </ul>
                        </div>
                        <div className={charStyles.weaknessBox}>
                            <h4 className={charStyles.boxTitle}>
                                <Image src="/images/icons/weakness.png" alt="Weakness" width={24} height={24} className={charStyles.icon} /> 弱み・注意点
                            </h4>
                            <ul className={charStyles.list}>
                                {content.weaknesses.map((w, i) => (
                                    <li key={i}>{w}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </MotionWrapper>

                <MotionWrapper className={styles.adviceSection} delay={0.6}>
                    <h3 className={styles.sectionTitle}>投資アドバイス</h3>
                    <div className={styles.adviceGrid}>
                        <div className={styles.adviceCard}>
                            <h4>推奨ポートフォリオ</h4>
                            <p className={styles.highlight}>{content.advice.allocation}</p>
                        </div>
                        <div className={styles.adviceCard}>
                            <h4>投資期間</h4>
                            <p>{content.advice.horizon}</p>
                        </div>
                        <div className={styles.adviceCard}>
                            <h4>管理スタイル</h4>
                            <p>{content.advice.management}</p>
                        </div>
                        <div className={styles.adviceCard}>
                            <h4>おすすめ商品例</h4>
                            <ul className={styles.productList}>
                                {content.advice.products.map((p, i) => (
                                    <li key={i}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.cautionBox}>
                        <h4>
                            <Image src="/images/icons/weakness.png" alt="Caution" width={20} height={20} className={styles.iconInline} /> 注意点
                        </h4>
                        <p>{content.advice.caution}</p>
                    </div>
                    <ShareButtons typeCode={typeCode} typeName={content.name} />
                </MotionWrapper>

                <MotionWrapper className={styles.portfolioSection} delay={0.7}>
                    <h3 className={styles.sectionTitle}>
                        <Image src="/images/icons/portfolio.png" alt="Portfolio" width={28} height={28} className={styles.sectionIcon} /> サンプルポートフォリオ
                    </h3>
                    <div className={styles.portfolioContainer}>
                        {content.samplePortfolio.map((item, index) => (
                            <div key={index} className={styles.portfolioItem}>
                                <div className={styles.portfolioName}>
                                    <span className={styles.ticker}>{item.ticker}</span>
                                    <span className={styles.itemName}>{item.name}</span>
                                </div>
                                <div className={styles.portfolioRatio}>{item.ratio}</div>
                            </div>
                        ))}
                    </div>
                </MotionWrapper>

                <MotionWrapper className={styles.servicesSection} delay={0.8}>
                    <h3 className={styles.sectionTitle}>
                        <Image src="/images/icons/services.png" alt="Services" width={28} height={28} className={styles.sectionIcon} /> おすすめのサービス
                    </h3>
                    <div className={styles.servicesGrid}>
                        {content.recommendedServices.map((service, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <h4 className={styles.serviceName}>{service.name}</h4>
                                <p className={styles.serviceDesc}>{service.description}</p>
                                {service.url && (
                                    <a href={service.url} target="_blank" rel="noopener noreferrer" className={styles.serviceLink}>
                                        公式サイトを見る →
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </MotionWrapper>

                <MotionWrapper delay={0.9}>
                    <SubscriptionForm />
                </MotionWrapper>

                <MotionWrapper className={styles.actions} delay={1.0}>
                    <Link href="/diagnosis">
                        <Button variant="outline">もう一度診断する</Button>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost">トップへ戻る</Button>
                    </Link>
                </MotionWrapper>
            </Container>
        </main>
    );
}

export default function ResultClient() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ResultContent />
        </Suspense>
    );
}
