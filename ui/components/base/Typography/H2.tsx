import { PropsWithChildren } from "react";

interface IProps {
  first?: string;
  second?: string;
  className?: string;
}

export const H2 = ({
  className,
  first,
  second,
  children,
}: PropsWithChildren<IProps>) => (
  <h2
    className={`text-3xl mb-4 tracking-tight text-navyDeep ${className} flex gap-1`}
  >
    <span className="font-manrope">{first}</span>
    <span className="font-sora font-bold translate-y-[2px]">{second}</span>
    {children}
  </h2>
);
