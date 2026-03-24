import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  // Create Departments
  const exec = await prisma.department.create({
    data: { name: "Executive Leadership" }
  });

  const directors = await prisma.department.create({
    data: { name: "Directors" }
  });

  // Create Employees
  await prisma.employee.create({
    data: {
      firstName: "CEO",
      lastName: "",
      departmentId: exec.id
    }
  });

  await prisma.employee.create({
    data: {
      firstName: "Director HR",
      lastName: "",
      departmentId: directors.id
    }
  });

  // Create Role
  await prisma.role.create({
    data: {
      firstName: "John",
      lastName: "Smith",
      role: "CEO"
    }
  });

  console.log("✅ Seed data inserted");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });