import { readFile } from 'fs/promises';

const filePath = './assets/complaint.json';

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




const assignmentsFilePath = './assets/assigned.json';

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

const complaintsFilePath =  './assets/complaint.json';

export const getComplaintByDakId = async (dakId)=> {
    try {
        // Read complaints data from complaints JSON file
        const complaintsData = await readFile(complaintsFilePath, 'utf-8');
        const complaintsJson = JSON.parse(complaintsData);

        // Iterate through the keys (Dak_IDs) in complaintsJson
        for (const key in complaintsJson) {
            if (complaintsJson.hasOwnProperty(key)) {
                // Check if the current complaint's Dak_ID matches the input Dak_ID
                if (complaintsJson[key].Dak_ID === dakId) {
                    return complaintsJson[key]; // Return the complaint object
                }
            }
        }

        // Return null if no complaint with the given Dak_ID is found
        return null;
    } catch (error) {
        console.error('Error reading complaints:', error);
        return null;
    }
}

// Example usage:
// (async () => {
//     const dakId = "AB105";
//     const complaint = await getComplaintByDakId(dakId);
//     if (complaint) {
//         console.log('Complaint found:', complaint);
//     } else {
//         console.log(`Complaint with Dak_ID ${dakId} not found.`);
//     }
// })();