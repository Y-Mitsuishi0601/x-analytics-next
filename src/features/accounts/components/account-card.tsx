"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AvatarDisplay } from "@/features/accounts/components/avatar-display";
import { mockAccounts } from "@/mock/mockData";

interface AccountLayerProps {
    account: typeof mockAccounts[0];
}

export function AccountCard({ account }: AccountLayerProps) {
    return (
        <Card className="mb-4">
            <CardHeader>
                <div className="flex items-center space-x-4">
                    <AvatarDisplay src={account.avatar} alt={account.displayName} fallback={account.username} />
                    <div className="flex-1">
                        <CardTitle className="text-lg">{account.displayName}</CardTitle>
                        <CardDescription>{account.username}</CardDescription>
                        <div className="flex space-x-4 mt-2 text-sm text-muted-foreground">
                            <span>{account.followers} followers</span>
                            <span>{account.following} following</span>
                        </div>
                    </div>
                    <Button variant="outline" size="sm">View All Posts</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <h4 className="font-medium text-sm">Recent Posts</h4>
                    {account.posts.map((post) => (
                        <div key={post.id} className="border-l-2 border-muted pl-4 py-2">
                            <p className="text-sm">{post.content}</p>
                            <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                                <span>{post.timestamp}</span>
                                <span>❤️ {post.likes}</span>
                                <span>🔄 {post.retweets}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
