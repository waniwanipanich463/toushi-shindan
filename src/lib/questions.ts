import { Question } from "@/types";

export const questions: Question[] = [
    // --- S/G: Safety vs Growth (12 questions) ---
    // Safety (+) vs Growth (-)
    // Note: Axis is S_G. Positive weight means G (Growth), Negative means S (Safety)?
    // Let's check diagnosis.ts: s_g >= 0 ? "G" : "S". So Positive = Growth, Negative = Safety.

    // --- S/G: Safety vs Growth (12 questions) ---
    // Safety (+) vs Growth (-)
    // Positive = Growth, Negative = Safety.

    { id: "sg1", text: "一時的に損をするリスクがあっても、\n高いリターンを狙いたい。", axis: "S_G", weight: 1 },
    { id: "sg2", text: "手元の資産が一時的にでも\n減ることに強い不安を感じる。", axis: "S_G", weight: -1 },
    { id: "sg3", text: "「安定」よりも「成長（大きく増やすこと）」\nという言葉に惹かれる。", axis: "S_G", weight: 1 },
    { id: "sg4", text: "投資において最も大切なのは、\nとにかく「お金を減らさないこと」だ。", axis: "S_G", weight: -1 },
    { id: "sg5", text: "新しい投資のやり方や、話題になっている\n暗号資産（仮想通貨）などにも興味がある。", axis: "S_G", weight: 1 },
    { id: "sg6", text: "銀行預金のように、金額が\n確実に守られている状態が一番安心する。", axis: "S_G", weight: -1 },
    { id: "sg7", text: "将来のために、今はリスクを取ってでも\n資産を増やしたい。", axis: "S_G", weight: 1 },
    { id: "sg8", text: "日々の価格の上がり下がりに、\n一喜一憂したくない。", axis: "S_G", weight: -1 },
    { id: "sg9", text: "自分の持っている資金以上の金額を動かす\n（レバレッジをかける）取引に抵抗がない。", axis: "S_G", weight: 1 },
    { id: "sg10", text: "急激に増やすより、コツコツと少しずつ\n積み上げていくのが自分に合っている。", axis: "S_G", weight: -1 },
    { id: "sg11", text: "短期間で資産を2倍、3倍にする\nチャンスがあれば挑戦したい。", axis: "S_G", weight: 1 },
    { id: "sg12", text: "結果がどうなるかわからない不確実なことには、\nあまり手を出したくない。", axis: "S_G", weight: -1 },

    // --- I/A: Index vs Active (12 questions) ---
    // Index (-) vs Active (+)
    // Positive = Active, Negative = Index.

    { id: "ia1", text: "市場平均（インデックス）を\n上回るリターンを目指したい。", axis: "I_A", weight: 1 },
    { id: "ia2", text: "自分で投資先を選んだり、\n買うタイミングを考えたりするのは面倒だ。", axis: "I_A", weight: -1 },
    { id: "ia3", text: "企業のニュースを自分で調べて、\nどこに投資するか決めるのが好きだ。", axis: "I_A", weight: 1 },
    { id: "ia4", text: "プロや投資の仕組みに任せて、\n自分はほったらかしにしたい。", axis: "I_A", weight: -1 },
    { id: "ia5", text: "ニュースを見て、特定の業界や企業に\n投資アイデアが浮かぶ。", axis: "I_A", weight: 1 },
    { id: "ia6", text: "投資に関わる手数料の安さが、\n投資先を選ぶときの最も大事な基準だ。", axis: "I_A", weight: -1 },
    { id: "ia7", text: "みんなと同じ「平均点」の結果だけでは、\n物足りないと感じる。", axis: "I_A", weight: 1 },
    { id: "ia8", text: "「個人の努力で市場平均に勝ち続けるのは\n難しい」という考えに共感する。", axis: "I_A", weight: -1 },
    { id: "ia9", text: "会社の業績や、価格の流れを示す\nグラフ（チャート）を分析する時間は苦にならない。", axis: "I_A", weight: 1 },
    { id: "ia10", text: "毎月決まった額を自動で積み立てる\n設定をしたら、あとは忘れていたい。", axis: "I_A", weight: -1 },
    { id: "ia11", text: "株価が10倍に跳ね上がるような\n「大化け株」を見つけるのが夢だ。", axis: "I_A", weight: 1 },
    { id: "ia12", text: "世界中の株式に丸ごと投資するような、\n平均的な指数に連動する仕組みが\n一番堅実だと思う。", axis: "I_A", weight: -1 },

    // --- L/T: Long vs Short (12 questions) ---
    // Long (-) vs Short (+)
    // Positive = Short/Trading, Negative = Long.

    { id: "lt1", text: "数ヶ月から数年の、比較的短い期間で\n利益を確定させたい。", axis: "L_T", weight: 1 },
    { id: "lt2", text: "10年, 20年といった長い将来を\n見据えた資産づくりをしたい。", axis: "L_T", weight: -1 },
    { id: "lt3", text: "相場の状況に合わせて、\nタイミングよく売買を行いたい。", axis: "L_T", weight: 1 },
    { id: "lt4", text: "一度買ったら、基本的には売らずに\nずっと持ち続けたい。", axis: "L_T", weight: -1 },
    { id: "lt5", text: "1日や数日の短期間で売買を繰り返して\n利益を出す手法に興味がある。", axis: "L_T", weight: 1 },
    { id: "lt6", text: "時間をかけることで利益が利益を生む\n（複利の）効果をじっくり待ちたい。", axis: "L_T", weight: -1 },
    { id: "lt7", text: "キャッシュ（現金）比率を\n相場に合わせてマメに変えたい。", axis: "L_T", weight: 1 },
    { id: "lt8", text: "数日間の大きな暴落も、数十年という\n長い目で見れば一時的なことだと思う。", axis: "L_T", weight: -1 },
    { id: "lt9", text: "損が膨らむ前に早めに売却して、\n損失を最小限に抑えるべきだ。", axis: "L_T", weight: 1 },
    { id: "lt10", text: "一度買ったらずっと持ち続けて、\n長期的な成長を待つのが自分の基本だ。", axis: "L_T", weight: -1 },
    { id: "lt11", text: "毎日、自分の資産がいくらになっているか\nチェックしないと気が済まない。", axis: "L_T", weight: 1 },
    { id: "lt12", text: "老後の蓄えなど、遠い未来の\n資金作りが投資の主な目的だ。", axis: "L_T", weight: -1 },

    // --- D/F: Diversified vs Focused (12 questions) ---
    // Diversified (-) vs Focused (+)
    // Positive = Focused, Negative = Diversified.

    { id: "df1", text: "本当に自信のある少数の銘柄だけに、\n資金を集中させて勝負したい。", axis: "D_F", weight: 1 },
    { id: "df2", text: "リスクを避けるため、多くの投資先に\n資金を分散させることを徹底したい。", axis: "D_F", weight: -1 },
    { id: "df3", text: "よく知らない多くの銘柄を持つより、\n知っている数銘柄が良い。", axis: "D_F", weight: 1 },
    { id: "df4", text: "世界中の様々な資産\n（株、債券、不動産など）に分散したい。", axis: "D_F", weight: -1 },
    { id: "df5", text: "「選んだものに集中すること」こそが、\n投資で成功する道だと思う。", axis: "D_F", weight: 1 },
    { id: "df6", text: "どの国や通貨が強くなるかわからないので、\n全部持っておきたい。", axis: "D_F", weight: -1 },
    { id: "df7", text: "管理する銘柄の数は、自分の目で\n細かく追える範囲に絞りたい。", axis: "D_F", weight: 1 },
    { id: "df8", text: "特定の業界や国だけに投資が\n偏ってしまうリスクは、極力避けたい。", axis: "D_F", weight: -1 },
    { id: "df9", text: "自分が仕組みをよく理解していて、\n自信を持って語れる分野だけで勝負したい。", axis: "D_F", weight: 1 },
    { id: "df10", text: "世界中の何千もの会社に丸ごと投資できる\n仕組み一つで、十分だと考えている。", axis: "D_F", weight: -1 },
    { id: "df11", text: "自分の資産の半分以上を、たった1つの投資先に\n注ぎ込んでも平気だ。", axis: "D_F", weight: 1 },
    { id: "df12", text: "値動きが正反対であったり、\nバラバラであったりする資産を\n上手く組み合わせたい。", axis: "D_F", weight: -1 },
];
