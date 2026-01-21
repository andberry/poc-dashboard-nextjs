import { IInvoice } from "@/lib/data/types";
import { Table } from "./base/Table";
import { fetchLatestInvoice } from "@/lib/data/api";
import { H2 } from "./base/Typography/H2";

export const LatestInvoice = async () => {
  const invoice = await fetchLatestInvoice();
  if (!invoice) {
    return null;
  }

  return (
    <section>
      <H2 first="Last" second="Invoice" />
      <Table
        headerRows={["Customer", "Amount", "Status"]}
        bodyRows={[
          [
            `${invoice.customer.name} (${invoice.customer.email})`,
            `${invoice.amount} €`,
            `${invoice.status}`,
          ],
        ]}
      ></Table>
    </section>
  );
};
