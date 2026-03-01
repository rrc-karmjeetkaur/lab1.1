import type { Role } from "../types/organization";

let roles: Role[] = [
  { firstName: "John", lastName: "Smith", role: "CEO" }
];

export const organizationRepo = {
  getAll() {
    return roles;
  },

  create(newRole: Role) {
    roles = [...roles, newRole];
    return roles;
  },

  roleExists(roleName: string) {
    return roles.some(r => r.role === roleName);
  }
};