import { fetchTotals } from "@/lib/data/api";
import { LatestInvoice } from "@/ui/components/LatestInvoice";
import { NumberCard } from "@/ui/components/NumberCard";
import { RevenueData } from "@/ui/components/RevenueData";
import { Suspense } from "react";
import Loading from "./loading";
import { H1 } from "@/ui/components/base/Typography/H1";
import { LatestDocument } from "@/ui/components/LatestDocument";
import { H2 } from "@/ui/components/base/Typography/H2";

export default async function Page() {
  const totals = await fetchTotals();

  return (
    <div className="bg-white h-full p-12 flex flex-col gap-24">
      {totals && (
        <div>
          <H2 first="Featured" second="Numbers" />
          <div className="flex gap-12 rounded-sm">
            <NumberCard label={"Products"} value={totals.productsTotal} />
            <NumberCard label={"Customers"} value={totals.customersTotal} />
            <NumberCard label={"Invoices"} value={totals.invoicesTotal} />
            <NumberCard label={"Documents"} value={totals.documentsTotal} />
          </div>
        </div>
      )}
      <div className="xl:grid grid-cols-12 gap-24">
        <div className="col-span-7">
          <Suspense fallback={<Loading />}>
            <RevenueData />
          </Suspense>
        </div>

        <div className="flex flex-col gap-12 col-span-5">
          <Suspense fallback={<Loading />}>
            <LatestInvoice />
          </Suspense>
          <Suspense fallback={<Loading />}>
            <LatestDocument />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
