import { InvestmentType } from "@/types";

export const getTypeContent = (typeCode: string): InvestmentType => {
    const defaultContent: InvestmentType = {
        id: "UNKNOWN",
        name: "判定不能",
        description: "データが不足しているか、判定できない組み合わせです。",
        advice: {
            allocation: "-/-/-",
            horizon: "-",
            management: "-",
            products: [],
            caution: "もう一度診断をお試しください。",
        },
        strengths: [],
        weaknesses: [],
        characterImage: "/images/characters/char_unknown.png",
        recommendedServices: [],
        samplePortfolio: [],
    };

    const contentMap: Record<string, InvestmentType> = {
        // --- Safe Group (S) ---
        "SILD": {
            id: "SILD",
            name: "堅実な長期積立家",
            description: "リスクを抑えつつ、世界経済の成長を享受する王道スタイル。",
            advice: {
                allocation: "株式40% / 債券50% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "年1回のリバランス",
                products: ["全世界株式", "先進国債券", "バランス型投信"],
                caution: "退屈でも売買を繰り返さないこと。",
            },
            strengths: ["市場平均を確実に享受", "感情に左右されない", "手間がかからない"],
            weaknesses: ["短期間で資産は増えない", "退屈で面白みがない", "相場急変時の対応が遅れる"],
            characterImage: "/images/characters/char_sild.png",
            recommendedServices: [
                { name: "初心者向けFXスクール", description: "金融庁登録済みの安心安全なスクールで、投資の基礎を学べます。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" rel="nofollow">FXを優しく基礎から！金融庁に登録済みのFXスクールだから安心安全です。【投資助言・代理業登録】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" alt="">` },
                { name: "ウルトラ投資アプリ【TOSSY】", description: "スマホで手軽に投資管理。詳しくはこちらから。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` },
                { name: "DMM 株", description: "初心者も安心！サポート充実の【DMM 株】", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` }
            ],
            samplePortfolio: [
                { name: "eMAXIS Slim 全世界株式", ticker: "オール・カントリー", ratio: "40%" },
                { name: "eMAXIS Slim 先進国債券", ticker: "インデックス", ratio: "50%" },
                { name: "日本円 (預金)", ticker: "Cash", ratio: "10%" }
            ]
        },
        "SILF": {
            id: "SILF",
            name: "利回り追求の守備職人",
            description: "低ボラティリティで着実なインカムゲインを狙う。",
            advice: {
                allocation: "株式40% / 債券50% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "配当再投資",
                products: ["高配当株", "連続増配株", "債券ETF"],
                caution: "（上限）特定のセクターに偏りすぎないよう注意。",
            },
            strengths: ["定期的な現金収入(配当)", "下落相場での精神的支え", "再投資による複利効果"],
            weaknesses: ["減配リスク", "成長株の上昇を取り逃がす", "課税効率が悪い場合がある"],
            characterImage: "/images/characters/char_silf.png",
            recommendedServices: [
                { name: "DMM 株", description: "米国株の手数料が安く、サポートも充実。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` },
                { name: "TOSSY", description: "分散投資の管理に。詳しくはこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` },
                { name: "株式投資の情報源", description: "投資の質を劇的に変える情報収集ツール。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` }
            ],
            samplePortfolio: [
                { name: "バンガード・米国高配当株式ETF", ticker: "VYM", ratio: "40%" },
                { name: "バンガード・米国トータル債券市場ETF", ticker: "BND", ratio: "50%" },
                { name: "日本円 (待機資金)", ticker: "Cash", ratio: "10%" }
            ]
        },
        "SITD": {
            id: "SITD",
            name: "短期ディフェンダー",
            description: "市場の変動を警戒し、現金比率を高めてチャンスを待つ。",
            advice: {
                allocation: "株式20% / 債券50% / 現金30%",
                horizon: "短期 (0-3年)",
                management: "損失上限の設定",
                products: ["短期債券", "債券ファンド"],
                caution: "参戦欲に負けて無計画なエントリーをしない。",
            },
            strengths: ["現金比率が高く暴落に強い", "機動的に動ける", "リスク管理が徹底されている"],
            weaknesses: ["インフレに弱い", "エントリー機会を逃しやすい", "頻繁な売買でコスト増"],
            characterImage: "/images/characters/char_sitd.png",
            recommendedServices: [
                { name: "初心者向けFXスクール", description: "金融庁登録済みの安心安全なスクールで、投資の基礎を学べます。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" rel="nofollow">FXを優しく基礎から！金融庁に登録済みのFXスクールだから安心安全です。【投資助言・代理業登録】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" alt="">` },
                { name: "TOSSY", description: "分散投資の管理に。詳しくはこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` },
                { name: "DMM 株", description: "短期チャンスを逃さない。サポート充実の【DMM 株】", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` }
            ],
            samplePortfolio: [
                { name: "iシェアーズ 米国公益事業 ETF", ticker: "XLU", ratio: "20%" },
                { name: "短期国債ETF", ticker: "SHV", ratio: "50%" },
                { name: "日本円/米ドル", ticker: "Cash", ratio: "30%" }
            ]
        },
        "SITF": {
            id: "SITF",
            name: "要塞構築型",
            description: "資産を守ることを最優先し、極めて保守的な運用を行う。",
            advice: {
                allocation: "株式20% / 債券40% / 現金40%",
                horizon: "短期 (0-3年)",
                management: "現金維持",
                products: ["防御的ETF", "預金"],
                caution: "一発逆転を狙った投機に手を出さない。",
            },
            strengths: ["資産保全が最優先", "夜もぐっすり眠れる", "暴落時のダメージが最小"],
            weaknesses: ["資産が増えない（インフレ負け）", "機会損失が大きい", "臆病になりすぎる"],
            characterImage: "/images/characters/char_sitf.png",
            recommendedServices: [
                { name: "任意整理の相談", description: "今のうちに家計の健全化を。後悔しない任意整理なら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+1ELV76+4FR4+5YRHE" rel="nofollow">「後悔しない任意整理するなら！」</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+1ELV76+4FR4+5YRHE" alt="">` },
                { name: "FXスクール", description: "リスク管理の基礎を学びたい方へ。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" rel="nofollow">FXを優しく基礎から！金融庁に登録済みのFXスクールだから安心安全です。【投資助言・代理業登録】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" alt="">` },
                { name: "ウルトラ投資アプリ【TOSSY】", description: "資産を守り、育てるための管理アプリ。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` }
            ],
            samplePortfolio: [
                { name: "生活必需品セレクト・セクター SPDR", ticker: "XLP", ratio: "20%" },
                { name: "個人向け国債 (変動10年)", ticker: "JGB", ratio: "40%" },
                { name: "定期預金", ticker: "Cash", ratio: "40%" }
            ]
        },
        "SALD": {
            id: "SALD",
            name: "銘柄分析の探求者",
            description: "自分で選んだ銘柄を長期で保有し、成長を見守る。",
            advice: {
                allocation: "株式50% / 債券40% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "銘柄数の管理",
                products: ["高配当株", "優良社債"],
                caution: "頻繁な乗り換え（回転売買）を避ける。",
            },
            strengths: ["企業分析力が身につく", "掘り出し物を見つける喜び", "自分の判断で投資できる"],
            weaknesses: ["分析に多大な時間がかかる", "分析が外れた時のダメージ", "市場全体の動きに劣後することも"],
            characterImage: "/images/characters/char_sald.png",
            recommendedServices: [
                { name: "株式投資の情報源", description: "分析の精度を高めるための必須情報。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` },
                { name: "TOSSY", description: "ポートフォリオ管理に最適なアプリ。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` },
                { name: "DMM 株", description: "中長期の個別株分析に。サポート充実の【DMM 株】", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` }
            ],
            samplePortfolio: [
                { name: "コカ・コーラ", ticker: "KO", ratio: "15%" },
                { name: "ジョンソン・エンド・ジョンソン", ticker: "JNJ", ratio: "15%" },
                { name: "三菱商事", ticker: "8058", ratio: "20%" },
                { name: "米国債券ETF", ticker: "BND", ratio: "40%" },
                { name: "現金", ticker: "Cash", ratio: "10%" }
            ]
        },
        "SALF": {
            id: "SALF",
            name: "集中投資の信奉者",
            description: "確信した少数の対象に資金を投じ、深いリサーチでリスク管理する。",
            advice: {
                allocation: "株式50% / 債券40% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "ドローダウン（下落幅）上限管理",
                products: ["配当集中", "個別株"],
                caution: "予想外の下振れに備える。",
            },
            strengths: ["成功時のリターンが絶大", "管理銘柄が少なくて済む", "深い企業理解"],
            weaknesses: ["1銘柄の失敗が致命傷に", "ボラティリティが激しい", "精神的なタフさが求められる"],
            characterImage: "/images/characters/char_salf.png",
            recommendedServices: [
                { name: "DMM 株", description: "一点集中投資のリサーチに役立つツール。PR", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` },
                { name: "株式投資の情報源", description: "勝負銘柄を見極めるための羅針盤。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` },
                { name: "サクソバンク証券", description: "圧倒的な銘柄数で集中投資を支える。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` }
            ],
            samplePortfolio: [
                { name: "アップル", ticker: "AAPL", ratio: "25%" },
                { name: "マイクロソフト", ticker: "MSFT", ratio: "25%" },
                { name: "米国長期国債ETF", ticker: "TLT", ratio: "40%" },
                { name: "現金", ticker: "Cash", ratio: "10%" }
            ]
        },
        "SATD": {
            id: "SATD",
            name: "慎重なスイングトレーダー",
            description: "短期的な機会をうかがいつつ、守りを重視したトレードを行う。",
            advice: {
                allocation: "株式30% / 債券40% / 現金30%",
                horizon: "短期 (0-3年)",
                management: "逆指値の徹底",
                products: ["短期債券", "値動き限定的な株"],
                caution: "焦ってエントリーポイントを妥協しない。",
            },
            strengths: ["短期的な利益を積み重ねる", "資金効率が良い", "下落相場でも利益を狙える"],
            weaknesses: ["常に相場を見る必要がある", "感情コントロールが難しい", "手数料がかさむ"],
            characterImage: "/images/characters/char_satd.png",
            recommendedServices: [
                { name: "DMM FX", description: "短期売買の定番。アカウント登録はこちらから。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGE+9OALO2+1WP2+6JC82" rel="nofollow">【PR】【DMM FX】アカウント登録のお申込みはこちら</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGE+9OALO2+1WP2+6JC82" alt="">` },
                { name: "FXTF", description: "MT4で24時間取引可能。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+APTO2+48D0+68EPE" rel="nofollow">メタトレーダー4[MT4]で24時間取引可能!口座開設はFXTF</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+APTO2+48D0+68EPE" alt="">` },
                { name: "サクソバンク証券", description: "プロ仕様のトレード環境。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` }
            ],
            samplePortfolio: [
                { name: "日経平均レバレッジETF", ticker: "1570 (短期)", ratio: "30%" },
                { name: "米国短期国債", ticker: "SHV", ratio: "40%" },
                { name: "日本円", ticker: "Cash", ratio: "30%" }
            ]
        },
        "SATF": {
            id: "SATF",
            name: "一点突破の狙撃手",
            description: "得意なパターンのみに絞り、短期決戦で利益を積み上げる。",
            advice: {
                allocation: "株式30% / 債券30% / 現金40%",
                horizon: "短期 (0-3年)",
                management: "ポジションサイズ管理",
                products: ["防御力の高い個別株"],
                caution: "「勝ち癖」による過信に注意。",
            },
            strengths: ["得意パターンでの勝率が高い", "無駄なトレードが減る", "プロフェッショナルな視点"],
            weaknesses: ["チャンスが来るまで待てない", "パターンの変化に対応遅れ", "過信による大怪我"],
            characterImage: "/images/characters/char_satf.png",
            recommendedServices: [
                { name: "DMM FX", description: "短期取引のスピード感を。アカウント登録はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGE+9OALO2+1WP2+6JC82" rel="nofollow">【PR】【DMM FX】アカウント登録のお申込みはこちら</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGE+9OALO2+1WP2+6JC82" alt="">` },
                { name: "FXTF", description: "短期トレーダーに選ばれるMT4。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+APTO2+48D0+68EPE" rel="nofollow">メタトレーダー4[MT4]で24時間取引可能!口座開設はFXTF</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+APTO2+48D0+68EPE" alt="">` },
                { name: "サクソバンク証券", description: "一点突破を支える技術とツール。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` }
            ],
            samplePortfolio: [
                { name: "レーザーテック", ticker: "6920 (短期)", ratio: "30%" },
                { name: "米国国債", ticker: "BND", ratio: "30%" },
                { name: "現金 (狙撃準備)", ticker: "Cash", ratio: "40%" }
            ]
        },

        // --- Growth Group (G) ---
        "GILD": {
            id: "GILD",
            name: "成長重視の積立投資家",
            description: "市場全体のリターンを享受するため、効率的な分散投資を継続する。",
            advice: {
                allocation: "株式80% / 債券15% / 現金5%",
                horizon: "長期 (5年以上)",
                management: "自動積立",
                products: ["全世界株式", "先進国株式"],
                caution: "下落相場が続いても積立を止めない。",
            },
            strengths: ["世界経済の成長を最大享受", "複利効果が最大化", "若年期に最適な戦略"],
            weaknesses: ["暴落時の資産減少が大きい", "を取り崩す際のタイミングリスク", "忍耐力が必要"],
            characterImage: "/images/characters/char_gild.png",
            recommendedServices: [
                { name: "DMM 株", description: "成長株積立にも適した、サポート充実の証券会社。PR", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` },
                { name: "TOSSY", description: "成長の軌跡を管理する投資アプリ。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` },
                { name: "株式投資の情報源", description: "複利効果を最大化するための優良情報。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` }
            ],
            samplePortfolio: [
                { name: "eMAXIS Slim 全世界株式", ticker: "オール・カントリー", ratio: "60%" },
                { name: "eMAXIS Slim 米国株式", ticker: "S&P500", ratio: "20%" },
                { name: "先進国債券", ticker: "AGG", ratio: "15%" },
                { name: "現金", ticker: "Cash", ratio: "5%" }
            ]
        },
        "GILF": {
            id: "GILF",
            name: "セクターローテーション戦略家",
            description: "成長性の高い分野や市場に資金を傾斜配分する。",
            advice: {
                allocation: "株式80% / 債券10% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "投資上限の設定",
                products: ["米国株ETF", "セクターETF"],
                caution: "自分の相場観を過信しない。",
            },
            strengths: ["旬のテーマに乗れる", "市場平均を上回る可能性", "ダイナミックな運用"],
            weaknesses: ["タイミングを誤ると高値掴み", "セクター全体が沈むリスク", "リバランスが難しい"],
            characterImage: "/images/characters/char_gilf.png",
            recommendedServices: [
                { name: "サクソバンク証券", description: "セクター別ETFの取り扱いが豊富。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` },
                { name: "株式投資の情報源", description: "特定のセクターを見抜くための最良の情報源。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` },
                { name: "DMM FX", description: "セクターの影響を為替でヘッジ。アカウント登録はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGE+9OALO2+1WP2+6JC82" rel="nofollow">【PR】【DMM FX】アカウント登録のお申込みはこちら</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGE+9OALO2+1WP2+6JC82" alt="">` }
            ],
            samplePortfolio: [
                { name: "情報技術セクターETF", ticker: "VGT", ratio: "30%" },
                { name: "ヘルスケアセクターETF", ticker: "VHT", ratio: "30%" },
                { name: "バンガード・トータル・ストック", ticker: "VTI", ratio: "20%" },
                { name: "債券・現金", ticker: "Bond/Cash", ratio: "20%" }
            ]
        },
        "GITD": {
            id: "GITD",
            name: "モメンタムフォロワー",
            description: "勢いのある市場に順張りし、短期的な利益を追求する。",
            advice: {
                allocation: "株式60% / 債券20% / 現金20%",
                horizon: "短期 (0-3年)",
                management: "逆指値",
                products: ["株式ETF", "現金"],
                caution: "焦って高値掴みをしない。",
            },
            strengths: ["短期間で爆発的な利益", "相場の勢いを利用できる", "資金の回転が速い"],
            weaknesses: ["トレンド転換で大きな損失", "損切りが遅れると致命的", "常に緊張感がある"],
            characterImage: "/images/characters/char_gitd.png",
            recommendedServices: [
                { name: "サクソバンク証券", description: "海外株式を扱うなら定番。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` },
                { name: "株式投資の情報源", description: "投資の質を劇的に変える情報収集ツール。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` },
                { name: "FXTF", description: "モメンタムを捉えるMT4取引。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+APTO2+48D0+68EPE" rel="nofollow">メタトレーダー4[MT4]で24時間取引可能!口座開設はFXTF</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+APTO2+48D0+68EPE" alt="">` }
            ],
            samplePortfolio: [
                { name: "ナスダック100 ETF", ticker: "QQQ", ratio: "40%" },
                { name: "レバレッジ・ナスダック", ticker: "TQQQ (短期)", ratio: "20%" },
                { name: "米国債券", ticker: "BND", ratio: "20%" },
                { name: "現金", ticker: "Cash", ratio: "20%" }
            ]
        },
        "GITF": {
            id: "GITF",
            name: "テーマハ イ・プリースト",
            description: "特定のテーマや流行に集中し、大きな波に乗ることを目指す。",
            advice: {
                allocation: "株式60% / 債券10% / 現金30%",
                horizon: "短期 (0-3年)",
                management: "ドローダウン（下落幅）上限",
                products: ["テーマ型ETF"],
                caution: "熱狂相場の「熱暴走」に巻き込まれない。",
            },
            strengths: ["時代の寵児となる銘柄に投資", "知的好奇心が満たされる", "社会的意義を感じやすい"],
            weaknesses: ["ブームが終わると暴落", "過度な期待が含まれている", "実体価値との乖離"],
            characterImage: "/images/characters/char_gitf.png",
            recommendedServices: [
                { name: "株式投資の情報源", description: "次代のテーマを先取りするための良質な情報。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` },
                { name: "DMM 株", description: "流行に敏感な投資に応えるスピーディーな取引。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` },
                { name: "サクソバンク証券", description: "テーマ株ETFの宝庫。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` }
            ],
            samplePortfolio: [
                { name: "グローバルX AI＆ビッグデータ", ticker: "AIQ", ratio: "30%" },
                { name: "クリーンエネルギーETF", ticker: "ICLN", ratio: "30%" },
                { name: "短期債券", ticker: "BSV", ratio: "10%" },
                { name: "現金", ticker: "Cash", ratio: "30%" }
            ]
        },
        "GALD": {
            id: "GALD",
            name: "アクティブ・ストックピッカー",
            description: "将来の成長企業を発掘し、分散ポートフォリオを構築する。",
            advice: {
                allocation: "株式80% / 債券15% / 現金5%",
                horizon: "長期 (5年以上)",
                management: "監視銘柄の入れ替え",
                products: ["個別株（小〜中型）"],
                caution: "情報過多にならず、自分の軸を持つ。",
            },
            strengths: ["未来のGAFAMを発掘", "圧倒的なリターン", "投資家としての醍醐味"],
            weaknesses: ["成功確率は低い", "長期の低迷に耐える必要", "財務分析だけでは測れない"],
            characterImage: "/images/characters/char_gald.png",
            recommendedServices: [
                { name: "サクソバンク証券", description: "圧倒的な銘柄数で成長株を見つける。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` },
                { name: "株式投資の情報源", description: "未来を担う企業を見出すための専門知識。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` },
                { name: "TOSSY", description: "成長プロセスを記録・管理するアプリ。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` }
            ],
            samplePortfolio: [
                { name: "米国中型成長株", ticker: "Mid-Cap Growth", ratio: "40%" },
                { name: "新興国成長株", ticker: "Emerging", ratio: "20%" },
                { name: "S&P500 ETF", ticker: "VOO", ratio: "20%" },
                { name: "債券・現金", ticker: "Safe", ratio: "20%" }
            ]
        },
        "GALF": {
            id: "GALF",
            name: "グロース集中投資家",
            description: "少数の高成長株に確信を持って投資し、大きなリターンを狙う。",
            advice: {
                allocation: "株式80% / 債券10% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "単一銘柄の上限設定",
                products: ["成長株集中"],
                caution: "ボラティリティへの高い耐性が必要。",
            },
            strengths: ["資産が数倍になる可能性", "確信があるため握力強く持てる", "市場のノイズを無視できる"],
            weaknesses: ["分散効果がゼロに近い", "失敗すれば資産の大半を失う", "他人の意見を聞けなくなる"],
            characterImage: "/images/characters/char_galf.png",
            recommendedServices: [
                { name: "DMM 株", description: "集中投資に耐えうる低コストと安定性。PR", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` },
                { name: "株式投資の情報源", description: "一点集中を支える確かな根拠を提供します。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` },
                { name: "サクソバンク証券", description: "プロフェッショナルな集中投資家をサポート。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` }
            ],
            samplePortfolio: [
                { name: "エヌビディア", ticker: "NVDA", ratio: "40%" },
                { name: "テスラ", ticker: "TSLA", ratio: "40%" },
                { name: "米国債券", ticker: "BND", ratio: "10%" },
                { name: "現金", ticker: "Cash", ratio: "10%" }
            ]
        },
        "GATD": {
            id: "GATD",
            name: "システムトレーダー",
            description: "ルールに基づき、複数の市場で機械的に取引を行う。",
            advice: {
                allocation: "株式70% / 債券15% / 現金15%",
                horizon: "短期 (0-3年)",
                management: "厳格なルールの運用",
                products: ["市場指数", "短期取引枠"],
                caution: "取引コスト負けに注意。",
            },
            strengths: ["感情を排除した取引", "統計的優位性", "再現性が高い"],
            weaknesses: ["システム構築・維持の手間", "市場構造の変化に弱い", "ブラックスワンに弱い"],
            characterImage: "/images/characters/char_gatd.png",
            recommendedServices: [
                { name: "FXTF", description: "システムトレードの世界標準MT4を提供。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+APTO2+48D0+68EPE" rel="nofollow">メタトレーダー4[MT4]で24時間取引可能!口座開設はFXTF</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+APTO2+48D0+68EPE" alt="">` },
                { name: "DMM FX", description: "ルールに基づいた為替戦略。アカウント登録はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGE+9OALO2+1WP2+6JC82" rel="nofollow">【PR】【DMM FX】アカウント登録のお申込みはこちら</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGE+9OALO2+1WP2+6JC82" alt="">` },
                { name: "初心者向けFXスクール", description: "裁定取引やトレンドの基礎を学びたい方へ。PR", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" rel="nofollow">FXを優しく基礎から！金融庁に登録済みのFXスクールだから安心安全です。【投資助言・代理業登録】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" alt="">` }
            ],
            samplePortfolio: [
                { name: "日経225先物・オプション", ticker: "NI225", ratio: "50%" },
                { name: "米国債券ETF", ticker: "AGG", ratio: "30%" },
                { name: "証拠金維持用現金", ticker: "Cash", ratio: "20%" }
            ]
        },
        "GATF": {
            id: "GATF",
            name: "アグレッシブ・スペキュレーター",
            description: "リスクを恐れず、短期的な市場の歪みを捉えて利益を狙う。",
            advice: {
                allocation: "株式70% / 債券5% / 現金25%",
                horizon: "短期 (0-3年)",
                management: "許容損失額の管理",
                products: ["短期個別株", "テーマ株"],
                caution: "相場（ギャンブル）依存にならないよう注意。",
            },
            strengths: ["短期間で億り人", "スリルと興奮", "独自の相場観"],
            weaknesses: ["一瞬で退場するリスク", "ギャンブル依存", "生活リズムが崩れる"],
            characterImage: "/images/characters/char_gatf.png",
            recommendedServices: [
                { name: "DMM FX", description: "ボラティリティを制する短期決戦。アカウント登録はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGE+9OALO2+1WP2+6JC82" rel="nofollow">【PR】【DMM FX】アカウント登録のお申込みはこちら</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGE+9OALO2+1WP2+6JC82" alt="">` },
                { name: "サクソバンク証券", description: "世界中の市場でアグレッシブに取引。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` },
                { name: "FXTF", description: "ハイスピードな取引に応える環境を。PR", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+APTO2+48D0+68EPE" rel="nofollow">メタトレーダー4[MT4]で24時間取引可能!口座開設はFXTF</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+APTO2+48D0+68EPE" alt="">` }
            ],
            samplePortfolio: [
                { name: "ゲームストップ", ticker: "GME (例)", ratio: "30%" },
                { name: "ビットコイン", ticker: "BTC", ratio: "40%" },
                { name: "レバレッジETF", ticker: "SOXL", ratio: "20%" },
                { name: "現金 (弾薬)", ticker: "Cash", ratio: "10%" }
            ]
        },
    };

    return contentMap[typeCode] || {
        ...defaultContent,
        id: typeCode,
        name: `${typeCode}タイプ (未定義)`,
    };
};
