import { roleRepository } from "../repositories/roleRepository";

export const roleService = {
  getRoles() {
    return roleRepository.getAll();
  },

  createRole(data: any) {
    if (data.firstName.length < 3) {
      throw new Error("First name must be at least 3 characters.");
    }

    return roleRepository.create(data);
  }
};