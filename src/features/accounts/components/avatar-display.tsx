'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function AvatarDisplay({
  src,
  alt,
  fallback,
}: {
  src: string;
  alt: string;
  fallback: string;
}) {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  );
}
