import { IInvoice } from "@/lib/data/types";
import { Table } from "./base/Table";

interface IProps {
  invoice: IInvoice;
}
export const LatestInvoice = ({ invoice }: IProps) => (
  <section>
    <h2 className="font-sg text-2xl font-bold mb-4 uppercase">
      Latest Invoice
    </h2>
    <Table
      headerRows={["Customer", "Amount", "Status"]}
      bodyRows={[
        [
          `${invoice.customer.name} (${invoice.customer.email})`,
          `${invoice.amount}`,
          `${invoice.status}`,
        ],
      ]}
    ></Table>
  </section>
);
