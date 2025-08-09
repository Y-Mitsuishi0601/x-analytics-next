import { AppSidebar } from '@/app/(authenticated)/_components/app-sidebar';
import { QueryClientProvider } from '@/components/providers';
import { ProtectedRoute } from '@/components/protected-route';

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider>
      <ProtectedRoute>
        <div className="flex h-screen bg-gray-50">
          {/* Fixed sidebar */}
          <div className="w-64 bg-white shadow-sm border-r">
            <AppSidebar />
          </div>

          {/* Main content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Optional header */}
            <header className="bg-white shadow-sm border-b px-6 py-4">
              <h1 className="text-lg font-semibold">Dashboard</h1>
            </header>

            {/* Page content */}
            <main className="flex-1 overflow-auto p-6">{children}</main>
          </div>
        </div>
      </ProtectedRoute>
    </QueryClientProvider>
  );
}
