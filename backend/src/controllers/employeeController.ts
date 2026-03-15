import { Request, Response } from "express";
import { employeeService } from "../services/employeeService";

export const getEmployees = (req: Request, res: Response) => {
  res.json(employeeService.getEmployees());
};

export const createEmployee = (req: Request, res: Response) => {
  try {
    const employee = employeeService.createEmployee(req.body);
    res.json(employee);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};