import { useFormInput } from "../hooks/useFormInput";
import { employeeRepo } from "../repositories/employeeRepo";
import type { Department } from "../types/directory";
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";

interface Props {
  departments: Department[];
  onUpdate: (updated: Department[]) => void;
}

export default function AddEmployeeForm({
  departments,
  onUpdate
}: Props) {

  const firstName = useFormInput("");
  const department = useFormInput(departments[0]?.id?.toString() || "");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (firstName.value.trim().length < 2) {
      firstName.validate(() => ["First name must be at least 2 characters"]);
      return;
    }

    await employeeRepo.createEmployee({
      firstName: firstName.value,
      lastName: "",
      departmentId: Number(department.value)
    });

    const updated = await employeeRepo.getDepartments();
    onUpdate(updated);

    firstName.reset();
  }

  return (
    <section className="form-section">

      {/*  NOT LOGGED IN */}
      <SignedOut>
        <p>Please login to add employee</p>
        <SignInButton />
      </SignedOut>

      {/*  LOGGED IN */}
      <SignedIn>
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
                <option key={d.id} value={d.id?.toString() || ""}>
                  {d.name}
                </option>
              ))}
            </select>
          </label>

          <button type="submit">Add</button>
        </form>
      </SignedIn>

    </section>
  );
}