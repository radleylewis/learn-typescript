/**
 * Extending Types
 **/

type StaffMember = {
  name: string;
  salary: number;
  role: string;
  type?: string;
};

type StaffMemberWithId = {
  id: number;
} & StaffMember;

const staffMember: StaffMemberWithId = {
  name: "Boris",
  salary: 100_000,
  role: "PILOT",
  type: "PERMANENT",
  id: 99
};
