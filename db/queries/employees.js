import db from "#db/client";

/**
 * Creates a new employee
 */
export async function createEmployee({ name, birthday, salary }) {
  const sql = `
    INSERT INTO employees (name, birthday, salary)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const { rows } = await db.query(sql, [name, birthday, salary]);

  return rows[0];
}

/**
 * Returns all employees
 */
export async function getEmployees() {
  const sql = `
    SELECT * FROM employees;
  `;

  const { rows } = await db.query(sql);

  return rows;
}

/**
 * Returns an employee by ID
 */
export async function getEmployee(id) {
  const sql = `
    SELECT * FROM employees
    WHERE id = $1;
  `;

  const { rows } = await db.query(sql, [id]);

  return rows[0];
}

/**
 * Updates an existing employee
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  const sql = `
    UPDATE employees
    SET name = $1,
        birthday = $2,
        salary = $3
    WHERE id = $4
    RETURNING *;
  `;

  const { rows } = await db.query(sql, [name, birthday, salary, id]);

  return rows[0];
}

/**
 * Deletes an employee by ID
 */
export async function deleteEmployee(id) {
  const sql = `
    DELETE FROM employees
    WHERE id = $1
    RETURNING *;
  `;

  const { rows } = await db.query(sql, [id]);

  return rows[0];
}
