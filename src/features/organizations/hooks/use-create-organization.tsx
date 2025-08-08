'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Organization } from '@/lib/types/organization';
import { createOrganization } from '@/lib/organization';

export function useCreateOrganization() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createOrganization,
    onSuccess: (newOrg: Organization) => {
      queryClient.invalidateQueries({ queryKey: ['userOrganizations'] });
    },
    onError: (error) => {
      console.error('Failed to create organization:', error);
    },
  });
}
