import { DepartmentCard } from "../components/DepartmentCard";
import { AddEmployeeForm } from "../components/AddEmployeeForm";
import type { Department, Employee } from "../types/directory";

type Props = {
  departments: Department[];
  onAddEmployee: (departmentName: string, employee: Employee) => void;
};

export function EmployeesPage({ departments, onAddEmployee }: Props) {
  return (
    <section>
      <h2>Employees</h2>

      {departments.map((dept) => (
        <DepartmentCard key={dept.name} department={dept} />
      ))}

      <AddEmployeeForm
        departments={departments}
        onAddEmployee={onAddEmployee}
      />
    </section>
  );
}