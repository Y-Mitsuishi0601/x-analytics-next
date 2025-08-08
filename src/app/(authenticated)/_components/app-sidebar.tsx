'use client';
import {
  User,
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  ChartBarDecreasing,
  Settings,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { Sidebar, SidebarHeader } from '@/components/ui/sidebar';

import { TeamSwitcher } from './team-switcher';
import { AppSidebarFooter } from './app-sidebar-footer';
import { AppSidebarContent } from './app-sidebar-content';
import { useQuery } from '@tanstack/react-query';
import { UserOrganizationsResponse } from '@/lib/types/organization';
import { fetchUserOrganizations } from '@/lib/organization';

export function AppSidebar() {
  const {
    data: organizationsResponse,
    isLoading, // Destructure isLoading
    isError, // Destructure isError
  } = useQuery<UserOrganizationsResponse>({
    queryKey: ['userOrganizations'],
    queryFn: fetchUserOrganizations,
  });

  // Handle loading state
  if (isLoading) {
    return (
      <Sidebar>
        <SidebarHeader>
          {/* A loading spinner or skeleton component is a good practice here */}
          <div>Loading organizations...</div>
        </SidebarHeader>
        <AppSidebarContent />
        <AppSidebarFooter />
      </Sidebar>
    );
  }

  // Handle error state
  if (isError) {
    return (
      <Sidebar>
        <SidebarHeader>
          <div>Error loading organizations.</div>
        </SidebarHeader>
        <AppSidebarContent />
        <AppSidebarFooter />
      </Sidebar>
    );
  }

  // Once data is loaded and no errors occurred, render the full component
  return (
    <Sidebar>
      <SidebarHeader>
        {/* We can now safely assume organizationsResponse is available */}
        <TeamSwitcher organizations={organizationsResponse?.organizations} />
      </SidebarHeader>
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
}
