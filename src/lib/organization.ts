import {
  UserOrganizationsResponse,
  CreateOrganizationRequest,
  CreateOrganizationResponse,
} from './types/organization';
import { fetchWithAuth } from './base';

export const fetchUserOrganizations =
  async (): Promise<UserOrganizationsResponse> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const fullUrl = `${apiUrl}/organizations`;

    const response = await fetchWithAuth({
      url: fullUrl,
      options: {
        method: 'GET',
      },
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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const fullUrl = `${apiUrl}/organizations`;

  const response = await fetchWithAuth({
    url: fullUrl,
    options: {
      method: 'POST',
      body: JSON.stringify(request),
    },
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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const fullUrl = `${apiUrl}/organizations/${organizationId}/switch`;

  const response = await fetchWithAuth({
    url: fullUrl,
    options: {
      method: 'POST',
    },
  });

  if (!response.ok) {
    const errorData = await response.text();
    throw new Error(
      `Failed to switch organization: ${response.statusText} - ${errorData}`
    );
  }
};
