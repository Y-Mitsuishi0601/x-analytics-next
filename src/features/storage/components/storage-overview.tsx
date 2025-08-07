"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function StorageOverview() {
    return (
        <Card className="mb-4">
            <CardHeader>
                <CardTitle className="text-lg font-bold">Storage Overview</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Details about your storage usage</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-sm">Total Storage</div>
                    <div className="text-sm">Used Storage</div>
                </div>
            </CardContent>
        </Card>
    );
}
