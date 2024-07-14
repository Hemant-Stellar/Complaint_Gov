import { readFile } from 'fs/promises';

const filePath = '../../../assets/complaint.json';

// Function to filter complaints by status and return their IDs
export const filterComplaintsByStatus =async (status)=> {
    try {
        // Read the complaints from the file
        const data = await readFile(filePath, 'utf-8');
        const complaints = JSON.parse(data);

        // If status is not provided or is blank, return all complaint IDs
        if (!status) {
            return Object.keys(complaints);
        }

        // Filter complaints based on the provided status
        const filteredComplaintIds = Object.keys(complaints).filter(
            (Dak_ID) => complaints[Dak_ID].Status === status
        );

        return filteredComplaintIds;
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Error: Complaints file not found');
        } else {
            console.error('Error reading file:', err);
        }
        return [];
    }
}

// Example usage
// async function exampleUsage() {
//     const filteredIds = await filterComplaintsByStatus('Pending');
//     console.log(`IDs of complaints with status Pending: ${filteredIds}`);
    
//     const allIds = await filterComplaintsByStatus('');
//     console.log(`IDs of all complaints: ${allIds}`);
// }

// exampleUsage();


// const filteredIds = await filterComplaintsByStatus('Pending');
// console.log(`IDs of complaints with status Pending: ${filteredIds}`);

// const allIds = await filterComplaintsByStatus('');
// console.log(`IDs of all complaints: ${allIds}`);




const assignmentsFilePath = '../../../assets/assigned.json';

export const getAssignedComplaintIdsByUsername = async (employeeUsername) => {
    try {
        // Read assignments data from assignments JSON file
        const assignmentsData = await readFile(assignmentsFilePath, 'utf-8');
        const assignmentsJson = JSON.parse(assignmentsData);

        // Check if employeeUsername exists in assignmentsJson
        if (!assignmentsJson[employeeUsername]) {
            console.log(`Employee ${employeeUsername} does not have any assigned complaints.`);
            return [];
        }

        // Return assigned complaint IDs for the employee
        return assignmentsJson[employeeUsername];
    } catch (error) {
        console.error('Error reading assignments:', error);
        return [];
    }
};