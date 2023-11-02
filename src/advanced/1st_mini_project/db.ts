export enum Roles {
  PILOT = "PILOT",
  GROUND_STAFF = "GROUND_STAFF",
  FLIGHT_ATTENDANT = "FLIGHT_ATTENDANT",
}

export enum EmploymentType {
  PERMANENT = "PERMANENT",
  CONTRACT = "CONTRACT",
}

type Employee = {
  id: number;
  name: string;
  salary: number;
  role: Roles;
  employmentType: EmploymentType;
};

type Contractor = {
  id: number;
  name: string;
  role: Roles;
  employmentType: EmploymentType;
  hourlyRate: number;
  hoursWorked: number;
};

const boris: Employee = {
  id: 7,
  name: "Boris",
  salary: 100_000,
  role: Roles.PILOT,
  employmentType: EmploymentType.PERMANENT,
};

const daisy: Contractor = {
  id: 6,
  name: "Daisy",
  hourlyRate: 20,
  role: Roles.FLIGHT_ATTENDANT,
  employmentType: EmploymentType.CONTRACT,
  hoursWorked: 200,
};

const staffList: (Employee | Contractor)[] = [boris, daisy];

export class StaffDatabase {
  public get staff(): (Employee | Contractor)[] {
    return staffList;
  }
}
