import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getEmployees = async (req: Request, res: Response) => {
  try {
    const data = await employeeService.getEmployees();
    res.json(data); // ✅ IMPORTANT
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

export const createEmployee = async (req: Request, res: Response) => {
  try {
    const newEmployee = await employeeService.createEmployee(req.body);
    res.json(newEmployee);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};