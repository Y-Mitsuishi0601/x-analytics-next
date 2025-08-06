"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button";
import { nextAction, projectSummary, topKeywords, topAccounts, topHashtags } from "@/mock/mockData";
import { SummaryItem } from "../../../../components/ui/insights/summary-item";
import { useRef } from "react";

export function Insights() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImportCSV = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="p-6">
            <div className="space-y-6">
                {/* Import CSV Button */}
                <div className="flex justify-end mb-4">
                    <Button
                        variant="default"
                        onClick={handleImportCSV}
                        className="transition-transform transform hover:scale-105"
                    >
                        + Import CSV
                    </Button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        accept=".csv"
                        style={{ display: "none" }}
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                console.log("Uploaded file:", file);
                                // Add further processing logic here
                            }
                        }}
                    />
                </div>

                {/* Next Action Section */}
                <Card className="border-2 border-primary bg-primary/5">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-2xl font-bold text-primary">Next Action</CardTitle>
                            <Badge variant={nextAction.priority === "High" ? "destructive" : "secondary"}>
                                {nextAction.priority} Priority
                            </Badge>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h3 className="font-semibold text-lg mb-2">{nextAction.title}</h3>
                        <p className="text-muted-foreground">{nextAction.description}</p>
                    </CardContent>
                </Card>

                {/* Project Summary Section */}
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

                {/* Keywords and Hashtags Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">Keywords and Hashtags</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">Most popular words, accounts and hashtags in this project</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div>
                            <h4 className="font-medium mb-3">Top Keywords</h4>
                            <div className="flex flex-wrap gap-2">
                                {topKeywords.map((keyword, index) => (
                                    <Badge key={index} variant="outline">{keyword}</Badge>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-medium mb-3">Top Accounts</h4>
                            <div className="flex flex-wrap gap-2">
                                {topAccounts.map((account, index) => (
                                    <Badge key={index} variant="secondary">{account}</Badge>
                                ))}
                            </div>
                        </div>
                        
                        <div>
                            <h4 className="font-medium mb-3">Top Hashtags</h4>
                            <div className="flex flex-wrap gap-2">
                                {topHashtags.map((hashtag, index) => (
                                    <Badge key={index} variant="default">{hashtag}</Badge>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}