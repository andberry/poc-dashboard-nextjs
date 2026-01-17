export interface IProduct {
  name: string;
  price: number;
  description: string;
}

export interface ICustomer {
  name: string;
  email: string;
}

export const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
] as const;

export type TMonths = (typeof MONTHS)[number];

export type IRevenueData = Record<TMonths, number>;
