import { UserOrganizationsResponse } from "./types/organization";



export const fetchUserOrganizations = async (): Promise<UserOrganizationsResponse> => {
    const response = await fetchWithAuth({
    url: `${process.env.NEXT_PUBLIC_API_URL}/organizations`,
    options: {
      method: "POST",
    },
  });

  console.log("fetchUserOrganizations response:", response);
  if (!response.ok) {
    throw new Error(`Failed to fetch organizations: ${response.statusText}`);
  }

  const data: UserOrganizationsResponse = await response.json();
  return data;
};


