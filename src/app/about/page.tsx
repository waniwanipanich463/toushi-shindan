'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <main className={styles.main}>
            <Container size="md">
                <Link href="/" className={styles.backLink}>
                    ← 戻る
                </Link>
                <h1 className={styles.title}>運営主体・免責事項</h1>

                <div className={styles.card}>
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>運営者情報</h2>
                        <table className={styles.infoTable}>
                            <tbody>
                                <tr>
                                    <th>運営者名</th>
                                    <td>〇〇（本名または屋号）</td>
                                </tr>
                                <tr>
                                    <th>所在地</th>
                                    <td>日本</td>
                                </tr>
                                <tr>
                                    <th>お問い合わせ</th>
                                    <td>example@example.com</td>
                                </tr>
                                <tr>
                                    <th>サイトURL</th>
                                    <td>https://xxxx.com</td>
                                </tr>
                                <tr>
                                    <th>制定日</th>
                                    <td>2026年〇月〇日</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>免責事項</h2>
                        <p className={styles.text}>
                            本サイトは、投資MBTI診断を提供する情報コンテンツサイトです。{"\n\n"}
                            本サイトで提供する情報は、教育・情報提供およびエンターテインメントを目的としたものであり、特定の金融商品の勧誘、売買の推奨、投資助言、または投資判断の根拠を提供するものではありません。{"\n\n"}
                            本サイト内で紹介する銘柄、指数、投資手法等は、あくまで説明のための例示であり、特定の金融商品の購入・売却を推奨するものではありません。{"\n\n"}
                            シミュレーション結果は、一定の仮定および入力条件に基づく試算結果であり、将来の運用成果、利回り、元本の安全性を保証するものではありません。{"\n\n"}
                            投資には価格変動リスク、元本割れリスク、為替リスク等が伴います。最終的な投資判断は、ご利用者様ご自身の責任において行ってください。{"\n\n"}
                            本サイトの情報の正確性・完全性・最新性については可能な限り配慮しておりますが、これを保証するものではありません。{"\n\n"}
                            本サイトの利用により生じた損害について、運営者は一切の責任を負いません。
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>金融商品取引法に関する表示</h2>
                        <p className={styles.text}>
                            本サイトは、金融商品取引法上の登録業者ではありません。{"\n\n"}
                            本サイトは、投資助言・代理業には該当しない範囲で情報を提供しています。
                        </p>
                    </section>
                </div>
            </Container>
        </main>
    );
}
