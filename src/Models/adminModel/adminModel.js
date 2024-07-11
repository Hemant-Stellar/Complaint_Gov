import { writeFile, readFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

class AdminModel {
    constructor(username, password) {
        this.username = username;
        this.password = password;

        this.saveAdmin();
    }

    async saveAdmin() {
        const filePath = 'C:/Users/Priyanshu/Desktop/Complaint_Gov/assets/admin.json';

        try {
            let admins = [];

            try {
                const data = await readFile(filePath, 'utf-8');
                admins = JSON.parse(data);
            } catch (err) {
                if (err.code !== 'ENOENT') {
                    console.error('Error reading file:', err);
                    return;
                }
            }

            // Check if username is unique
            if (admins.some(admin => admin.username === this.username)) {
                console.error('Error: Username already exists');
                return;
            }

            // Generate a unique ID
            let uniqueId;
            do {
                uniqueId = uuidv4();
            } while (admins.some(admin => admin.id === uniqueId));

            const adminData = {
                id: uniqueId,
                username: this.username,
                password: this.password
            };

            admins.push(adminData);

            await writeFile(filePath, JSON.stringify(admins, null, 2), 'utf-8');
        } catch (err) {
            console.error('Error writing file:', err);
        }
    }
}

export default AdminModel;

// Example usage
// (Uncomment the following lines to test)
// const newAdmin = new AdminModel('adminUsername', 'adminPassword');
