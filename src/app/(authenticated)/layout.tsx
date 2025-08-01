import type { Metadata } from "next";
import { Sidebar } from "@/components/ui/sidebar";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <Sidebar/>
        {children}
    </>
  );
};