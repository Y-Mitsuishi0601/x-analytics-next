'use client';

import { useQuery } from '@tanstack/react-query';
import { UserOrganizationsResponse } from '@/lib/types/organization';
import { fetchUserOrganizations } from '@/lib/organization';

export function useOrganizations() {
  const {
    data: organizationsResponse,
    isLoading,
    isError,
    error,
  } = useQuery<UserOrganizationsResponse>({
    queryKey: ['userOrganizations'],
    queryFn: fetchUserOrganizations,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  const organizations = organizationsResponse?.organizations || [];
  const currentOrganizationId = organizationsResponse?.current_organization_id;

  return {
    organizations,
    currentOrganizationId,
    organizationsResponse,
    isLoading,
    isError,
    error,
  };
}
