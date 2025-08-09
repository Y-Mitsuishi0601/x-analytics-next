import {
  UserOrganizationsResponse,
  CreateOrganizationRequest,
  CreateOrganizationResponse,
} from './types/organization';
import { authenticatedFetch } from './auth-fetch';
import { getCookie } from './utils';

export const fetchUserOrganizations =
  async (): Promise<UserOrganizationsResponse> => {
    const response = await authenticatedFetch('/organizations', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch organizations: ${response.statusText}`);
    }

    const parsed_response = await response.json();
    const organizations = parsed_response.items;

    // Get current organization ID from cookies instead of API response
    const current_organization_id = getCookie('current_org_id');

    return {
      organizations: organizations,
      current_organization_id: current_organization_id,
      total_count: organizations.length,
    };
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

  const parsed_response = await response.json();
  const data = parsed_response.data;
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
