"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function InvitationForm() {
  return (
    <form className="flex gap-2">
      <Input type="email" placeholder="Invite by email" />
      <Button type="submit">Invite</Button>
    </form>
  );
}