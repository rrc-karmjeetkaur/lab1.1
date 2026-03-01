import { organizationRepo } from "../repositories/organizationRepo";
import type { Role } from "../types/organization";

export const organizationService = {
  createRole(data: Role) {
    const errors: string[] = [];

    if (data.firstName.trim().length < 3) {
      errors.push("First name must be at least 3 characters.");
    }

    if (organizationRepo.roleExists(data.role)) {
      errors.push("This role is already occupied.");
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }

    organizationRepo.create(data);
    return { success: true, errors: [] };
  }
};