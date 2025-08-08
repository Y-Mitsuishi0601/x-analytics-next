import { Organization } from '@/lib/types/organization';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface OrganizationListItemProps {
  organization: Organization;
  isActive: boolean;
  isDisabled: boolean;
  index: number;
  onSelect: (organization: Organization) => void;
}

export function OrganizationListItem({
  organization,
  isActive,
  isDisabled,
  index,
  onSelect,
}: OrganizationListItemProps) {
  return (
    <DropdownMenuItem
      onClick={() => onSelect(organization)}
      className={cn(
        'gap-2 p-2',
        isActive && 'bg-accent text-accent-foreground'
      )}
      disabled={isDisabled}
    >
      <div className="flex size-6 items-center justify-center rounded-md border">
        <span className="text-xs font-medium">
          {organization.name.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm">{organization.name}</span>
        <span className="text-xs text-muted-foreground">
          {organization.my_role}
        </span>
      </div>
    </DropdownMenuItem>
  );
}
