// Initialize the employee object
const employee = {
  name: "John Doe",
  streetAddress: "123 Main Street",
};

// Function to update an employee object with a new key-value pair (non-destructive)
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return { ...employee, [key]: value };
}

// Function to update an employee object with a new key-value pair (destructive)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a key-value pair from the employee object (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to delete a key-value pair from the employee object (destructive)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

// Example usage:
console.log("Original Employee:", employee);

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
console.log("Updated Employee (Non-destructive):", updatedEmployee);

const destructiveUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
console.log("Updated Employee (Destructive):", destructiveUpdatedEmployee);

const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without Street Address (Non-destructive):", employeeWithoutStreetAddress);

const destructiveEmployeeWithoutStreetAddress = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
console.log("Employee without Street Address (Destructive):", destructiveEmployeeWithoutStreetAddress);

console.log("Original Employee (Unchanged):", employee);
