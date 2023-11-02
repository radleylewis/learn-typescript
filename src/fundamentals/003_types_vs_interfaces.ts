/**
 * Types and Interfaces
 **/

type EmployeeId = string;

type Locations = "LONDON" | "BERLIN";

type Salary = [base: number, typeOfBonus: string];

const salary: Salary = [100_000, "variable"];

const [base, bonus] = salary;

type Employee = {
  name: string;
  salary: number;
  location: Locations;
  id: EmployeeId;
};

const employee = {
  name: "Boris",
  salary: 100_000,
  location: "LONDON",
} as const;

const savedEmployee: Employee = { ...employee, id: "99" };
