import { cn } from '@/lib/utils';

interface OrganizationAvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'size-6 text-xs',
  md: 'size-8 text-sm',
  lg: 'size-10 text-base',
};

export function OrganizationAvatar({
  name,
  size = 'md',
  className,
}: OrganizationAvatarProps) {
  const initial = name.charAt(0).toUpperCase();

  return (
    <div
      className={cn(
        'bg-sidebar-primary text-sidebar-primary-foreground flex items-center justify-center rounded-lg font-bold',
        sizeClasses[size],
        className
      )}
    >
      {initial}
    </div>
  );
}
