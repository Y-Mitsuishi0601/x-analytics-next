'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { nextAction } from '@/mock/mockData';

export function NextActionSection() {
  return (
    <Card className="border-2 border-primary bg-primary/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold text-primary">
            Next Action
          </CardTitle>
          <Badge
            variant={
              nextAction.priority === 'High' ? 'destructive' : 'secondary'
            }
          >
            {nextAction.priority} Priority
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <h3 className="font-semibold text-lg mb-2">{nextAction.title}</h3>
        <p className="text-muted-foreground">{nextAction.description}</p>
      </CardContent>
    </Card>
  );
}
