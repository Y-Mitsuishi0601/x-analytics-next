import { OrganizationSelector } from './organization-selector';
import { AppSidebarContent } from './app-sidebar-content';
import { AppSidebarFooter } from './app-sidebar-footer';

export function AppSidebar() {
  return (
    <div className="h-full flex flex-col">
      {/* Header with org selector */}
      <div className="p-4 border-b">
        <OrganizationSelector />
      </div>

      {/* Navigation content */}
      <div className="flex-1 p-4">
        <AppSidebarContent />
      </div>

      {/* Footer */}
      <div className="p-4 border-t">
        <AppSidebarFooter />
      </div>
    </div>
  );
}
