import { useRoleForm } from "../hooks/useRoleForm";
import { organizationService } from "../services/organizationService";
import type { Role } from "../types/organization";

interface Props {
  refresh: () => void;
}

export default function AddRoleForm({ refresh }: Props) {
  const { values, errors, setErrors, handleChange, handleSubmit } =
    useRoleForm(submitRole);

  function submitRole(data: Role) {
    const result = organizationService.createRole(data);

    if (!result.success) {
      setErrors(result.errors);
      return;
    }

    refresh();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Organization Member</h3>

      {errors.length > 0 && (
        <ul>
          {errors.map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      <input
        name="firstName"
        placeholder="First Name"
        value={values.firstName}
        onChange={handleChange}
      />

      <input
        name="lastName"
        placeholder="Last Name"
        value={values.lastName}
        onChange={handleChange}
      />

      <input
        name="role"
        placeholder="Role"
        value={values.role}
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}