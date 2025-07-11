export interface CurrentExchangeRate {
  success: boolean;
  lastUpdatedAt: string;
  fromSymbol: string;
  toSymbol: string;
  exchangeRate: number;
}

export interface HistoryExchangeRate {
  success: boolean;
  from: string;
  to: string;
  lastUpdatedAt: string;
  data: CurrencyCard[];
}

export interface CurrencyCard {
  open: number;
  high: number;
  low: number;
  close: number;
  date: string;
}
