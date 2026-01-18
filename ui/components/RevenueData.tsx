import { IRevenueData } from "@/lib/data/types";
import { TMonths } from "@/lib/data/types";
import { Table } from "./base/Table";

interface IProps {
  data: IRevenueData;
}

const monthsLabels: Record<TMonths, string> = {
  jan: "January",
  feb: "February",
  mar: "March",
  apr: "April",
  may: "May",
  jun: "June",
  jul: "July",
  aug: "August",
  sep: "September",
  oct: "October",
  nov: "November",
  dec: "December",
};

export const RevenueData = ({ data }: IProps) => (
  <section>
    <h2 className="font-sg text-2xl font-bold mb-4 uppercase">Revenue Data</h2>
    <Table
      headerRows={["Monthss", "Revenuee"]}
      bodyRows={Object.entries(data).map((item) => [
        monthsLabels[item[0] as TMonths],
        `${item[1]}`,
      ])}
    />
  </section>
);
