export interface IProduct {
  name: string;
  price: number;
  description: string;
}

export interface ICustomer {
  id: string;
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

export interface ITotals {
  productsTotal: number;
  customersTotal: number;
  invoicesTotal: number;
  documentsTotal: number;
}

export interface IDocument {
  id: number;
  title: string;
  file: string;
  updateDate: string;
  updateDateShort: string;
  type: string;
}
