'use client';

import { Badge } from '@/components/ui/badge';
import { mockPosts } from '@/mock/mockData';
import { PostCard } from '@/features/accounts/components/post-card';

export function PostsTabContent() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Posts</h2>
          <p className="text-muted-foreground">
            All posts from your project accounts
          </p>
        </div>
        <Badge variant="secondary">{mockPosts.length} posts</Badge>
      </div>
      <div className="space-y-4">
        {mockPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
