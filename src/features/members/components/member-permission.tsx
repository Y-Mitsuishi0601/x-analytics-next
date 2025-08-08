import React from 'react';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

export function MemberPermission({ member }: { member: any }) {
  return (
    <div className="flex items-center gap-2">
      <span>{member.name}</span>
      <Select defaultValue={member.role}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Select role" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="general">Member</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
