import { useFormInput } from "../hooks/useFormInput";
import { employeeService } from "../services/employeeService";
import type { Department } from "../types/directory";

interface Props {
  departments: Department[];
  onUpdate: (updated: Department[]) => void;
}

export default function AddEmployeeForm({
  departments,
  onUpdate
}: Props) {
 const firstName = useFormInput("");
const department = useFormInput(departments[0]?.name || "");

    useFormInput(departments[0]?.name || "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = employeeService.createEmployee(department.value, {
      firstName: firstName.value
    });

    if (!result.success) {
      firstName.validate(() => result.errors);
      return;
    }

    onUpdate(result.data);
    firstName.reset();
  }

  return (
    <section className="form-section">
      <h2>Add Staff Member</h2>

      {firstName.errors.length > 0 && (
        <div className="form-errors">
          <ul>
            {firstName.errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            value={firstName.value}
            onChange={(e) => firstName.setValue(e.target.value)}
          />
        </label>

        <label>
          Department
          <select
            value={department.value}
            onChange={(e) => department.setValue(e.target.value)}
          >
            {departments.map((d) => (
              <option key={d.name} value={d.name}>
                {d.name}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Add</button>
      </form>
    </section>
  );
}
