import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { EmployeesPage } from "./pages/EmployeesPage";
import { OrganizationPage } from "./pages/OrganizationPage";

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
      <Navbar />

      <main className="main">
        <Routes>
          <Route path="/" element={<Navigate to="/employees" />} />
          <Route
            path="/employees"
            element={
              <EmployeesPage
                departments={departments}
                onAddEmployee={handleAddEmployee}
              />
            }
          />
          <Route path="/organization" element={<OrganizationPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}