"use client";

import { IRevenueData } from "@/lib/data/types";
import { TMonths, MONTHS } from "@/lib/data/types";
import { Table } from "./base/Table";
import { H2 } from "./base/Typography/H2";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import clsx from "clsx";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface IProps {
  revenueData: IRevenueData;
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

export const RevenueDataClient = ({ revenueData }: IProps) => {
  const [activePanel, setActivePanel] = useState<"data" | "chart">("chart");

  if (!revenueData) {
    return null;
  }

  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <H2 first="Montly" second="Revenue" className="mb-0" />
        <div className="flex gap-2 my-2">
          <button
            disabled={activePanel === "data"}
            onClick={() => setActivePanel("data")}
            className={clsx(
              "py-1 px-3 rounded-md overflow-hidden duration-100 ease-linear text-xs",
              {
                "hover:bg-navyPrimary hover:text-white":
                  activePanel === "chart",
              },
              {
                "bg-navyPrimary text-white": activePanel === "data",
              },
            )}
          >
            Data
          </button>
          <button
            disabled={activePanel === "chart"}
            onClick={() => setActivePanel("chart")}
            className={clsx(
              "py-1 px-3 rounded-md overflow-hidden duration-100 ease-linear text-xs",
              {
                "hover:bg-navyPrimary hover:text-white": activePanel === "data",
              },
              {
                "bg-navyPrimary text-white": activePanel === "chart",
              },
            )}
          >
            Chart
          </button>
        </div>
      </div>
      {activePanel === "data" && (
        <Table
          headerRows={["Months", "Revenue"]}
          bodyRows={Object.entries(revenueData).map((item) => [
            monthsLabels[item[0] as TMonths],
            `${item[1]} €`,
          ])}
        />
      )}
      {activePanel === "chart" && (
        <Bar
          data={{
            labels: MONTHS.map((month) => monthsLabels[month]),
            datasets: [
              {
                label: "Revenue",
                data: MONTHS.map((month) => revenueData[month]),
                backgroundColor: "#14b8a6",
                borderColor: "#0d9488",
                borderWidth: 1,
                borderRadius: 2,
              },
            ],
          }}
          options={{
            scales: {
              x: {
                ticks: {
                  minRotation: 90,
                  maxRotation: 90,
                },
              },
              y: {
                display: true,
                title: {
                  display: true,
                  text: "EUR",
                },
              },
            },
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      )}
    </section>
  );
};
