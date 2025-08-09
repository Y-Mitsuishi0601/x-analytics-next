import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface RoleDropdownProps {
  currentRole: string;
  onChange: (role: string) => void;
}

export const RoleDropdown: React.FC<RoleDropdownProps> = ({ currentRole, onChange }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center justify-between">
          {currentRole}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onChange('Admin')}>Admin</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange('Manager')}>Manager</DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChange('Member')}>Member</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
