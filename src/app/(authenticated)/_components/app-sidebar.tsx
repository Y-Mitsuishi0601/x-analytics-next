'use client';

import { Sidebar, SidebarHeader } from '@/components/ui/sidebar';

import { OrganizationSelector } from './organization-selector';
import { AppSidebarFooter } from './app-sidebar-footer';
import { AppSidebarContent } from './app-sidebar-content';

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <OrganizationSelector />
      </SidebarHeader>
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
}
