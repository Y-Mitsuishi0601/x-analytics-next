"use client"

import { Card, CardContent } from "@/components/ui/card";
import { AvatarDisplay } from "@/components/ui/x-ui/avatar-display";
import { mockPosts } from "@/mock/mockData";

interface PostCardProps {
    post: typeof mockPosts[0];
}

export function PostCard({ post }: PostCardProps) {
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
