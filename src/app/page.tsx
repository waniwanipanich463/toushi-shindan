import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { MotionWrapper } from '@/components/ui/MotionWrapper';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.heroFull}>
        <div className={styles.videoBackgroundWrapper}>
          <video
            src="/shindan_hero_clip.mp4"
            autoPlay
            loop
            muted
            playsInline
            className={styles.videoBackground}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={styles.heroTitleContainer}>
          <div className={styles.titleGlitchWrapper} data-text="つむぎの投資診断">
            <Image
              src="/hero_title.png"
              alt="つむぎの投資診断"
              width={600}
              height={200}
              priority
              className={styles.titleImage}
            />
          </div>
          
          <div className={styles.heroActions}>
            <Link href="/diagnosis" style={{ width: '100%', display: 'flex', justifyContent: 'center', textDecoration: 'none' }}>
              <div className={styles.ctaButton}>
                <span className={styles.ctaText}>診断を始める</span>
                <div className={styles.ctaGlow} />
              </div>
            </Link>
            <p className={styles.note}>TIME: APPROX 3 MIN / NO REGISTRATION</p>
          </div>
        </div>
      </section>

      <Container className={styles.heroDescriptionSection}>
        <MotionWrapper className={styles.heroContentBelow} delay={1.2}>
          <div className={styles.subtitleWrapper}>
            <span className={styles.subtitleUnder}>4軸×2＝16タイプで分析</span>
          </div>
          <p className={styles.descriptionUnder}>
            性格や価値観から、あなたに合いやすい投資スタイル（長期・積立・分散など）の傾向を分析します。
            特定銘柄を推奨するものではなく、自分を知るための診断ツールです。
          </p>
        </MotionWrapper>
      </Container>

      <section className={styles.features}>
        <Container>
          <MotionWrapper delay={0.4}>
            <h2 className={styles.sectionTitle}>SYSTEM FLOW</h2>
            <div className={styles.steps}>
              <div className={styles.step}>
                <span className={styles.stepNumber}>01</span>
                <div className={styles.stepIcon}>
                  <Image src="/images/step_1.png" alt="QA" width={120} height={120} unoptimized />
                </div>
                <h3>質問に回答</h3>
                <p>直感で48問に答える</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>02</span>
                <div className={styles.stepIcon}>
                  <Image src="/images/step_2.png" alt="Type Determination" width={120} height={120} unoptimized />
                </div>
                <h3>タイプ判定</h3>
                <p>16タイプの中から分類</p>
              </div>
              <div className={styles.step}>
                <span className={styles.stepNumber}>03</span>
                <div className={styles.stepIcon}>
                  <Image src="/images/step_3.png" alt="Chart" width={120} height={120} unoptimized />
                </div>
                <h3>診断結果</h3>
                <p>特性とスタイルを解説</p>
              </div>
            </div>
          </MotionWrapper>
        </Container>
      </section>
    </main>
  );
}
