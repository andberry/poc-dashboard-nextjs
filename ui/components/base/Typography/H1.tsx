import { PropsWithChildren } from "react";

interface IProps {
  className?: string;
}

export const H1 = ({ className, children }: PropsWithChildren<IProps>) => (
  <h1
    className={`font-sora text-4xl mb-4 font-black tracking-tight text-navyDeep ${className}`}
  >
    {children}
  </h1>
);
