"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { nextAction, projectSummary, topKeywords, topAccounts, topHashtags } from "@/mock/mockData";
import styles from "./insights.module.css";

export function Insights() {
    return (
        <div className={styles.container}>
            <div className="space-y-6 p-6">
                {/* Next Action Section */}
                <Card className="border-2 border-primary bg-primary/5">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-xl">Next Action</CardTitle>
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
                        <CardTitle>Project Summary</CardTitle>
                        <CardDescription>Overview of your project workflow and data</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{projectSummary.totalAccounts}</div>
                                <div className="text-sm text-muted-foreground">Accounts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{projectSummary.totalPosts.toLocaleString()}</div>
                                <div className="text-sm text-muted-foreground">Posts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{projectSummary.totalImages}</div>
                                <div className="text-sm text-muted-foreground">Images</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-primary">{projectSummary.totalVoices}</div>
                                <div className="text-sm text-muted-foreground">Voices</div>
                            </div>
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
                        <CardTitle>Keywords and Hashtags</CardTitle>
                        <CardDescription>Most popular words, accounts and hashtags in this project</CardDescription>
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