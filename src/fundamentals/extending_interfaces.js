/**
 * Enums
 **/
var Roles;
(function (Roles) {
  Roles["PILOT"] = "PILOT";
  Roles["SECURITY"] = "SECURITY";
  Roles["GROUND_STAFF"] = "GROUND_STAFF";
  Roles["FLIGHT_ATTENDANT"] = "FLIGHT_ATTENDANT";
})(Roles || (Roles = {}));
var staff = {
  name: "Boris",
  salary: 100000,
  role: Roles.PILOT,
};
