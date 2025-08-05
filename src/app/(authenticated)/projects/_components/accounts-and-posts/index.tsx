"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import styles from "./accounts-and-posts.module.css";
import { mockAccounts, mockPosts } from "@/mock/mockData";
import { AvatarDisplay } from "./avatar-display";

function AccountCard({ account }: { account: typeof mockAccounts[0] }) {
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

function PostCard({ post }: { post: typeof mockPosts[0] }) {
    return (
        <Card className="mb-4">
            <CardContent className="pt-6">
                <div className="flex items-start space-x-3">
                    <AvatarDisplay src="/placeholder-avatar.jpg" alt={post.displayName} fallback={post.username} />
                    <div className="flex-1 space-y-2">
                        <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{post.displayName}</span>
                            <span className="text-muted-foreground text-sm">{post.username}</span>
                            <span className="text-muted-foreground text-sm">·</span>
                            <span className="text-muted-foreground text-sm">{post.timestamp}</span>
                        </div>
                        <p className="text-sm">{post.content}</p>
                        <div className="flex items-center space-x-6 text-muted-foreground text-sm">
                            <button className="flex items-center space-x-1 hover:text-blue-500">
                                <span>💬</span>
                                <span>{post.replies}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-green-500">
                                <span>🔄</span>
                                <span>{post.retweets}</span>
                            </button>
                            <button className="flex items-center space-x-1 hover:text-red-500">
                                <span>❤️</span>
                                <span>{post.likes}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

export function AccountsAndPosts() {
    return (
        <div className={styles.container}>
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
