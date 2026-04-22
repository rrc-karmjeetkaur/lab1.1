export const employeeRepo = {

  async getDepartments() {
    const res = await fetch("http://localhost:3001/employees");
    return res.json();
  },

  async createEmployee(employee: any, token: string | null) {
    const res = await fetch("http://localhost:3001/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`   // 👈 IMPORTANT
      },
      body: JSON.stringify(employee)
    });

    return res.json();
  }
};