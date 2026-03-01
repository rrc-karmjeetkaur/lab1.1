import { useState } from "react";
import { organizationRepo } from "../repositories/organizationRepo";
import AddRoleForm from "../components/AddRoleForm";
import type { Role } from "../types/organization";

export default function OrganizationPage() {
  const [roles, setRoles] = useState<Role[]>(
    organizationRepo.getAll()
  );

  function refresh() {
    setRoles([...organizationRepo.getAll()]);
  }

  return (
    <div>
      <h2>Organization</h2>

      {roles.map((r) => (
        <div key={r.role}>
          <strong>{r.firstName} {r.lastName}</strong> — {r.role}
        </div>
      ))}

      <AddRoleForm refresh={refresh} />
    </div>
  );
}