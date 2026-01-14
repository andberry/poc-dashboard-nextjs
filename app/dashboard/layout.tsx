import { PropsWithChildren } from "react";
import SideNav from "../ui/dashboard/sidenav";
import { decodeAction } from "next/dist/server/app-render/entry-base";

interface IProps {
  title?: string;
}

const DashboardLayout = ({title, children}: PropsWithChildren<IProps>) => (
   <div className="flex min-h-screen flex-col md:flex-row bg-slate-100">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
)

export default DashboardLayout;