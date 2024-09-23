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
//this is to test the function
employees.forEach(displayEmployeeShifts);

// Task 3 Create a Function to Assign a New Shift
function assignShift(employeeName, day, hours) {
    let employee = employees.find(em => em.name === employeeName);
    if (!employee) {
        console.log(`Error: ${employeeName} not found`)
        return;
    }
    let alreadyHasShift= employee.shifts.find(shift => shift.day === day);
    if (alreadyHasShift) {
        console.log(`Error: ${employeeName} already has a shift on ${day}`)
        return;
    }
    // This is to add an employee and new shift if needed
    employee.shifts.push({day, hours});  
    console.log(`Shift has been assigned to ${employeeName} on ${day} for ${hours} hours`)
}
// This is to test the function 
assignShift("Doc", "Monday", 8);

// Task 4 Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName){
    let employee = employees.find(em => em.name === employeeName);
    return employee.shifts.reduce((total, shift) => total + shift.hours,0);
}
//This is to test the function
console.log(`The total hours for Doc: ${calculateTotalHours("Doc")} `);

// Task 5 Create a Function to List Employees with Free Days
function listAvalibleEmployees(day) {
let avalibleEmployees= employees.filter(em=> {
    return !em.shifts.some(shift => shift.day === day);
})
if (avalibleEmployees.length > 0) {{
console.log(`Employees avalible on ${day}: ${avalibleEmployees.map(em => em.name)}`)
}} else {{
    console.log(`No employees avalible on ${day}`)
}}
};
// This is to test the function
listAvalibleEmployees("Tuesday");
