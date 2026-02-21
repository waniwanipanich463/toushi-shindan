'use client';

import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import styles from './page.module.css';

export default function PrivacyPage() {
    return (
        <main className={styles.main}>
            <Container size="md">
                <Link href="/" className={styles.backLink}>
                    ← 戻る
                </Link>
                <h1 className={styles.title}>プライバシーポリシー</h1>

                <div className={styles.card}>
                    <p className={styles.text} style={{ marginBottom: '2rem' }}>
                        つむぎの投資診断（以下、「当サイト」といいます。）は、個人情報の保護に関する法律に基づき、以下の通りプライバシーポリシーを定めます。
                    </p>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. 取得する情報</h2>
                        <p className={styles.text}>
                            当サイトは、以下の情報を取得することがあります。{"\n"}
                            ・お問い合わせフォームに入力された氏名・メールアドレス{"\n"}
                            ・IPアドレス{"\n"}
                            ・Cookie情報{"\n"}
                            ・アクセスログ情報{"\n"}
                            ・利用端末情報{"\n"}
                            ・診断結果およびシミュレーション入力データ
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. 利用目的</h2>
                        <p className={styles.text}>
                            取得した情報は、以下の目的で利用します。{"\n"}
                            ・本サービスの提供および運営のため{"\n"}
                            ・お問い合わせへの対応のため{"\n"}
                            ・サービス改善および機能向上のため{"\n"}
                            ・利用状況 of 分析のため{"\n"}
                            ・不正利用の防止のため{"\n"}
                            ・広告配信および広告最適化のため
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Cookieの使用について</h2>
                        <p className={styles.text}>
                            当サイトでは、利便性向上、アクセス解析、広告配信のためにCookieを使用しています。{"\n"}
                            ユーザーはブラウザの設定によりCookieを無効にすることが可能です。ただし、無効化した場合、当サイトの一部機能が正常に利用できない場合があります。
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. アクセス解析ツールについて</h2>
                        <p className={styles.text}>
                            当サイトでは、Google Analytics等のアクセス解析ツールを利用する場合があります。{"\n"}
                            これらのツールはトラフィックデータ収集のためにCookieを使用します。収集されるデータは匿名であり、個人を特定するものではありません。
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. 広告配信について</h2>
                        <p className={styles.text}>
                            当サイトは、第三者配信の広告サービス（Google AdSense等）を利用する場合があります。{"\n"}
                            広告配信事業者は、ユーザーの興味関心に応じた広告を表示するため、Cookieを使用することがあります。{"\n"}
                            パーソナライズ広告を無効にする方法については、Google広告設定をご確認ください。
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. 第三者提供</h2>
                        <p className={styles.text}>
                            当サイトは、以下の場合を除き、取得した個人情報を第三者に提供することはありません。{"\n"}
                            ・本人の同意がある場合{"\n"}
                            ・法令に基づく場合{"\n"}
                            ・人の生命・身体・財産の保護のために必要な場合
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. 安全管理措置</h2>
                        <p className={styles.text}>
                            当サイトは、個人情報の漏えい、滅失、毀損を防止するため、適切な安全管理措置を講じます。
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. 個人情報の開示・訂正・削除</h2>
                        <p className={styles.text}>
                            ご本人からの個人情報の開示・訂正・削除のご請求があった場合、適切に対応いたします。{"\n"}
                            お問い合わせ先：example@example.com
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. 未成年の利用について</h2>
                        <p className={styles.text}>
                            未成年者が当サイトを利用する場合は、保護者の同意を得たうえでご利用ください。
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>10. 改定</h2>
                        <p className={styles.text}>
                            本ポリシーは、法令の改正やサービス内容の変更等に応じて、予告なく変更する場合があります。{"\n"}
                            変更後のポリシーは、本サイトに掲載した時点で効力を生じます。
                        </p>
                    </section>
                </div>
            </Container>
        </main>
    );
}
