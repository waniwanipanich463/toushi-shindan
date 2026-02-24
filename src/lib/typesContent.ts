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
            characterImage: "/images/characters/char_sald_v2.png",
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
            description: "資産の安定性を維持しながら、高配当株や債券からのキャッシュフローを最大化。堅実な「現金製造機」を構築します。",
            advice: {
                allocation: "株式40% / 債券50% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "配当金の再投資または生活費への充当",
                products: ["米国高配当ETF(VYM等)", "日本の連続増配銘柄", "社債ETF"],
                caution: "高配当だけに目を奪われず、銘柄の財務健全性を必ずチェックすること。",
            },
            strengths: ["定期的なインカムゲイン（配当）により、下落相場でも心の平穏を保てる", "配当を再投資に回すことで、複利効果を実感しやすい", "株価の大きな変動に左右されにくい銘柄選定ができる"],
            weaknesses: ["急成長するグロース株の上昇を取り逃がすリスクがある", "減配（配当金が減ること）が発表されると、株価も大きく下落しやすい", "課税のタイミングが多くなり、トータルの運用効率が下がる場合がある"],
            characterImage: "/images/characters/char_silf.png",
            recommendedServices: [
                { name: "DMM 株", description: "米国株の手数料が安く、サポートも充実。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` },
                { name: "投資管理アプリ【TOSSY】", description: "効率的な配当管理に。最新の投資情報を手軽にチェック。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` },
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
            description: "市場の短期的な不確実性を警戒。高い現金比率を維持しながら、チャンスが訪れた時だけ確実な一手を打ちます。",
            advice: {
                allocation: "株式20% / 債券50% / 現金30%",
                horizon: "短期〜中期 (0-3年)",
                management: "損失上限（逆指値）の徹底管理",
                products: ["短期債券ETF", "超低リスク銘柄", "外貨MMF"],
                caution: "市場に参加したいという衝動（ポジポジ病）を抑え、待てるかが勝負。",
            },
            strengths: ["現金比率が高いため、予期せぬ大暴落後のチャンスを最大化できる", "機動力が非常に高く、相場環境の変化に即座に対応できる", "リスク管理が何よりも優先されており、致命的な損失を回避できる"],
            weaknesses: ["急激なインフレが発生した場合、実質的な資産価値が目減りしやすい", "慎重になりすぎて、絶好のエントリー機会を逃してしまうことがある", "頻繁にポジションを組み替えると、売買手数料が無視できない負担になる"],
            characterImage: "/images/characters/char_sitd.png",
            recommendedServices: [
                { name: "初心者向けFXスクール", description: "金融庁登録済みの安心安全なスクールで、投資の基礎を学べます。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" rel="nofollow">FXを優しく基礎から！金融庁に登録済みのFXスクールだから安心安全です。【投資助言・代理業登録】</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGG+2Q8JLE+5J1A+5YZ76" alt="">` },
                { name: "投資管理アプリ【TOSSY】", description: "暴落時の比率確認に重宝。詳しくはこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` },
                { name: "DMM 株", description: "短期チャンスを逃さない。サポート充実の【DMM 株】(PR)", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` }
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
            description: "徹底した企業分析に基づき、将来性のある個別銘柄を長期保有。自らの眼力を信じる知的な投資スタイルです。",
            advice: {
                allocation: "株式50% / 債券40% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "定期的な決算チェックと保有理由の再確認",
                products: ["国内高配当株", "米国優良銘柄", "社債公募"],
                caution: "分析に理屈をこねすぎて、市場全体のトレンドを無視しないよう注意。",
            },
            strengths: ["深い企業理解に基づき、株価の変動に動じない確固たる自信が持てる", "市場が気づいていない「割安・成長」銘柄を発掘する喜びがある", "自ら考えて勝つことで、投資を通じた自己成長を実感できる"],
            weaknesses: ["1銘柄の分析に多大な時間と労力を要する", "自分の分析が間違っていた場合（思い込み）、大きな損失を抱えるリスクがある", "特定の銘柄に愛着が湧きすぎて、損切りが遅れやすい"],
            characterImage: "/images/characters/char_sald.png",
            recommendedServices: [
                { name: "株式投資の情報源", description: "分析の精度を高めるための必須情報。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` },
                { name: "投資管理アプリ【TOSSY】", description: "個別株の複雑な管理に。詳しくはこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` },
                { name: "DMM 株", description: "中長期の個別株分析に。サポート充実の【DMM 株】(PR)", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` }
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
            description: "「卵は一つのカゴに盛れ。そしてそのカゴを監視せよ」を体現。深い確信を持って少数の銘柄に資産を集中させます。",
            advice: {
                allocation: "株式50% / 債券40% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "ドローダウン（資産減少幅）の厳格管理",
                products: ["確信度の高い個別銘柄", "配当王銘柄", "長期国債ETF"],
                caution: "1つの判断ミスが致命傷になりかねないため、常に反対意見も検討すること。",
            },
            strengths: ["成功した際のリターンが爆発的で、最短で大きな資産を築ける可能性がある", "管理する銘柄が少ないため、一つひとつの動きを詳細に把握できる", "市場平均に左右されない、独自の勝ちパターンを構築できる"],
            weaknesses: ["1銘柄のネガティブニュースで資産の半分を失うようなリスクがある", "高いボラティリティ（価格変動）に耐える、強靭な精神力が求められる", "分散効果が働かないため、運の要素にも大きく左右されやすい"],
            characterImage: "/images/characters/char_salf_v2.png",
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
            description: "数日から数週間のトレンドを読み、ヒットアンドアウェイで利益を積み上げ。常に生き残ることを優先する職人的投資家です。",
            advice: {
                allocation: "株式30% / 債券40% / 現金30%",
                horizon: "短期 (0-3年)",
                management: "機械的な損切りルールの徹底",
                products: ["指数連動ETF", "流動性の高い大型株", "為替/FX"],
                caution: "欲に駆られて想定以上のポジションを持たない（オーバートレード）ように。",
            },
            strengths: ["短期間で利益を確定できるため、資金の回転効率が良い", "相場の上下どちらでも利益を狙う技術を身につけられる", "不透明な時はキャッシュに戻り、ぐっすり眠れる"],
            weaknesses: ["常に相場環境を確認する必要があり、精神的なエネルギーを消費する", "感情が入ると損切りができず、塩漬け株を作ってしまうリスクがある", "手数料や取引コストが利益を圧食しやすい"],
            characterImage: "/images/characters/char_satd.png",
            recommendedServices: [
                { name: "DMM FX", description: "短期売買の定番。アカウント登録はこちらから。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGE+9OALO2+1WP2+6JC82" rel="nofollow">【PR】【DMM FX】アカウント登録のお申込みはこちら</a><img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4AXGGE+9OALO2+1WP2+6JC82" alt="">` },
                { name: "FXTF", description: "MT4で24時間取引可能. 口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+APTO2+48D0+68EPE" rel="nofollow">メタトレーダー4[MT4]で24時間取引可能!口座開設はFXTF</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+APTO2+48D0+68EPE" alt="">` },
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
            description: "ここぞという勝負所に全精力を注ぎ込み、短時間で大きな果実を収穫。極限の集中力で相場を射抜きます。",
            advice: {
                allocation: "株式30% / 30% / 現金40%",
                horizon: "超短期〜短期 (0-3年)",
                management: "ポジションサイズ（投資額）の厳格な調整",
                products: ["ボラティリティの高い個別株", "レバレッジ型商品", "ビットコイン"],
                caution: "連勝した時の万能感は「罠」。規律を失えば一瞬で全てを失うことを忘れないで。",
            },
            strengths: ["チャンスを待つ「忍耐」ができるため、無駄な負けを減らせる", "得意なパターンに入った時の勝率は圧倒的", "日常のノイズに左右されず、自分だけの勝機を見抜くことができる"],
            weaknesses: ["投資機会（チャンス）が訪れるまでが長く、焦りから暴走する可能性がある", "負けた時に「取り返そう」とする熱情が最大の敵となる", "運用が極端なため、周囲の理解を得にくい"],
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
            description: "若さと時間を武器に、世界経済のダイナミックな成長を全力で取り込む。究極の「資産形成」スタイルです。",
            advice: {
                allocation: "株式80% / 債券15% / 現金5%",
                horizon: "超長期 (15年以上想定)",
                management: "給与からの天引き自動積立設定のみ",
                products: ["全世界株式(オール・カントリー)", "S&P500指数連動", "ナスダック100"],
                caution: "暴落時に「安く買えるチャンス」と喜べるか。それさえできれば成功は約束されています。",
            },
            strengths: ["複利効果（雪だるま式）を最大限に活用し、将来の大きな資産を築ける", "日々の価格変動を無視して、自分の生活や趣味に集中できる", "投資の知識が少なくても、時間を味方につけるだけで勝てる"],
            weaknesses: ["資産の大半を株にするため、一時的に30〜50%の含み損を抱える可能性がある", "目標を達成するまでが非常に長く、途中でモチベーションが下がりやすい", "退職間際の暴落に対処するための「出口戦略」が必要になる"],
            characterImage: "/images/characters/char_gild_v2.png",
            recommendedServices: [
                { name: "DMM 株", description: "成長株積立にも適した、サポート充実の証券会社。(PR)", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" rel="nofollow">初心者も安心！サポート充実の【DMM 株】(PR)</a><img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4AXGGG+ZQ12Q+1WP2+15R4NM" alt="">` },
                { name: "投資管理アプリ【TOSSY】", description: "成長の軌跡を可視化。詳しくはこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` },
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
            description: "景気サイクルを読み解き、今最も熱い業種へ資金をシフト。市場平均を出し抜くアグレッシブな戦略家です。",
            advice: {
                allocation: "株式80% / 10% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "四半期ごとのセクター別比率の見直し",
                products: ["特定セクターETF(情報技術、ヘルスケア等)", "景気連動銘柄", "バリュー株"],
                caution: "自分の予測が外れた時に、素直に間違いを認め、修正できるかが鍵。",
            },
            strengths: ["好調なセクターに集中することで、指数（S&P500等）を超えるリターンを狙える", "マクロ経済の知識が深まり、社会の流れを予測する能力が高まる", "ポートフォリオが常に変化するため、投資をゲームのように楽しめる"],
            weaknesses: ["逆風のセクターにしがみつくと、市場全体が上がっている中で一人のけ者にされる", "タイミングの判定が難しく、売買コストや税金で運用効率が落ちやすい", "常に経済指標（雇用統計、金利等）を追い続ける労力が必要"],
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
            description: "「上がるから買う。下がるから売る」。相場の勢い（モメンタム）そのものに飛び乗る、スピード感重視のスタイルです。",
            advice: {
                allocation: "株式60% / 20% / 現金20%",
                horizon: "短期〜中期 (0-3年)",
                management: "移動平均線等を用いたトレンド管理",
                products: ["勢いのある成長株", "レバレッジETF", "商品（ゴールド等）"],
                caution: "トレンドは突然終わる。逃げ遅れは死活問題。常に「出口」を意識して。",
            },
            strengths: ["相場の上昇局面をフルスピードで享受し、短期間で大きな利益を得られる", "「何が上がるか」より「何が上がっているか」を見れば良いため、思考がシンプル", "バブル相場のような熱狂局面で最強の力を発揮する"],
            weaknesses: ["トレンドの終わり（天井）で掴まされる「往復ビンタ」を食らうリスクが高い", "損切りを自動化しなければ、一度の大損でそれまでの利益が吹き飛ぶ", "値動きが激しく、常にチャートから目が離せなくなりがち"],
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
            description: "「今の時代を象徴するテーマ」に全集中。未来を創るイノベーションへの期待を燃料に変える、情熱的な投資家です。",
            advice: {
                allocation: "株式60% / 10% / 現金30%",
                horizon: "短期〜中期 (0-3年)",
                management: "ニュースの進展と社会の関心度の監視",
                products: ["最新テクノロジーETF", "宇宙・バイオ・AI関連株", "新規上場株(IPO)"],
                caution: "ブームは必ず形骸化する。夢を買うのは良いが、現実に目覚める準備もしておいて。",
            },
            strengths: ["世の中の革命的な変化を最前線で応援でき、並外れた夢（利益）を追える", "関連ニュースが多いため、常に新しい情報を得る楽しみがある", "成功した時の「確信が現実になる」喜びは、何物にも代えがたい"],
            weaknesses: ["実力が伴わない「期待だけ」のバブル銘柄を掴み、大暴落に巻き込まれやすい", "一度テーマが飽きられると、何年も価格が戻らない死に体になるリスクがある", "感情移入しすぎて、ビジネスとしての不調を認められなくなりやすい"],
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
            description: "未来のGAFAMを発掘すべく、中小型株や新興市場を徹底リサーチ。自分の「先見の明」を資産に変える、知的な冒険家です。",
            advice: {
                allocation: "株式80% / 債券15% / 現金5%",
                horizon: "長期 (5年以上)",
                management: "成長シナリオが崩れていないかの月次モニタリング",
                products: ["米国成長株", "日本の新興市場株", "新興国株ETF"],
                caution: "惚れ込んだ企業でも、数字（業績）がついてこなくなったら冷徹に判断を下すこと。",
            },
            strengths: ["10倍株（テンバガー）を狙える夢があり、投資の醍醐味を最も深く味わえる", "独自の視点で銘柄を選ぶため、市場全体の動きに左右されない利益（アルファ）を出せる可能性がある", "分析を通じて、未来の社会を創る技術やトレンドに詳しくなれる"],
            weaknesses: ["成功率が低く、多くの銘柄が期待外れに終わるリスク（無価値化）がある", "資金が数年単位で塩漬けになる期間があり、精神的な忍耐が試される", "機関投資家との情報格差を埋めるための膨大なリサーチが必要"],
            characterImage: "/images/characters/char_gald.png",
            recommendedServices: [
                { name: "サクソバンク証券", description: "圧倒的な銘柄数で成長株を見つける。口座開設はこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" rel="nofollow">【サクソバンク証券】外国株式口座開設</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4AXGGG+RDYLU+5PC8+HV7V6" alt="">` },
                { name: "株式投資の情報源", description: "未来を担う企業を見出すための専門知識。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGG+DOZOY+ONS+TXW0I" rel="nofollow">あなたの株式投資が一変するかもしれない情報源</a><img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4AXGGG+DOZOY+ONS+TXW0I" alt="">` },
                { name: "投資管理アプリ【TOSSY】", description: "成長プロセスを記録・管理。詳しくはこちら。", affiliateHtml: `<a href="https://px.a8.net/svt/ejp?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" rel="nofollow">【PR】ウルトラ投資アプリ【TOSSY】 詳しくはこちら→</a><img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4AXGGF+GIS242+1WP2+1HM30Y" alt="">` }
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
            description: "確信を持った数社の「破壊的企業」に資産の多くを投下。リスクを飲み込み、異次元のリターンを追い求める情熱の投資家です。",
            advice: {
                allocation: "株式80% / 10% / 現金10%",
                horizon: "長期 (5年以上)",
                management: "投資先の技術的優位性の継続的な精査",
                products: ["特定のグロース株", "テクノロジー系集中ETF", "仮想通貨（一部）"],
                caution: "資産の激しい上下は「想定内」。世間のノイズで握力が弱まらないよう、自らの信念を磨き続けて。",
            },
            strengths: ["投資先が化けた時、一世代で富を築けるような爆発力がある", "広範な分散よりも深い確信があるため、暴落時も冷静でいられる", "複雑なポートフォリオ管理が不要で、勝負の時を見極めることに特化できる"],
            weaknesses: ["数社の失敗で資産の大部分が消える深刻なリスクを常に背負っている", "数年間にわたる「市場からの無視（株価低迷）」に耐え続ける地獄がある", "分散のメリットを完全に捨てているため、メンタリティの自己管理が死活問題"],
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
            description: "感情を完全に排除し、構築したアルゴリズムに基づき淡々と取引。データと確率を支配して利益を削り出す、冷徹な執行者です。",
            advice: {
                allocation: "株式70% / 15% / 現金15%",
                horizon: "短期〜中期 (0-3年)",
                management: "バックテスト（過去検証）の継続実施と修正",
                products: ["市場指数先物", "自動売買枠", "ボラティリティ指数"],
                caution: "システムの「想定外」の動きに即応できる、手動の緊急回避ルールを必ず持っておくこと。",
            },
            strengths: ["「恐怖」や「強欲」といった人間らしい感情によるミスを極限まで減らせる", "複数の市場・銘柄を同時に監視し、24時間体制でチャンスを拾える", "過去のデータに基づく統計的優位性のある勝機を知っているため、迷いがない"],
            weaknesses: ["市場の構造変化（ルール変更や予期せぬショック）にシステムが対応できない時期がある", "システム構築やデータ収集に高度なスキルと膨大な初期投資（時間）が必要", "運用が機械的すぎて、投資の「手応え」や「楽しさ」を感じにくい"],
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
            description: "リスクを恐れぬ不敵な投機家。短期的な市場の歪みや「勢い」を捉え、最大効率で資産を爆発させるギャンブラー的投資スタイルです。",
            advice: {
                allocation: "株式70% / 5% / 現金25%",
                horizon: "超短期 (日次・週次)",
                management: "「退場」を避けるための1日の許容損失額設定",
                products: ["ボラティリティ（価格変動）の極大銘柄", "100倍レバレッジFX", "草コイン"],
                caution: "投資とギャンブルの境界線に立っている自覚を持って。生活をかけるような無謀な勝負は避けてください。",
            },
            strengths: ["短期間で資産を数十倍・数百倍にするポテンシャルがあり、「億り人」の最短距離にいる", "市場の熱気やスリルを全身で感じ、退屈とは無縁のダイナミックな生活を送れる", "直感と度胸を武器に、論理では説明できない巨大なチャンスを掴める"],
            weaknesses: ["一瞬の判断ミスや不運で、資産の全てを失う壊滅的リスクが常に付きまとう", "刺激に慣れすぎてしまい、健全な経済感覚や生活リズムが崩れやすい", "精神的な負荷が激しく、本業や人間関係に悪影響を及ぼす可能性がある"],
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
