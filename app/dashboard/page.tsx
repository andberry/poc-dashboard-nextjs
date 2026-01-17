import { fetchRevenueData } from "@/lib/data/api";
import { RevenueData } from "@/ui/components/RevenueData";

export default async function Page() {
  const revenueData = await fetchRevenueData();
  return (
    <div className="bg-slate-200 h-full p-12">
      <h1 className="font-sg text-4xl font-bold mb-8 uppercase">
        Dashboard Homepage
      </h1>
      <div className="grid grid-cols-2 gap-12">
        {revenueData && (
          <div className="border border-slate-300 rounded-sm p-8">
            <RevenueData data={revenueData} />
          </div>
        )}
        <div className="border border-slate-300 rounded-sm p-8">
          Latest Invoice Here
        </div>
      </div>
    </div>
  );
}
