import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function MemberList({ members }: { members: any[] }) {
  return (
    <Card>
      <CardContent>
        {members.map((m) => (
          <div key={m.id} className="flex justify-between py-2 border-b">
            <span>{m.name}</span>
            <span>{m.role}</span>
            <span>{m.status}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}