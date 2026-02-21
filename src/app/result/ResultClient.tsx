'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { ResultChart } from '@/components/diagnosis/ResultChart';
import { getTypeContent } from '@/lib/typesContent';
import { ShareButtons } from '@/components/ui/ShareButtons';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import charStyles from './characteristics.module.css';
import styles from './page.module.css';

const getSimulationParams = (typeCode: string) => {
    // 診断タイプに応じた初期資産と目標資産の設定
    const paramsMap: Record<string, { asset: number; target: number }> = {
        'SILD': { asset: 1000000, target: 50000000 },  // 堅実な長期積立家: 100万 -> 5000万
        'SILF': { asset: 5000000, target: 80000000 },  // 利回り追求の守備職人: 500万 -> 8000万
        'SITD': { asset: 3000000, target: 40000000 },  // 短期ディフェンダー: 300万 -> 4000万
        'SITF': { asset: 10000000, target: 50000000 }, // 要塞構築型: 1000万 -> 5000万
        'SALD': { asset: 2000000, target: 100000000 }, // 銘柄分析の探求者: 200万 -> 1億
        'SALF': { asset: 5000000, target: 150000000 }, // 集中投資の信奉者: 500万 -> 1.5億
        'SATD': { asset: 1000000, target: 30000000 },  // 慎重なスイングトレーダー: 100万 -> 3000万
        'SATF': { asset: 2000000, target: 150000000 }, // 一点突破の狙撃手: 200万 -> 1.5億
        'GILD': { asset: 500000, target: 100000000 },  // 成長重視の積立投資家: 50万 -> 1億
        'GILF': { asset: 3000000, target: 200000000 }, // セクターローテーション戦略家: 300万 -> 2億
        'GITD': { asset: 1000000, target: 100000000 }, // モメンタムフォロワー: 100万 -> 1億
        'GITF': { asset: 500000, target: 500000000 },  // テーマハイ・プリースト: 50万 -> 5億
        'GALD': { asset: 2000000, target: 300000000 }, // アクティブ・ストックピッカー: 200万 -> 3億
        'GALF': { asset: 1000000, target: 500000000 }, // グロース集中投資家: 100万 -> 5億
        'GATD': { asset: 5000000, target: 100000000 }, // システムトレーダー: 500万 -> 1億
        'GATF': { asset: 500000, target: 1000000000 }, // アグレッシブ・スペキュレーター: 50万 -> 10億
    };

    return paramsMap[typeCode] || { asset: 1000000, target: 100000000 };
};

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

                <MotionWrapper className={styles.actions} delay={0.9}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', maxWidth: '480px', margin: '2rem auto 0' }}>
                        <a
                            href={`https://asset-management-roadmap.vercel.app/simulate?mbti=${typeCode}&target=${getSimulationParams(typeCode).target}&asset=${getSimulationParams(typeCode).asset}`}
                            style={{ display: 'block', width: '100%', textDecoration: 'none' }}
                        >
                            <Button fullWidth style={{
                                padding: '20px',
                                fontSize: '1.25rem',
                                background: 'linear-gradient(135deg, var(--color-secondary), #0056b3)',
                                color: 'white',
                                border: 'none',
                                borderRadius: 'var(--radius-lg)',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                                transition: 'all 0.3s ease'
                            }}>
                                📈 診断結果をもとに資産形成シミュレーションを試す
                            </Button>
                        </a>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                            <Link href="/diagnosis">
                                <Button variant="outline">もう一度診断する</Button>
                            </Link>
                            <Link href="/">
                                <Button variant="ghost">トップへ戻る</Button>
                            </Link>
                        </div>
                    </div>
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
