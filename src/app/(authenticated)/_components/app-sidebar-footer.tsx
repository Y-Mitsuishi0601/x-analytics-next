'use client';

import { useRouter } from 'next/navigation';
import { User, ChevronUp } from 'lucide-react';
import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/auth-context';

export function AppSidebarFooter() {
  const router = useRouter();
  const { logout, user } = useAuth();

  const onSubmit = async () => {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <SidebarFooter>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton>
            <User /> {user?.username || user?.email || 'User'}
            <ChevronUp className="ml-auto" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="top"
          className="w-[--radix-popper-anchor-width]"
        >
          <DropdownMenuItem>
            <span>Account</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onSubmit}>
            <span>Sign out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarFooter>
  );
}
