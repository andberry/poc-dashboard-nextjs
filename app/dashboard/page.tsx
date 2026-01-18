import {
  fetchLatestInvoice,
  fetchRevenueData,
  fetchTotals,
} from "@/lib/data/api";
import { LatestInvoice } from "@/ui/components/LatestInvoice";
import { NumberCard } from "@/ui/components/NumberCard";
import { RevenueData } from "@/ui/components/RevenueData";

export default async function Page() {
  const revenueData = await fetchRevenueData();
  const latestInvoice = await fetchLatestInvoice();
  const totals = await fetchTotals();

  return (
    <div className="bg-slate-200 h-full p-12">
      <h1 className="font-sg text-4xl font-bold mb-8 uppercase">
        Dashboard Homepage
      </h1>
      {totals && (
        <div className="flex gap-4 bg-slate-200 py-4 mb-8 rounded-sm">
          <NumberCard label={"Customers"} value={totals.customersTotal} />
          <NumberCard label={"Products"} value={totals.productsTotal} />
          <NumberCard label={"Invoices"} value={totals.invoicesTotal} />
        </div>
      )}
      <div className="xl:grid grid-cols-2 gap-12">
        {revenueData && (
          <div className="border border-slate-300 rounded-sm p-8">
            <RevenueData data={revenueData} />
          </div>
        )}

        {latestInvoice && (
          <div className="border border-slate-300 rounded-sm p-8">
            <LatestInvoice invoice={latestInvoice} />
          </div>
        )}
      </div>
    </div>
  );
}
