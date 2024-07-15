
import { readFile, writeFile } from 'fs/promises';

const adminFilePath = './assets/admin.json';
const employeeFilePath = './assets/employee.json';

async function addEmployee(adminUsername, employeeUsername, employeePassword) {
    try {
        // Step 1: Read admin data from admin JSON file
        const adminData = await readFile(adminFilePath, 'utf-8');
        const adminJson = JSON.parse(adminData);

        // Check if admin username exists and password matches
        if (adminJson[adminUsername]){
            // Step 2: Read employee data from employee JSON file
            const employeeData = await readFile(employeeFilePath, 'utf-8');
            const employeeJson = JSON.parse(employeeData);

            // Check if employee username already exists
            if (employeeJson[employeeUsername]) {
                console.log(`Employee with username ${employeeUsername} already exists.`);
                return false;
            }

            // Step 3: Add new employee to employee JSON
            employeeJson[employeeUsername] = {
                Full_Name: "", // Placeholder for full name
                password: employeePassword
            };

            // Write updated employee JSON back to file
            await writeFile(employeeFilePath, JSON.stringify(employeeJson, null, 2), 'utf-8');
            console.log(`Employee with username ${employeeUsername} added successfully.`);
            return true;
        } else {
            console.log(`Admin with username ${adminUsername} does not exist or password is incorrect.`);
            return false;
        }
    } catch (err) {
        console.error('Error adding employee:', err);
        return false;
    }
}

// Example usage:
// async function exampleUsage() {
//     const adminUsername = 'Hemant27';
//     const adminPassword = 'password';
//     const employeeUsername = 'newEmployee';
//     const employeePassword = 'employeePassword';
//     await addEmployee(adminUsername, employeeUsername, employeePassword);
// }

// exampleUsage();
export default addEmployee;

// const result = await addEmployee('Hemant27', 'newEmployee', 'employeePassword');
// console.log(result);
