'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { switchOrganization } from '@/lib/organization';

export function useSwitchOrganization() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: switchOrganization,
    onSuccess: () => {
      // Invalidate and refetch organizations to get updated current_organization_id
      queryClient.invalidateQueries({ queryKey: ['userOrganizations'] });
    },
    onError: (error) => {
      console.error('Failed to switch organization:', error);
    },
  });
}
