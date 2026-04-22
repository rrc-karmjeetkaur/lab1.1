import express from "express";
import { createEmployee, getEmployees } from "../controllers/employeeController";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const router = express.Router();

router.get("/", getEmployees);

router.post(
  "/",
  ClerkExpressRequireAuth() as any,   
  createEmployee
);

export default router;