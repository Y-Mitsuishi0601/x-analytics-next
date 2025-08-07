"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { projectSummary } from "@/mock/mockData";
import { SummaryItem } from "@/components/ui/insights/summary-item";

export function ProjectSummarySection() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-bold">Project Summary</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">Overview of your project workflow and data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <SummaryItem label="Accounts" value={projectSummary.totalAccounts} />
                    <SummaryItem label="Posts" value={projectSummary.totalPosts.toLocaleString()} />
                    <SummaryItem label="Images" value={projectSummary.totalImages} />
                    <SummaryItem label="Voices" value={projectSummary.totalVoices} />
                </div>
                <Separator />
                <div className="text-sm text-muted-foreground">
                    Analysis Period: {projectSummary.analysisPeriod}
                </div>
            </CardContent>
        </Card>
    );
}
