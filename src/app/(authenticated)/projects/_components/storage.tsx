"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MediaCardContent } from "@/components/ui/storage/media-card-content";
import { mockImages, mockVoices } from "@/mock/mockData";

export function Storage() {
    return (
        <div className="p-6">
            <div className="space-y-6">
                <Card className="mb-4">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">Storage Overview</CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">Details about your storage usage</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-sm">Total Storage</div>
                            <div className="text-sm">Used Storage</div>
                        </div>
                    </CardContent>
                </Card>
                
                <Tabs defaultValue="images" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="images">Images</TabsTrigger>
                        <TabsTrigger value="voices">Voices</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="images" className="space-y-4">
                        <MediaCardContent
                            title="Images"
                            description="PNG and JPEG files stored in your project"
                            badgeText={`${mockImages.length} images`}
                            items={mockImages.map((image) => ({ ...image, type: "image" }))}
                        />
                    </TabsContent>
                    
                    <TabsContent value="voices" className="space-y-4">
                        <MediaCardContent
                            title="Voices"
                            description="MP3 and M4A audio files with summaries"
                            badgeText={`${mockVoices.length} voices`}
                            items={mockVoices.map((voice) => ({ ...voice, type: "voice" }))}
                            gridClass="grid grid-cols-1 md:grid-cols-2 gap-4"
                        />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}