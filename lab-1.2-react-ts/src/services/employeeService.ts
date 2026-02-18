import type { Employee, Department } from "../types/directory";
import { employeeRepo } from "../repositories/employeeRepo";

type ServiceResult =
  | { success: true; data: Department[] }
  | { success: false; errors: string[] };

export const employeeService = {
  createEmployee(
    departmentName: string,
    employee: Employee
  ): ServiceResult {
    const departments = employeeRepo.getDepartments();
    const errors: string[] = [];

    if (!departments.find((d) => d.name === departmentName)) {
      errors.push("Selected department does not exist.");
    }

    if (employee.firstName.trim().length < 3) {
      errors.push("First name must be at least 3 characters.");
    }

    if (errors.length > 0) {
      return { success: false, errors };
    }

    const updated = employeeRepo.createEmployee(departmentName, employee);

    return { success: true, data: updated };
  }
};
