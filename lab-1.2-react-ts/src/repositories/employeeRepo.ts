import type { Department, Employee } from "../types/directory";

export const employeeRepo = {

  async getDepartments(): Promise<Department[]> {

    const res = await fetch("http://localhost:3001/employees");
    const employees = await res.json();

    const map: Record<string, Employee[]> = {};

    employees.forEach((emp: any) => {
      if (!map[emp.department]) {
        map[emp.department] = [];
      }

      map[emp.department].push({
        firstName: emp.firstName
      });
    });

    const departments: Department[] = Object.keys(map).map((name) => ({
      name,
      employees: map[name]
    }));

    return departments;
  },

  async createEmployee(employee: any) {

    const res = await fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    });

    return res.json();
  }
};