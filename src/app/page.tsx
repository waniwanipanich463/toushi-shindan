import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Container className={styles.hero}>
        <MotionWrapper className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.subtitle}>4軸×2＝16タイプで分析</span>
            <span className={styles.titleMain}>あなたの<span className={styles.highlight}>投資スタイル</span>を診断</span>
          </h1>
          <p className={styles.description}>
            性格や価値観から、あなたに最適な投資手法（長期・積立・分散など）を提案します。
            特定銘柄の例示ではなく、自分を知るためのツールです。
          </p>

          <div className={styles.actions}>
            <Link href="/diagnosis">
              <Button size="lg" className={styles.ctaButton}>
                診断を始める (無料)
              </Button>
            </Link>
            <p className={styles.note}>所要時間: 約3分 / 登録不要</p>
          </div>
        </MotionWrapper>
        <MotionWrapper className={styles.heroImageWrapper} delay={0.2}>
          <Image
            src="/images/hero_new.png"
            alt="Investment Analysis"
            width={600}
            height={600}
            priority
            className={styles.heroImage}
          />
        </MotionWrapper>
      </Container>

      <section className={styles.features}>
        <Container>
          <MotionWrapper delay={0.4}>
            <h2 className={styles.sectionTitle}>診断の流れ</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepIcon}>
                  <Image src="/images/step_1.png" alt="QA" width={140} height={140} />
                </div>
                <span className={styles.stepNumber}>1</span>
                <h3>48問の質問に回答</h3>
                <p>直感で答えてください</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}>
                  <Image src="/images/step_2.png" alt="Type Determination" width={140} height={140} />
                </div>
                <span className={styles.stepNumber}>2</span>
                <h3>タイプ判定</h3>
                <p>16の投資家タイプに分類</p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepIcon}>
                  <Image src="/images/step_3.png" alt="Chart" width={140} height={140} />
                </div>
                <span className={styles.stepNumber}>3</span>
                <h3>診断結果の解説</h3>
                <p>あなたに合った特徴を解説</p>
              </div>
            </div>
          </MotionWrapper>
        </Container>
      </section>
    </main>
  );
}
