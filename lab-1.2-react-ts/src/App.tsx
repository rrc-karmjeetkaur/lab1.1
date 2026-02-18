import { useEffect, useState } from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DepartmentCard } from "./components/DepartmentCard";
import { AddEmployeeForm } from "./components/AddEmployeeForm";

import type { Department } from "./types/directory";
import { employeeRepo } from "./repositories/employeeRepo";

export default function App() {
  const [departments, setDepartments] = useState<Department[]>([]);

  // Load departments from repository on app start
  useEffect(() => {
    const data = employeeRepo.getDepartments();
    setDepartments(data);
  }, []);

  return (
    <div className="page">
      <Header />

      <main className="main">
        {departments.map((dept) => (
          <DepartmentCard key={dept.name} department={dept} />
        ))}

        <AddEmployeeForm
          departments={departments}
          onUpdate={setDepartments}
        />
      </main>

      <Footer />
    </div>
  );
}
