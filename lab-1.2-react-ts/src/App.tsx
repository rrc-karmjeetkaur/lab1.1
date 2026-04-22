import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DepartmentCard } from "./components/DepartmentCard";
import AddEmployeeForm from "./components/AddEmployeeForm";

import type { Department } from "./types/directory";
import { employeeRepo } from "./repositories/employeeRepo";

import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function App() {

  const queryClient = useQueryClient();

  const { data: departments = [], isLoading } = useQuery<Department[]>({
    queryKey: ["departments"],
    queryFn: employeeRepo.getDepartments
  });

  if (isLoading) return <p>Loading data...</p>;

  return (
    <div className="page">
      <Header />

      <main>
        {departments.map((dept) => (
          <DepartmentCard key={dept.id} department={dept} />
        ))}

        <AddEmployeeForm
          departments={departments}
          onUpdate={() =>
            queryClient.invalidateQueries({ queryKey: ["departments"] })
          }
        />
      </main>

      <Footer />
    </div>
  );
}