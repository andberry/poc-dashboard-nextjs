import { fetchLatestInvoice, fetchRevenueData } from "@/lib/data/api";
import { LatestInvoice } from "@/ui/components/LatestInvoice";
import { RevenueData } from "@/ui/components/RevenueData";

export default async function Page() {
  const revenueData = await fetchRevenueData();
  const latestInvoice = await fetchLatestInvoice();
  return (
    <div className="bg-slate-200 h-full p-12">
      <h1 className="font-sg text-4xl font-bold mb-8 uppercase">
        Dashboard Homepage
      </h1>
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
