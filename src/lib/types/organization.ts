export interface Organization {
  id: string;
  name: string;
  slug: string;
  my_role: string;
  member_count: number;
}

export interface UserOrganizationsResponse {
  organizations: Organization[];
  current_organization_id: string | null;
  total_count: number;
}

export interface HTTPValidationError {
  detail: Array<{
    loc: Array<string | number>;
    msg: string;
    type: string;
  }>;
}