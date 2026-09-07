let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
let total = employee.salary + employee.bonus - (200 * employee.absenceDays)
console.log(total);
