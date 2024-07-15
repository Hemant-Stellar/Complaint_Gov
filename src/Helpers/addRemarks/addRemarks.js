import { readFile, writeFile } from 'fs/promises';

const employeeFilePath = './assets/employee.json';
const assignmentsFilePath = './assets/assigned.json';

async function changeComplaintStatus(employeeUsername, complaintID, newStatus, remarks = null) {
    try {
        // Step 1: Read employee data from employee JSON file
        const employeeData = await readFile(employeeFilePath, 'utf-8');
        const employeeJson = JSON.parse(employeeData);

        // Check if employee exists
        if (!employeeJson[employeeUsername]) {
            console.log(`Employee with username ${employeeUsername} does not exist.`);
            return false;
        }

        // Step 2: Read assignments data from assignments JSON file
        const assignmentsData = await readFile(assignmentsFilePath, 'utf-8');
        const assignmentsJson = JSON.parse(assignmentsData);

        // Check if complaintID is assigned to the employee
        if (!assignmentsJson[employeeUsername] || !assignmentsJson[employeeUsername].includes(complaintID)) {
            console.log(`Complaint ID ${complaintID} is not assigned to employee ${employeeUsername}.`);
            return false;
        }

        // Step 3: Update status of the complaint
        const complaintsFilePath = './assets/complaint.json';
        const complaintsData = await readFile(complaintsFilePath, 'utf-8');
        const complaintsJson = JSON.parse(complaintsData);

        // Check if complaintID exists
        if (!complaintsJson[complaintID]) {
            console.log(`Complaint ID ${complaintID} does not exist.`);
            return false;
        }

        // Update status and remarks of the complaint
        complaintsJson[complaintID].Status = newStatus;
        complaintsJson[complaintID].remarks = remarks; // Update remarks field

        // Write updated complaints back to file
        await writeFile(complaintsFilePath, JSON.stringify(complaintsJson, null, 2), 'utf-8');
        console.log(`Status of complaint ${complaintID} changed to ${newStatus}.`);

        // Step 4: If status is "Complete", remove complaintID from employee's assignments
        if (newStatus === 'Complete') {
            const index = assignmentsJson[employeeUsername].indexOf(complaintID);
            if (index !== -1) {
                assignmentsJson[employeeUsername].splice(index, 1);
                // Write updated assignments back to file
                await writeFile(assignmentsFilePath, JSON.stringify(assignmentsJson, null, 2), 'utf-8');
                console.log(`Complaint ID ${complaintID} removed from assignments of employee ${employeeUsername}.`);
            }
        }

        return true;
    } catch (err) {
        console.error('Error changing complaint status:', err);
        return false;
    }
}

// Example usage:
// async function exampleUsage() {
//     await changeComplaintStatus('exployeexyz', 'AB105', 'Complete', 'Resolved as per customer feedback.');
// }

// exampleUsage();
export default changeComplaintStatus;

// const result = await changeComplaintStatus('exployeexyz', 'AB105', 'Complete', 'Resolved as per customer feedback.');
// console.log(result);
