import { writeFile, readFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

class EmployeeModel {
    constructor(username, password) {
        this.username = username;
        this.password = password;

        this.saveEmployee();
    }

    async saveEmployee() {
        const filePath = 'C:/Users/Priyanshu/Desktop/Complaint_Gov/assets/employee.json';

        try {
            let employees = [];

            try {
                const data = await readFile(filePath, 'utf-8');
                employees = JSON.parse(data);
            } catch (err) {
                if (err.code !== 'ENOENT') {
                    console.error('Error reading file:', err);
                    return;
                }
            }

            // Check if username is unique
            if (employees.some(employee => employee.username === this.username)) {
                console.error('Error: Username already exists');
                return;
            }

            // Generate a unique ID
            let uniqueId;
            do {
                uniqueId = uuidv4();
            } while (employees.some(employee => employee.id === uniqueId));

            const employeeData = {
                id: uniqueId,
                username: this.username,
                password: this.password
            };

            employees.push(employeeData);

            await writeFile(filePath, JSON.stringify(employees, null, 2), 'utf-8');
        } catch (err) {
            console.error('Error writing file:', err);
        }
    }
}

export default EmployeeModel;

// Example usage
// (Uncomment the following lines to test)
// const newEmployee = new EmployeeModel('employeeUsername', 'employeePassword');
