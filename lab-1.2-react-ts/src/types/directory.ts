import type { Key } from "react";

export interface Employee {
  firstName: string;
  lastName?: string;
}

export interface Department {
  id: Key | null | undefined;
  name: string;
  employees: Employee[];
}
