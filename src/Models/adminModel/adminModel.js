import { writeFile, readFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

const filePath = '../../../assets/admin.json';

export default saveUser = async (username, fullName, password) =>{
    try {
        let users = {};

        try {
            const data = await readFile(filePath, 'utf-8');
            users = JSON.parse(data);
        } catch (err) {
            if (err.code !== 'ENOENT') {
                console.error('Error reading file:', err);
                return false;
            }
        }

        // Check if username is already taken
        if (users[username]) {
            console.error('Error: Username already exists');
            return false;
        }

        // Save user data
        users[username] = {
            Full_Name: fullName,
            password: password
        };

        await writeFile(filePath, JSON.stringify(users, null, 2), 'utf-8');
        console.log('User saved successfully.');
        return false;
    } catch (err) {
        console.error('Error writing file:', err);
    }
}

// Example usage
async function exampleUsage() {
    await saveUser('username12', "Anon Edit", 'password');
}

// exampleUsage();
