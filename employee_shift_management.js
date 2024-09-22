// Task 1 Create an Employees Array of Employee Objects
let employees = [
    {name: "Doc", shifts: [{day: "Monday", hours: 8}, { day: "Thursday", hours: 6}]},
    {name: "Manny", shifts: [{day: "Tuesday", hours: 6}, { day: "Friday", hours: 8}]},
    {name: "Bus", shifts: [{day: "Wednesday", hours: 8}]},
    {name: "Shack", shifts: [{day: "Tuesday", hours: 7}]},
];
console.log(employees);

// Task 2 Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
console.log(`Employee Name: ${employee.name}`);
employee.shifts.forEach(shift => {
    console.log( `Day: ${shift.day}, Hours Worked: ${shift.hours}`)
});
}
employees.forEach(displayEmployeeShifts);

