import { useFormInput } from "../hooks/useFormInput";
import { employeeRepo } from "../repositories/employeeRepo";
import type { Department } from "../types/directory";
import { SignedIn, SignedOut, SignInButton, useAuth } from "@clerk/clerk-react";

interface Props {
  departments: Department[];
  onUpdate: () => void;
}

export default function AddEmployeeForm({
  departments,
  onUpdate
}: Props) {

  const firstName = useFormInput("");
  const department = useFormInput(departments[0]?.id?.toString() || "");

  const { getToken } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (firstName.value.trim().length < 2) {
      alert("First name must be at least 2 characters");
      return;
    }

    try {
      const token = await getToken();

      if (!token) {
        alert("Please login again");
        return;
      }

      await employeeRepo.createEmployee(
        {
          firstName: firstName.value,
          lastName: "",
          departmentId: Number(department.value)
        },
        token
      );

      onUpdate();   // refresh data
      firstName.reset();

    } catch (err) {
      console.error(err);
      alert("Error adding employee");
    }
  }

  return (
    <section className="form-section">

      <SignedOut>
        <p>Please login to add employee</p>
        <SignInButton />
      </SignedOut>

      <SignedIn>
        <h2>Add Staff Member</h2>

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