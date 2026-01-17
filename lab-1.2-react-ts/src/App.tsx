import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { DepartmentCard } from "./components/DepartmentCard";

import departmentsData from "./data/departments.json";
import type { Department } from "./types/directory";

export default function App() {
  const departments = departmentsData as Department[];

  return (
    <div className="page">
      <Header />

      <main className="main">
        {departments.map((dept) => (
          <DepartmentCard key={dept.name} department={dept} />
        ))}
      </main>

      <Footer />
    </div>
  );
}
