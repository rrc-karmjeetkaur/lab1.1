import { useEffect, useState } from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DepartmentCard } from "./components/DepartmentCard";

import type { Department } from "./types/directory";
import { employeeRepo } from "./repositories/employeeRepo";
import AddEmployeeForm from "./components/AddEmployeeForm";

export default function App() {
  const [departments, setDepartments] = useState<Department[]>([]);

  useEffect(() => {
    setDepartments(employeeRepo.getDepartments());
  }, []);

  return (
    <div className="page">
      <Header />

      <main>
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
