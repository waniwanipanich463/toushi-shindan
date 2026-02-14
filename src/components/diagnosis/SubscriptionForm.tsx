'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import styles from './SubscriptionForm.module.css';

export const SubscriptionForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // API call would go here
        console.log("Subscribed:", email);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <Card className={styles.container}>
                <div className={styles.success}>
                    <h3>登録ありがとうございます！</h3>
                    <p>最新の投資情報をお届けします。</p>
                </div>
            </Card>
        );
    }

    return (
        <Card className={styles.container}>
            <div className={styles.content}>
                <h3>詳細レポートを受け取る</h3>
                <p>あなたのタイプに合わせた詳しい分析と最新市場レポートをメールでお届けします（無料）。</p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <Input
                        type="email"
                        placeholder="メールアドレスを入力"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                    <Button type="submit">登録する</Button>
                </form>
            </div>
        </Card>
    );
};
