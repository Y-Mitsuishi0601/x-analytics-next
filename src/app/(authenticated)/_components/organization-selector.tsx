import { OrganizationDropdown } from '@/features/organizations';

/**
 * Layout-specific wrapper for the organization selector in the sidebar.
 * This component handles any layout-specific styling or positioning requirements
 * while delegating the main functionality to the reusable OrganizationDropdown component.
 */
export function OrganizationSelector() {
  return (
    <div>
      <OrganizationDropdown />
    </div>
  );
}
