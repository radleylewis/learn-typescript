/**
 * Example JS Function
 **/
var addNumbers = function (a, b) {
  if (typeof a === "string") return Number(a) + b;
  return a + b;
};
var a = 2;
var b = 2;
console.log("total:", addNumbers(a, b));
