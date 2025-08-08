'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

interface ImageType {
  type: 'image';
  url: string;
  filename: string;
  dimensions: string;
  size: string;
  uploadDate: string;
  usedInPosts: number;
}

interface VoiceType {
  type: 'voice';
  filename: string;
  duration: string;
  size: string;
  summary: string;
  uploadDate: string;
  usedInPosts: number;
}

export type MediaCardProps = {
  data: ImageType | VoiceType;
};

export function MediaCard({ data }: MediaCardProps) {
  if (data.type === 'image') {
    return (
      <Card className="overflow-hidden">
        <div className="aspect-video bg-muted flex items-center justify-center">
          <img
            src={data.url}
            alt={data.filename}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik01MCA3NUwxMDAgMTI1TDE1MCA3NUwxNzUgMTAwTDE3NSAxNjBINzVWMTAwTDUwIDc1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8L3N2Zz4K';
            }}
          />
        </div>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">{data.filename}</CardTitle>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>{data.dimensions}</span>
            <span>{data.size}</span>
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              <div>Uploaded: {data.uploadDate}</div>
              <div>Used in {data.usedInPosts} posts</div>
            </div>
            <Button variant="outline" size="sm">
              View
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-base">{data.filename}</CardTitle>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>🎵</span>
              <span>{data.duration}</span>
            </div>
          </div>
          <CardDescription>{data.size}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-3 bg-muted rounded-md">
            <h4 className="font-medium text-sm mb-2">Summary</h4>
            <p className="text-sm text-muted-foreground">{data.summary}</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between text-sm">
            <div className="text-muted-foreground">
              <div>Uploaded: {data.uploadDate}</div>
              <div>Used in {data.usedInPosts} posts</div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                ▶️ Play
              </Button>
              <Button variant="outline" size="sm">
                View
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
