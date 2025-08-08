import {
  UserOrganizationsResponse,
  CreateOrganizationRequest,
  CreateOrganizationResponse,
} from './types/organization';
import { authenticatedFetch } from './auth-fetch';
import { config } from './config';

export const fetchUserOrganizations =
  async (): Promise<UserOrganizationsResponse> => {
    const response = await authenticatedFetch('/organizations', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch organizations: ${response.statusText}`);
    }

    const data: UserOrganizationsResponse = await response.json();
    return data;
  };

export const createOrganization = async (
  request: CreateOrganizationRequest
): Promise<CreateOrganizationResponse> => {
  const response = await authenticatedFetch('/organizations', {
    method: 'POST',
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(
      `Failed to create organization: ${response.statusText} - ${errorData}`
    );
  }

  const data: CreateOrganizationResponse = await response.json();
  return data;
};

export const switchOrganization = async (
  organizationId: string
): Promise<void> => {
  const response = await authenticatedFetch(
    `/organizations/${organizationId}/switch`,
    {
      method: 'POST',
    }
  );

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(
      `Failed to switch organization: ${response.statusText} - ${errorData}`
    );
  }
};
