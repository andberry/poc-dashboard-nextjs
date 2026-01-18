interface IProps {
  label: string;
  value: number;
}
export const NumberCard = ({ label, value }: IProps) => (
  <div className="border border-slate-300 rounded-md h-32 flex flex-col overflow-hidden grow">
    <div className="uppercase font-sg text-sm flex-none bg-teal-500 text-teal-950 font-bold px-6 py-4 text-center">
      {label}
    </div>
    <div className="grow bg-slate-100 p-4 flex items-center justify-center text-center">
      {value}
    </div>
  </div>
);
