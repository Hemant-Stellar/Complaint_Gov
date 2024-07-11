import { writeFile, readFile } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

class AdminModel {
    constructor(username, password) {
        this.id = uuidv4(); // Generate a unique ID
        this.username = username;
        this.password = password;

        this.saveAdmin();
    }

    async saveAdmin() {
        const adminData = {
            id: this.id,
            username: this.username,
            password: this.password
        };

        const filePath =  'C:/Users/Priyanshu/Desktop/Complaint_Gov/assets/admin.json';

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
