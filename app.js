import express from "express";
import employeeRouter from "./api/employees.js";

const app = express();

// JSON body parsing middleware
app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Fullstack Employees API.");
});

// Employee routes
app.use("/employees", employeeRouter);

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    error: "Internal server error.",
  });
});

export default app;
