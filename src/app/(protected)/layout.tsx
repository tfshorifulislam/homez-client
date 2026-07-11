import { ReactNode } from "react";
import SideBar from "@/components/protectedComponent/sideBar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <main className="flex-1 overflow-x-auto p-4 sm:p-6">
        {children}
      </main>
    </div>
  );
}