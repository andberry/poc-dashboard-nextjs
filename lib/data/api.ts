import { logMessage } from "../utils/misc";
import { baseUrl } from "./settings";
import { ICustomer, IInvoice, IProduct, IRevenueData, ITotals } from "./types";
import axios from "axios";

axios.defaults.baseURL = baseUrl;

// fetch products using simple fetch with try / catch / throw and log
export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const res = await fetch(`${baseUrl}/products`);
    if (!res.ok) {
      throw new Error(
        `[fetchProducts] Error fetching products from api: ${res.url} - ${res.status} / ${res.statusText}`,
      );
    }
    const productsData = (await res.json()) as IProduct[];
    return productsData;
  } catch (error) {
    logMessage(String(error), "error");
    return [];
  }
};

// fetch customers using axios
export const fetchCustomers = async (): Promise<ICustomer[]> => {
  try {
    const res = await axios.get<ICustomer[]>("/customers");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logMessage(
        `${error.name} ${error.status}: ${error.message} for ${error.config?.baseURL}${error.config?.url}`,
        "error",
      );
    } else {
      logMessage(String(error), "error");
    }
    return [];
  }
};

export const fetchRevenueData = async (): Promise<IRevenueData | null> => {
  try {
    const res = await axios.get<IRevenueData>("/revenue-data");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logMessage(
        `${error.name} ${error.status}: ${error.message} for ${error.config?.baseURL}${error.config?.url}`,
        "error",
      );
    } else {
      logMessage(String(error), "error");
    }
    return null;
  }
};

export const fetchLatestInvoice = async (): Promise<IInvoice | null> => {
  try {
    const res = await axios.get<IInvoice>("/latest-invoice");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logMessage(
        `${error.name} ${error.status}: ${error.message} for ${error.config?.baseURL}${error.config?.url}`,
        "error",
      );
    } else {
      logMessage(String(error), "error");
    }
    return null;
  }
};

export const fetchTotals = async (): Promise<ITotals | null> => {
  try {
    const res = await axios.get<ITotals>("/totals");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      logMessage(
        `${error.name} ${error.status}: ${error.message} for ${error.config?.baseURL}${error.config?.url}`,
        "error",
      );
    } else {
      logMessage(String(error), "error");
    }
    return null;
  }
};
