import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config(); 
import employeeRoutes from "./routes/employeeRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/employees", employeeRoutes);

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
console.log(process.env.CLERK_SECRET_KEY);