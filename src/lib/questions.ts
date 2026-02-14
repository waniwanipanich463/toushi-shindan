import { Question } from "@/types";

export const questions: Question[] = [
    // --- S/G: Safety vs Growth (12 questions) ---
    // Safety (+) vs Growth (-)
    // Note: Axis is S_G. Positive weight means G (Growth), Negative means S (Safety)?
    // Let's check diagnosis.ts: s_g >= 0 ? "G" : "S". So Positive = Growth, Negative = Safety.

    { id: "sg1", text: "元本割れのリスクがあっても、高いリターンを狙いたい。", axis: "S_G", weight: 1 }, // G
    { id: "sg2", text: "資産が一時的に大きく減ることに耐えられない。", axis: "S_G", weight: -1 }, // S
    { id: "sg3", text: "「安定」よりも「成長」という言葉に惹かれる。", axis: "S_G", weight: 1 }, // G
    { id: "sg4", text: "投資においては「負けないこと」が何より重要だ。", axis: "S_G", weight: -1 }, // S
    { id: "sg5", text: "新しい投資手法や、話題の暗号資産などにも興味がある。", axis: "S_G", weight: 1 }, // G
    { id: "sg6", text: "銀行預金のように、確実に守られている資産が安心だ。", axis: "S_G", weight: -1 }, // S
    { id: "sg7", text: "将来のために、今はリスクを取ってでも資産を増やしたい。", axis: "S_G", weight: 1 }, // G
    { id: "sg8", text: "日々の価格変動にハラハラしたくない。", axis: "S_G", weight: -1 }, // S
    { id: "sg9", text: "レバレッジ（借入）をかけた取引に抵抗がない。", axis: "S_G", weight: 1 }, // G
    { id: "sg10", text: "コツコツと少しずつ増えるのが自分に合っている。", axis: "S_G", weight: -1 }, // S
    { id: "sg11", text: "短期間で資産を倍にするチャンスがあれば賭けたい。", axis: "S_G", weight: 1 }, // G
    { id: "sg12", text: "不確実なことには手を出したくない。", axis: "S_G", weight: -1 }, // S

    // --- I/A: Index vs Active (12 questions) ---
    // Index (-) vs Active (+)
    // i_a >= 0 ? "A" : "I". Positive = Active, Negative = Index.

    { id: "ia1", text: "市場平均（インデックス）を上回るリターンを目指したい。", axis: "I_A", weight: 1 }, // A
    { id: "ia2", text: "銘柄選びやタイミングを考えるのは面倒だ。", axis: "I_A", weight: -1 }, // I
    { id: "ia3", text: "自分で企業を分析して投資先を決めるのが好きだ。", axis: "I_A", weight: 1 }, // A
    { id: "ia4", text: "プロや市場そのものに任せて、ほったらかしにしたい。", axis: "I_A", weight: -1 }, // I
    { id: "ia5", text: "ニュースを見て、特定の業界や企業に投資アイデアが浮かぶ。", axis: "I_A", weight: 1 }, // A
    { id: "ia6", text: "手数料の安さが投資信託選びの最重要基準だ。", axis: "I_A", weight: -1 }, // I
    { id: "ia7", text: "みんなと同じ結果（平均点）では満足できない。", axis: "I_A", weight: 1 }, // A
    { id: "ia8", text: "「市場には勝てない」という考えに同意する。", axis: "I_A", weight: -1 }, // I
    { id: "ia9", text: "決算書やチャートを分析する時間は苦にならない。", axis: "I_A", weight: 1 }, // A
    { id: "ia10", text: "自動積立設定をしたら、あとは忘れていたい。", axis: "I_A", weight: -1 }, // I
    { id: "ia11", text: "テンバガー（10倍株）を見つけるのが夢だ。", axis: "I_A", weight: 1 }, // A
    { id: "ia12", text: "S&P500や全世界株式などの指数連動型が最強だと思う。", axis: "I_A", weight: -1 }, // I

    // --- L/T: Long vs Short (12 questions) ---
    // Long (-) vs Short (+)
    // l_t >= 0 ? "T" : "L". Positive = Short(T), Negative = Long(L). Actually T stands for "Trading" or "Term(Short)"?
    // Let's assume T = Short/Trading, L = Long.

    { id: "lt1", text: "数ヶ月〜数年で利益を確定させたい。", axis: "L_T", weight: 1 }, // T
    { id: "lt2", text: "10年、20年先を見据えて資産を形成したい。", axis: "L_T", weight: -1 }, // L
    { id: "lt3", text: "市場の変動に合わせて、機動的に売買したい。", axis: "L_T", weight: 1 }, // T
    { id: "lt4", text: "一度買ったら、基本的には売らずに持ち続けたい。", axis: "L_T", weight: -1 }, // L
    { id: "lt5", text: "デイトレードやスイングトレードに興味がある。", axis: "L_T", weight: 1 }, // T
    { id: "lt6", text: "複利の効果を信じて、時間を味方につけたい。", axis: "L_T", weight: -1 }, // L
    { id: "lt7", text: "キャッシュ（現金）比率を相場に合わせてマメに変えたい。", axis: "L_T", weight: 1 }, // T
    { id: "lt8", text: "数日間の暴落は、数十年単位で見れば誤差だと思う。", axis: "L_T", weight: -1 }, // L
    { id: "lt9", text: "損切り（ロスカット）は素早く行うべきだ。", axis: "L_T", weight: 1 }, // T
    { id: "lt10", text: "「バイ・アンド・ホールド（買って持ち続ける）」が基本戦略だ。", axis: "L_T", weight: -1 }, // L
    { id: "lt11", text: "毎日株価をチェックしないと気が済まない。", axis: "L_T", weight: 1 }, // T
    { id: "lt12", text: "老後の資金作りが投資の主な目的だ。", axis: "L_T", weight: -1 }, // L

    // --- D/F: Diversified vs Focused (12 questions) ---
    // Diversified (-) vs Focused (+)
    // d_f >= 0 ? "F" : "D". Positive = Focused, Negative = Diversified.

    { id: "df1", text: "自信のある少数の銘柄に資金を集中させたい。", axis: "D_F", weight: 1 }, // F
    { id: "df2", text: "卵は一つのカゴに盛るな（分散投資）を徹底したい。", axis: "D_F", weight: -1 }, // D
    { id: "df3", text: "よく知らない多くの銘柄を持つより、知っている数銘柄が良い。", axis: "D_F", weight: 1 }, // F
    { id: "df4", text: "世界中の様々な資産（株、債券、不動産など）に分散したい。", axis: "D_F", weight: -1 }, // D
    { id: "df5", text: "「選択と集中」こそが投資の成功法則だと思う。", axis: "D_F", weight: 1 }, // F
    { id: "df6", text: "どの国や通貨が強くなるかわからないので、全部持っておきたい。", axis: "D_F", weight: -1 }, // D
    { id: "df7", text: "管理すべき銘柄数は、片手で数えられるくらいがいい。", axis: "D_F", weight: 1 }, // F
    { id: "df8", text: "特定の業界や国に偏るリスクは極力避けたい。", axis: "D_F", weight: -1 }, // D
    { id: "df9", text: "自分の得意な領域（円・サークル・オブ・コンピタンス）だけで勝負したい。", axis: "D_F", weight: 1 }, // F
    { id: "df10", text: "オルカン（全世界株式）一本で十分だ。", axis: "D_F", weight: -1 }, // D
    { id: "df11", text: "ポートフォリオの半分以上を1つの資産に入れても平気だ。", axis: "D_F", weight: 1 }, // F
    { id: "df12", text: "リターンの相関が低い資産を組み合わせたい。", axis: "D_F", weight: -1 }, // D
];
