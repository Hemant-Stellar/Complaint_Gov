import { readFile } from 'fs/promises';

const filePath = '../../../assets/complaint.json';

// Function to get the status of a complaint by Dak_ID
const getStatusById = async (Dak_ID) => {
    try {
        // Read the complaints from the file
        const data = await readFile(filePath, 'utf-8');
        const complaints = JSON.parse(data);

        // Directly access the complaint with the given Dak_ID
        const complaint = complaints[Dak_ID];

        if (complaint) {
            // Return the status of the complaint
            return complaint.Status;
        } else {
            console.error(`Error: Complaint with Dak_ID ${Dak_ID} not found`);
            return null;
        }
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error('Error: Complaints file not found');
        } else {
            console.error('Error reading file:', err);
        }
        return null;
    }
}

// Example usage
// async function exampleUsage() {
//     const status = await getStatusById('AB105');
//     console.log(`Status of complaint AB105: ${status}`);
// }

// exampleUsage();


// const status = await getStatusById('AB105');
// console.log(`Status of complaint AB105: ${status}`);





export default getStatusById;