'use client';

import { TabsContent } from '@/components/ui/tabs';
import { MediaCardContent } from '@/features/storage/components/media-card-content';
import { mockImages } from '@/mock/mockData';

export function ImagesTabContent() {
  return (
    <TabsContent value="images" className="space-y-4">
      <MediaCardContent
        title="Images"
        description="PNG and JPEG files stored in your project"
        badgeText={`${mockImages.length} images`}
        items={mockImages.map((image) => ({ ...image, type: 'image' }))}
      />
    </TabsContent>
  );
}
