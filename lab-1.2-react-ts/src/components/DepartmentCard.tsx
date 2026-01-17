import type { Department } from "../types/directory";

type Props = {
  department: Department;
};

export function DepartmentCard({ department }: Props) {
  return (
    <section className="department">
      <h2>{department.name}</h2>

      <ul className="employee-list">
        {department.employees.map((emp, index) => {
          const fullName = emp.lastName
            ? `${emp.firstName} ${emp.lastName}`
            : emp.firstName;

          return <li key={`${department.name}-${index}`}>{fullName}</li>;
        })}
      </ul>
    </section>
  );
}
