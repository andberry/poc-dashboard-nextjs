import { fetchRevenueData } from "@/lib/data/api";
import { RevenueDataClient } from "./RevenueDataClient";

export const RevenueData = async () => {
  const revenueData = await fetchRevenueData();

  if (!revenueData) {
    return null;
  }

  return <RevenueDataClient revenueData={revenueData} />;
};
