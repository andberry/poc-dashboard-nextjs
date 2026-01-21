import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

export const H3 = ({ className, children }: PropsWithChildren<IProps>) => (
  <h3
    className={`font-sora text-2xl mb-4 font-black tracking-tight text-navyDeep ${className}`}
  >
    {children}
  </h3>
);
