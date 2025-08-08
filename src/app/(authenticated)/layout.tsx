"use client"
import type { Metadata } from "next";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/(authenticated)/_components/app-sidebar";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';



// export const metadata: Metadata = {
//   title: "X-Analytics-Agent",
//   description: "",
// };

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          {children}
        </SidebarProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}