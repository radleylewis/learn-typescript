/**
 * Type Guards and "is"
 **/

import { EmploymentType, StaffDatabase } from "./db";

const db = new StaffDatabase();

const listOfStaff = db.staff;

// calculate bonuses
// Permanent Employees => 50% bonus on salary
// Contractors => no bonus entitlement

type EmployeeOrContractor = (typeof listOfStaff)[number];
type Employee = Extract<EmployeeOrContractor, { salary: number }>;

type NameIdAndBonusAmount = {
  name: string;
  id: number;
  bonus?: number;
};

const isPermanentEmployee = (
  staffMember: EmployeeOrContractor,
): staffMember is Employee => {
  if (staffMember.employmentType === EmploymentType.PERMANENT) return true;
  return false;
};

const namesIdsAndBonuses = listOfStaff.map<NameIdAndBonusAmount>(
  (staffMember) => {
    if (isPermanentEmployee(staffMember)) {
      const { salary, name, id } = staffMember;
      const bonus = salary * 0.5;
      return { name, id, bonus };
    }
    const { name, id } = staffMember;
    return { name, id };
  },
);

console.log(namesIdsAndBonuses);
