"use client";

import { Badge } from "@/components/ui/badge";
import { MediaCard, MediaCardProps } from "@/features/storage/components/media-card";

interface MediaCardContentProps {
    title: string;
    description: string;
    badgeText: string;
    items: MediaCardProps["data"][];
    gridClass?: string;
}

export function MediaCardContent({ title, description, badgeText, items, gridClass = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" }: MediaCardContentProps) {
    return (
        <>
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p className="text-muted-foreground">{description}</p>
                </div>
                <Badge variant="secondary">{badgeText}</Badge>
            </div>
            <div className={gridClass}>
                {items.map((item: any) => (
                    <MediaCard key={item.id} data={item} />
                ))}
            </div>
        </>
    );
}
