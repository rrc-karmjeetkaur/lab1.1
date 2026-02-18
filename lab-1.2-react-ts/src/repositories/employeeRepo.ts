import departmentsData from "../data/departments.json";
import type { Department, Employee } from "../types/directory";

let departments: Department[] = departmentsData as Department[];

export const employeeRepo = {
  getDepartments(): Department[] {
    return departments;
  },

  createEmployee(
    departmentName: string,
    employee: Employee
  ): Department[] {
    departments = departments.map((dept) =>
      dept.name === departmentName
        ? { ...dept, employees: [...dept.employees, employee] }
        : dept
    );

    return departments;
  }
};
