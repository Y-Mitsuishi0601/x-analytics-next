"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { mockImages, mockVoices } from "@/mock/mockData";

function ImageCard({ image }: { image: typeof mockImages[0] }) {
    return (
        <Card className="overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
                <img 
                    src={image.url} 
                    alt={image.filename}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik01MCA3NUwxMDAgMTI1TDE1MCA3NUwxNzUgMTAwTDE3NSAxNjBINzVWMTAwTDUwIDc1WiIgZmlsbD0iI0Q5RDlEOSIvPgo8L3N2Zz4K"
                    }}
                />
            </div>
            <CardHeader className="pb-3">
                <CardTitle className="text-base">{image.filename}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{image.dimensions}</span>
                    <span>{image.size}</span>
                </div>
            </CardHeader>
            <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                        <div>Uploaded: {image.uploadDate}</div>
                        <div>Used in {image.usedInPosts} posts</div>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                </div>
            </CardContent>
        </Card>
    )
}

function VoiceCard({ voice }: { voice: typeof mockVoices[0] }) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{voice.filename}</CardTitle>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>🎵</span>
                        <span>{voice.duration}</span>
                    </div>
                </div>
                <CardDescription>{voice.size}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="p-3 bg-muted rounded-md">
                    <h4 className="font-medium text-sm mb-2">Summary</h4>
                    <p className="text-sm text-muted-foreground">{voice.summary}</p>
                </div>
                
                <Separator />
                
                <div className="flex items-center justify-between text-sm">
                    <div className="text-muted-foreground">
                        <div>Uploaded: {voice.uploadDate}</div>
                        <div>Used in {voice.usedInPosts} posts</div>
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="outline" size="sm">▶️ Play</Button>
                        <Button variant="outline" size="sm">View</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

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
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">Images</h2>
                                <p className="text-muted-foreground">PNG and JPEG files stored in your project</p>
                            </div>
                            <Badge variant="secondary">{mockImages.length} images</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {mockImages.map((image) => (
                                <ImageCard key={image.id} image={image} />
                            ))}
                        </div>
                    </TabsContent>
                    
                    <TabsContent value="voices" className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold">Voices</h2>
                                <p className="text-muted-foreground">MP3 and M4A audio files with summaries</p>
                            </div>
                            <Badge variant="secondary">{mockVoices.length} voices</Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {mockVoices.map((voice) => (
                                <VoiceCard key={voice.id} voice={voice} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}