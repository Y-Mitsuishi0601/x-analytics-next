"use client";

import { Plus } from "lucide-react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import {
    ChartBarDecreasing,
    User,
    Settings,
} from "lucide-react";

export function AppSidebarContent() {
    
    const menuItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: ChartBarDecreasing,
    },
    {
        title: "Member",
        url: "/members",
        icon: User,
        subItems: [
        {
            title: "Invite a Member",
            url: "/members/invite",
        },
        ],
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
    ]
    return (
        <SidebarContent>
        <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction>
            <Plus />
            <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
            <SidebarMenu>
                {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                    <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                    </a>
                    </SidebarMenuButton>
                    {item.subItems && (
                    <SidebarMenuSub>
                        {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                            <a href={subItem.url}>
                                <span>{subItem.title}</span>
                            </a>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        ))}
                    </SidebarMenuSub>
                    )}
                </SidebarMenuItem>
                ))}
            </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
        </SidebarContent>
    );
}