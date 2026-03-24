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

  // Load data from backend
  useEffect(() => {
    async function loadData() {
      try {
        const data = await employeeRepo.getDepartments();
        setDepartments(data);
      } catch (error) {
        console.error("Error loading departments:", error);
      }
    }

    loadData();
  }, []);

  return (
    <div className="page">
      <Header />

      <main className="main">
        {departments.length === 0 ? (
          <p>Loading data...</p>
        ) : (
          departments.map((dept) => (
            <DepartmentCard key={dept.id} department={dept} />
          ))
        )}

        <AddEmployeeForm
          departments={departments}
          onUpdate={setDepartments}
        />
      </main>

      <Footer />
    </div>
  );
}