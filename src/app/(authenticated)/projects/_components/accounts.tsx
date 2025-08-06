"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { mockAccounts, mockPosts } from "@/mock/mockData";
import { AvatarDisplay } from "@/components/ui/x-ui/avatar-display";
import { PostCard } from "@/components/ui/x-ui/post-card";
import { AccountCard } from "@/components/ui/x-ui/account-card";

export function Accounts() {
    return (
        <div className="p-6">
            <Tabs defaultValue="accounts" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="accounts">Accounts</TabsTrigger>
                    <TabsTrigger value="posts">Posts</TabsTrigger>
                </TabsList>
                
                <TabsContent value="accounts" className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">Accounts</h2>
                            <p className="text-muted-foreground">List of accounts with their recent posts</p>
                        </div>
                        <Badge variant="secondary">{mockAccounts.length} accounts</Badge>
                    </div>
                    
                    <div className="space-y-4">
                        {mockAccounts.map((account) => (
                            <AccountCard key={account.id} account={account} />
                        ))}
                    </div>
                </TabsContent>
                
                <TabsContent value="posts" className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold">Posts</h2>
                            <p className="text-muted-foreground">All posts from your project accounts</p>
                        </div>
                        <Badge variant="secondary">{mockPosts.length} posts</Badge>
                    </div>
                    
                    <div className="space-y-4">
                        {mockPosts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
