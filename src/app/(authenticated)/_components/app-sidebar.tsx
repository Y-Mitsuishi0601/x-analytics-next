"use client"
import { 
  User,
  GalleryVerticalEnd,
  AudioWaveform,
  Command,
  ChartBarDecreasing,
  Settings,
} from "lucide-react"
import { useEffect, useState } from "react";

import {
  Sidebar,
  SidebarHeader,
} from "@/components/ui/sidebar"

import { 
  TeamSwitcher
} from "./team-switcher"
import { AppSidebarFooter } from "./app-sidebar-footer"
import { AppSidebarContent } from "./app-sidebar-content"

const teams = [
  {
    name: "Acme Inc",
    logo: GalleryVerticalEnd,
    plan: "Enterprise",
  },
  {
    name: "Acme Corp.",
    logo: AudioWaveform,
    plan: "Startup",
  },
  {
    name: "Evil Corp.",
    logo: Command,
    plan: "Free",
  },
]

export function AppSidebar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Sidebar>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <AppSidebarContent />
      <AppSidebarFooter />
    </Sidebar>
  );
}