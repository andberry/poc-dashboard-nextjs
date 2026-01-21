type TBodyRow = string[];

interface IProps {
  headerRows: string[];
  bodyRows: TBodyRow[];
}

export const Table = ({ headerRows, bodyRows }: IProps) => (
  <div className="rounded-lg overflow-hidden border border-slate-200">
    <table className="border-collapse table-auto w-full">
      <thead>
        <tr className="text-left font-sora uppercase text-xs">
          {headerRows.map((item, index) => (
            <th
              key={index}
              className="font-sg px-6 pt-5 pb-4 w-1/3 min-w-[100px] font-bold tracking-wider"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bodyRows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-t border-slate-200 hover:bg-slate-100 duration-75 ease-linear text-sm"
          >
            {row.map((item, itemIndex) => (
              <td key={itemIndex} className="px-6 py-3 font-normal">
                {item}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
