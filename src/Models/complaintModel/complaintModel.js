import { writeFile, readFile } from 'fs/promises';

const filePath = '../../../assets/complaint.json';

// Define enum for Status
const StatusEnum = {
    COMPLETE: 'Complete',
    PENDING: 'Pending',
    ASSIGNED: 'Assigned'
};

async function saveComplaint(
    Dak_ID, 
    Date_Received, 
    Sender_Information, 
    Sender_Number, 
    Complaint_Details, 
    Status = StatusEnum.PENDING, // Default status to Pending if not provided
    userName, 
    remarks
) {
    try {
        let complaints = {};

        // Read existing complaints from file, if any
        try {
            const data = await readFile(filePath, 'utf-8');
            complaints = JSON.parse(data);
        } catch (err) {
            if (err.code !== 'ENOENT') {
                console.error('Error reading file:', err);
                return false;
            }
        }

        // Check if Dak_ID is already taken
        if (complaints[Dak_ID]) {
            console.error('Error: Dak_ID already exists');
            return false;
        }

        // Create new complaint object
        const complaintData = {
            Dak_ID,
            Date_Received,
            Sender_Information,
            Sender_Number,
            Complaint_Details,
            Status,
            userName,
            remarks: null,
            Priority: null,
            Assigned_Person: null
        };

        // Add the new complaint to the complaints object
        complaints[Dak_ID] = complaintData;

        // Write the updated complaints object back to the file
        await writeFile(filePath, JSON.stringify(complaints, null, 2), 'utf-8');
        console.log('Complaint saved successfully.');
        return true;

    } catch (err) {
        console.error('Error saving complaint:', err);
    }
}

// Example usage
// async function exampleUsage() {
//     const x=await saveComplaint(
//         'AB104', 
//         '02-06-2024', 
//         'DEV PARKASH', 
//         '8816889241', 
//         'Denied social benefits without reason.', 
//         StatusEnum.COMPLETE, // Use enum value
//         'someUserId', 
//         'some remarks'
//     );
//     if(x) console.log("wtf");
// }

// exampleUsage();
export default saveComplaint;

// const x = await saveComplaint(
//     'AB105', 
//     '02-06-2024', 
//     'DEV PARKASH', 
//     '8816889241', 
//     'Denied social benefits without reason.', 
//     StatusEnum.PENDING, // Use enum value
//     'someUserId', 
//     'some remarks'
// );
// console.log(x);
