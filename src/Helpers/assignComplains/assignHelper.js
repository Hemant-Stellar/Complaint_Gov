import { writeFile, readFile } from 'fs/promises';

const filePath = './assets/assigned.json';

async function addAssignment(assignee, Dak_ID) {
    try {
        let assignments = {};

        // Read existing assignments from file, if any
        try {
            const data = await readFile(filePath, 'utf-8');
            assignments = JSON.parse(data);
        } catch (err) {
            if (err.code !== 'ENOENT') {
                console.error('Error reading file:', err);
                return false;
            }
        }

        // Add or update assignments for the assignee
        if (!assignments[assignee]) {
            assignments[assignee] = [Dak_ID];
        } else {
            if (!assignments[assignee].includes(Dak_ID)) {
                assignments[assignee].push(Dak_ID);
            } else {
                console.error(`Dak_ID '${Dak_ID}' is already assigned to '${assignee}'.`);
                return false;
            }
        }

        // Write the updated assignments back to the file
        await writeFile(filePath, JSON.stringify(assignments, null, 2), 'utf-8');
        console.log(`Assignment '${Dak_ID}' added for '${assignee}' successfully.`);
        return true;
    } catch (err) {
        console.error('Error adding assignment:', err);
        return false;
    }
}

async function getAssignmentsForUser(assignee) {
    try {
        const data = await readFile(filePath, 'utf-8');
        const assignments = JSON.parse(data);
        return assignments[assignee] || [];
    } catch (err) {
        console.error('Error getting assignments for user:', err);
        return [];
    }
}

// Example usage:
// async function exampleUsage() {
//     // Add assignment
//     await addAssignment("aaa0", "j2snf");

//     // Get assignments for a user
//     const assignments = await getAssignmentsForUser("aaa0");
//     console.log("Assignments for aaa0:", assignments);
// }

// exampleUsage();
export default addAssignment; //should be use with await 