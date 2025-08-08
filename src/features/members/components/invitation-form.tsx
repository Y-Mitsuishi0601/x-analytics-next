'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

//shoul be shown as a modal

export function InvitationForm() {
  return (
    <form className="flex gap-2">
      <Input type="email" placeholder="Invite by email" />
      <Button type="submit">Invite</Button>
    </form>
  );
}
