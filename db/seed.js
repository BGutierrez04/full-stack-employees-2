import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();

console.log("🌱 Database seeded.");

async function seedEmployees() {
  const employees = [
    {
      name: "John Smith",
      birthday: "1995-03-15",
      salary: 55000,
    },
    {
      name: "Jane Doe",
      birthday: "1992-07-22",
      salary: 62000,
    },
    {
      name: "Michael Johnson",
      birthday: "1988-11-10",
      salary: 75000,
    },
    {
      name: "Emily Davis",
      birthday: "1997-01-05",
      salary: 58000,
    },
    {
      name: "Robert Wilson",
      birthday: "1990-09-18",
      salary: 68000,
    },
    {
      name: "Sarah Brown",
      birthday: "1994-06-30",
      salary: 64000,
    },
    {
      name: "David Miller",
      birthday: "1985-12-12",
      salary: 82000,
    },
    {
      name: "Jessica Taylor",
      birthday: "1998-04-25",
      salary: 53000,
    },
    {
      name: "Daniel Anderson",
      birthday: "1991-08-14",
      salary: 71000,
    },
    {
      name: "Ashley Thomas",
      birthday: "1996-02-20",
      salary: 60000,
    },
  ];

  for (const employee of employees) {
    await createEmployee(employee);
  }
}
