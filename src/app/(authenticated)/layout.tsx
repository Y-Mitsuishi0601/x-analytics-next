import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/authenticated/app-sidebar";


const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
    </>
  );
};

export default AuthenticatedLayout;