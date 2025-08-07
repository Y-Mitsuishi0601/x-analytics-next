import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function MemberActivityLog({ logs }: { logs: any[] }) {
  return (
    <Card>
      <CardContent>
        <ul className="list-disc pl-5">
          {logs.map((log, i) => (
            <li key={i}>{log}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}