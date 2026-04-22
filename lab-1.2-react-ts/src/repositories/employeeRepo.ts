export const employeeRepo = {

  async getDepartments() {
    const res = await fetch("http://localhost:3001/employees");

    if (!res.ok) throw new Error("Failed to fetch");

    return res.json();
  },

  async createEmployee(employee: any, token: string) {
    const res = await fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(employee)
    });

    if (!res.ok) throw new Error("Failed to create employee");

    return res.json();
  }
};