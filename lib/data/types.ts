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

export type TInvoiceStatus = "PENDING" | "PAID" | "CANCELLED";
export interface IInvoice {
  customer: ICustomer;
  amount: number;
  status: TInvoiceStatus;
}
