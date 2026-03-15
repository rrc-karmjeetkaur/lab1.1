import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {
  getEmployees() {
    return employeeRepository.getAll();
  },

  createEmployee(data: any) {
    if (!data.firstName || data.firstName.length < 3) {
      throw new Error("First name must be at least 3 characters.");
    }

    return employeeRepository.create(data);
  }
};