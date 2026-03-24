import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const employeeRepository = {

  async getAll() {
    return await prisma.department.findMany({
      include: {
        employees: true
      }
    });
  },

  async create(employee: any) {
    return await prisma.employee.create({
      data: {
        firstName: employee.firstName,
        lastName: employee.lastName || "",
        departmentId: employee.departmentId
      }
    });
  }

};