export type AnswerValue = -3 | -2 | -1 | 0 | 1 | 2 | 3;

export type QuestionAxis = 'S_G' | 'I_A' | 'L_T' | 'D_F';

export interface Question {
  id: string;
  text: string;
  axis: QuestionAxis;
  weight: number; // Positive for second letter (G, A, T, F), Negative for first (S, I, L, D)
}

export interface DiagnosisScores {
  s_g: number; // <0: Safe, >0: Growth
  i_a: number; // <0: Index, >0: Active
  l_t: number; // <0: Long-term, >0: Short-term
  d_f: number; // <0: Diversified, >0: Focused
}

export interface DiagnosisResult {
  id: string; // UUID
  userId?: string;
  scores: DiagnosisScores;
  type: string; // e.g., "SILD"
  createdAt: Date;
}

export interface InvestmentType {
  id: string;
  name: string;
  description: string;
  advice: {
    allocation: string; // e.g., "40/50/10"
    horizon: string;   // "Long" or "Short"
    management: string; // "Rebalance" etc.
    products: string[];
    caution: string;
  };
  strengths: string[];
  weaknesses: string[];
  characterImage: string;
  recommendedServices: {
    name: string;
    description: string;
    url?: string;
    affiliateHtml?: string;
  }[];
  samplePortfolio: {
    name: string;
    ticker: string;
    ratio: string;
  }[];
}
