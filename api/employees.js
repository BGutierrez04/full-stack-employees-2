import express from "express";

import {
  getEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "#db/queries/employees";

const router = express.Router();

// GET /employees
// Returns all employees
router.get("/", async (req, res, next) => {
  try {
    const employees = await getEmployees();

    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
});

// POST /employees
// Creates a new employee
router.post("/", async (req, res, next) => {
  try {
    const { name, birthday, salary } = req.body ?? {};

    // Check for required fields
    if (!name || !birthday || salary === undefined || salary === null) {
      return res.status(400).json({
        error: "Name, birthday, and salary are required.",
      });
    }

    const employee = await createEmployee({
      name,
      birthday,
      salary,
    });

    res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
});

// GET /employees/:id
// Returns an employee by ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await getEmployee(id);

    if (!employee) {
      return res.status(404).json({
        error: "Employee not found.",
      });
    }

    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
});

// DELETE /employees/:id
// Deletes an employee by ID
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const employee = await deleteEmployee(id);

    if (!employee) {
      return res.status(404).json({
        error: "Employee not found.",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

// PUT /employees/:id
// Updates an employee by ID
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, birthday, salary } = req.body ?? {};

    // Validate required fields
    if (!name || !birthday || salary === undefined || salary === null) {
      return res.status(400).json({
        error: "Name, birthday, and salary are required.",
      });
    }

    const employee = await updateEmployee({
      id,
      name,
      birthday,
      salary,
    });

    if (!employee) {
      return res.status(404).json({
        error: "Employee not found.",
      });
    }

    res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
});

export default router;
