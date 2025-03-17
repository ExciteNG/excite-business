export interface StatesAndLgas {
  [state: string]: string[];
}

export type SalesDataYear = {
  month: string;
  sales: number;
};

export type SalesDataMonth = {
  month: string;
  sales: number;
}[];