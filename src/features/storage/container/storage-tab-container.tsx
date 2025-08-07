"use client"

import { StorageOverview } from "@/features/storage/components/storage-overview";
import { ImagesTabContent } from "@/features/storage/components/images-tab-content";
import { VoicesTabContent } from "@/features/storage/components/voices-tab-content";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function StorageTabContainer() {
    return (
        <div className="p-6">
            <div className="space-y-6">
                <StorageOverview />
                <Tabs defaultValue="images" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="images">Images</TabsTrigger>
                        <TabsTrigger value="voices">Voices</TabsTrigger>
                    </TabsList>
                    <ImagesTabContent />
                    <VoicesTabContent />
                </Tabs>
            </div>
        </div>
    );
}