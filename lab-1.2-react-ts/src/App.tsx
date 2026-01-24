import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DepartmentCard } from "./components/DepartmentCard";
import { AddEmployeeForm } from "./components/AddEmployeeForm";

import departmentsData from "./data/departments.json";
import type { Department, Employee } from "./types/directory";

export default function App() {
  const [departments, setDepartments] = useState<Department[]>(
    departmentsData as Department[]
  );

  function handleAddEmployee(departmentName: string, employee: Employee) {
    setDepartments((prev) =>
      prev.map((d) =>
        d.name === departmentName
          ? { ...d, employees: [...d.employees, employee] }
          : d
      )
    );
  }

  return (
    <div className="page">
      <Header />

      <main className="main">
        {departments.map((dept) => (
          <DepartmentCard key={dept.name} department={dept} />
        ))}

        <AddEmployeeForm departments={departments} onAddEmployee={handleAddEmployee} />
      </main>

      <Footer />
    </div>
  );
}
