import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function MemberEdit({ member }: { member: any }) {
  return (
    <div className="flex gap-2 items-center">
      <Input type="text" defaultValue={member.name} />
      <Button variant="default">Save</Button>
      <Button variant="destructive">Delete</Button>
    </div>
  );
}
