import { readFile, writeFile } from 'fs/promises';

const baseFilePath = '../../../assets/';

async function addUser(userId, fullName, password) {
    try {
        // Step 1: Read data from user ID JSON file
        const filePath = `${baseFilePath}${userId}.json`;
        const userData = await readFile(filePath, 'utf-8');
        const userJson = JSON.parse(userData);

        // Check if user ID already exists
        if (userJson[userId]) {
            console.log(`User ID '${userId}' already exists.`);
            return false;
        }

        // Step 2: Add new user ID with provided details
        userJson[userId] = {
            Full_Name: fullName,
            password: password
        };

        // Step 3: Write updated user ID JSON back to file
        await writeFile(filePath, JSON.stringify(userJson, null, 2), 'utf-8');
        console.log(`User ID '${userId}' added successfully.`);
        return true;
    } catch (err) {
        if (err.code === 'ENOENT') {
            console.error(`File for user ID '${userId}' not found.`);
        } else {
            console.error('Error adding user:', err);
        }
        return false;
    }
}

// Example usage:
// async function exampleUsage() {
//     await addUser('username12', 'Anon Edit', 'password');
// }

// exampleUsage();
export default addUser;

// const result = await addUser('username12', 'Anon Edit', 'password');
// console.log(result);
