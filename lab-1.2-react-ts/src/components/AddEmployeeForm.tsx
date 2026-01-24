import React, { useMemo, useState } from "react";
import type { Department, Employee } from "../types/directory";

type Props = {
  departments: Department[];
  onAddEmployee: (departmentName: string, employee: Employee) => void;
};

export function AddEmployeeForm({ departments, onAddEmployee }: Props) {
  const departmentNames = useMemo(() => departments.map((d) => d.name), [departments]);

  const [firstName, setFirstName] = useState("");
  const [department, setDepartment] = useState(departmentNames[0] ?? "");
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors([]);

    const trimmed = firstName.trim();
    const newErrors: string[] = [];

    if (trimmed.length < 3) newErrors.push("First Name must be at least 3 characters.");
    if (!departmentNames.includes(department)) newErrors.push("Please choose an existing department.");

    if (newErrors.length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddEmployee(department, { firstName: trimmed } as Employee);
    setFirstName("");
    setDepartment(departmentNames[0] ?? "");
  };

  return (
    <section className="form-section">
      <h2>Add Staff Member</h2>

      {errors.length > 0 && (
        <div className="form-errors" role="alert">
          <ul>
            {errors.map((msg) => (
              <li key={msg}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      <form className="employee-form" onSubmit={handleSubmit}>
        <label>
          First Name
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Minimum 3 characters"
          />
        </label>

        <label>
          Department
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            {departmentNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Add</button>
      </form>
    </section>
  );
}
