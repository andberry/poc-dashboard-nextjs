type TBodyRow = string[];

interface IProps {
  headerRows: string[];
  bodyRows: TBodyRow[];
}

export const Table = ({ headerRows, bodyRows }: IProps) => (
  <table className="border-collapse table-auto w-full">
    <thead>
      <tr className="border border-slate-300 text-left bg-teal-600 text-white">
        {headerRows.map((item, index) => (
          <th key={index} className="font-sg px-3 py-2 w-1/3 min-w-[100px]">
            {item}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {bodyRows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((item, itemIndex) => (
            <td key={itemIndex} className="px-3 py-2 border border-slate-300">
              {item}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
