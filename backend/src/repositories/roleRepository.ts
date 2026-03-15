import { roles } from "../data/data";

export const roleRepository = {
  getAll() {
    return roles;
  },

  create(role: any) {
    roles.push(role);
    return role;
  }
};