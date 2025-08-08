'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { topKeywords, topAccounts, topHashtags } from '@/mock/mockData';

export function KeywordsHashtagsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold">
          Keywords and Hashtags
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Most popular words, accounts and hashtags in this project
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-medium mb-3">Top Keywords</h4>
          <div className="flex flex-wrap gap-2">
            {topKeywords.map((keyword, index) => (
              <Badge key={index} variant="outline">
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-3">Top Accounts</h4>
          <div className="flex flex-wrap gap-2">
            {topAccounts.map((account, index) => (
              <Badge key={index} variant="secondary">
                {account}
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-medium mb-3">Top Hashtags</h4>
          <div className="flex flex-wrap gap-2">
            {topHashtags.map((hashtag, index) => (
              <Badge key={index} variant="default">
                {hashtag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
