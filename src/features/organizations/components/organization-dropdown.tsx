'use client';

import * as React from 'react';
import { ChevronsUpDown, Plus } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Organization } from '@/lib/types/organization';
import { useIsMobile } from '@/hooks/use-mobile';
import { useOrganizations } from '../hooks/use-organizations';
import { useSwitchOrganization } from '../hooks/use-switch-organization';
import { OrganizationAvatar } from './organization-avatar';
import { OrganizationListItem } from './organization-list-item';
import { CreateOrganizationDialog } from './create-organization-dialog';

export function OrganizationDropdown() {
  const isMobile = useIsMobile();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = React.useState(false);

  const { organizations, currentOrganizationId, isLoading, isError } =
    useOrganizations();

  const switchOrgMutation = useSwitchOrganization();

  const [activeTeam, setActiveTeam] = React.useState<
    Organization | undefined
  >();

  // Set the initial active team when data loads
  React.useEffect(() => {
    if (organizations.length > 0 && !activeTeam) {
      // Try to use current_organization_id first, fall back to first org
      const currentOrg = currentOrganizationId
        ? organizations.find((org) => org.id === currentOrganizationId)
        : organizations[0];
      setActiveTeam(currentOrg || organizations[0]);
    }
  }, [organizations, activeTeam, currentOrganizationId]);

  const handleSwitchOrg = (org: Organization) => {
    if (org.id !== activeTeam?.id) {
      switchOrgMutation.mutate(org.id);
    }
    setActiveTeam(org);
  };

  // Loading state
  if (isLoading) {
    return (
      <Button
        variant="ghost"
        size="lg"
        disabled
        className="w-full justify-start h-auto p-3"
      >
        <OrganizationAvatar name="Loading" size="md" />
        <div className="grid flex-1 text-left text-sm leading-tight ml-3">
          <span className="truncate font-medium">Loading...</span>
        </div>
      </Button>
    );
  }

  // Error state
  if (isError) {
    return (
      <Button
        variant="ghost"
        size="lg"
        disabled
        className="w-full justify-start h-auto p-3"
      >
        <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-red-100">
          ⚠️
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight ml-3">
          <span className="truncate font-medium">Error loading orgs</span>
        </div>
      </Button>
    );
  }

  // No organizations
  if (organizations.length === 0) {
    return (
      <CreateOrganizationDialog
        isOpen={isCreateDialogOpen}
        onOpenChange={setIsCreateDialogOpen}
      >
        <Button
          variant="ghost"
          size="lg"
          className="w-full justify-start h-auto p-3"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-100">
            <Plus className="size-4" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight ml-3">
            <span className="truncate font-medium">Create organization</span>
          </div>
        </Button>
      </CreateOrganizationDialog>
    );
  }

  if (!activeTeam) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="p-2">
        <Button
          variant="ghost"
          size="lg"
          className="w-full justify-start h-auto py-2 data-[state=open]:bg-accent"
        >
          <OrganizationAvatar name={activeTeam.name} size="md" />
          <div className="grid flex-1 text-left text-sm leading-tight ml-3">
            <span className="truncate font-medium">{activeTeam.name}</span>
            <span className="truncate text-xs text-muted-foreground">
              {activeTeam.my_role}
            </span>
          </div>
          <ChevronsUpDown className="ml-auto w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="start"
        side={isMobile ? 'bottom' : 'right'}
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-muted-foreground text-xs">
          Organizations ({organizations.length})
        </DropdownMenuLabel>
        {organizations.map((org, index) => (
          <OrganizationListItem
            key={org.id}
            organization={org}
            isActive={activeTeam.id === org.id}
            isDisabled={switchOrgMutation.isPending}
            index={index}
            onSelect={handleSwitchOrg}
          />
        ))}
        <DropdownMenuSeparator />
        <CreateOrganizationDialog
          isOpen={isCreateDialogOpen}
          onOpenChange={setIsCreateDialogOpen}
          onSuccess={() => setIsCreateDialogOpen(false)}
        >
          <DropdownMenuItem
            className="gap-2 p-2"
            onSelect={(e) => {
              e.preventDefault();
              setIsCreateDialogOpen(true);
            }}
          >
            <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
              <Plus className="size-4" />
            </div>
            <div className="text-muted-foreground font-medium">
              Add organization
            </div>
          </DropdownMenuItem>
        </CreateOrganizationDialog>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
