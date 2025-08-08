'use client';
import { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/app/(authenticated)/_components/app-sidebar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ProtectedRoute } from '@/components/protected-route';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create QueryClient once and reuse it
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            retry: 2,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ProtectedRoute>
        <SidebarProvider>
          <AppSidebar />
          <SidebarTrigger />
          {children}
        </SidebarProvider>
      </ProtectedRoute>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
