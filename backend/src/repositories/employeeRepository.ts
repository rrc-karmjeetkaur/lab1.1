import { employees } from "../data/data";

export const employeeRepository = {
  getAll() {
    return employees;
  },

  create(employee: any) {
    employees.push(employee);
    return employee;
  }
};