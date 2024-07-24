import { readFile } from 'fs/promises';

const employeeFilePath = './assets/employee.json';

async function getAllEmployees() {
    try {
        // Step 1: Read employee data from employee JSON file
        const employeeData = await readFile(employeeFilePath, 'utf-8');
        const employeeJson = JSON.parse(employeeData);

        // Step 2: Extract names and usernames
        const employees = Object.keys(employeeJson).map(username => ({
            username: username,
            Full_Name: employeeJson[username].Full_Name
        }));

        return employees;
    } catch (err) {
        console.error('Error getting employees:', err);
        return [];
    }
}

// Example usage:
// async function exampleUsage() {
//     const employees = await getAllEmployees();
//     console.log(employees);
// }

// exampleUsage();
export default getAllEmployees;

// const employees = await getAllEmployees();
// console.log(employees);
