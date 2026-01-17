import { IRevenueData } from "@/lib/data/types";
import { TMonths } from "@/lib/data/types";

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
    <table className="border-collapse table-auto w-full">
      <thead>
        <tr className="border border-slate-300 text-left bg-slate-300">
          <th className="font-sg px-3 py-2 w-1/3 min-w-[100px]">Months</th>
          <th className="font-sg px-3 py-2">Revenue</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(data).map((item) => (
          <tr key={item[0]} className="border border-slate-300 text-left">
            <td className="px-3 py-2 border border-slate-300">
              {monthsLabels[item[0] as TMonths]}
            </td>
            <td className="px-3 py-2 border border-slate-300">
              &euro; {item[1]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);
