import { employeeRepository } from "../repositories/employeeRepository";

export const employeeService = {

  async getEmployees() {
    return await employeeRepository.getAll();
  },

  async createEmployee(data: any) {
    if (!data.firstName || data.firstName.length < 3) {
      throw new Error("First name must be at least 3 characters");
    }

    return await employeeRepository.create(data);
  }

};