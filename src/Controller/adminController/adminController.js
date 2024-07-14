import { Helper } from "../../Helpers";
import { Model } from "../../Models";

export const addEmployee = async (req,res)=>{
    const { adminUsername, employeeUsername, employeePassword } = req.body;

    try {
        // Call Helper.addEmployee to add the employee
        const result = await Helper.addEmployee(adminUsername, employeeUsername, employeePassword);

        if (result) {
            res.status(200).send('Employee added successfully.');
        } else {
            res.status(400).send('Failed to add employee.');
        }
    } catch (error) {
        console.error('Error adding employee:', error);
        res.status(500).send('Internal Server Error');
    }
}
