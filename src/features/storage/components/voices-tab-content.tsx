'use client';

import { TabsContent } from '@/components/ui/tabs';
import { MediaCardContent } from '@/features/storage/components/media-card-content';
import { mockVoices } from '@/mock/mockData';

export function VoicesTabContent() {
  return (
    <TabsContent value="voices" className="space-y-4">
      <MediaCardContent
        title="Voices"
        description="MP3 and M4A audio files with summaries"
        badgeText={`${mockVoices.length} voices`}
        items={mockVoices.map((voice) => ({ ...voice, type: 'voice' }))}
        gridClass="grid grid-cols-1 md:grid-cols-2 gap-4"
      />
    </TabsContent>
  );
}
