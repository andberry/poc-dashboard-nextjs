interface IProps {
  label: string;
  value: number;
}
export const NumberCard = ({ label, value }: IProps) => (
  <div className="border border-slate-200 bg-slate-50 rounded-md h-32 flex flex-col overflow-hidden grow p-4">
    <div className="upperase font-sora text-md flex-none font-bold text-center">
      {label}
    </div>
    <div className="grow flex items-center justify-center text-center font-bold text-4xl leading-none">
      {value}
    </div>
  </div>
);
