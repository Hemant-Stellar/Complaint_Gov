import { Helper } from "../../Helpers";
import { Model } from "../../Models";


export const addRemarks = async(req,res)=>{
    const {employeeUsername, complaintID, newStatus, remarks = null} = req.body;

    try {
        // Call Helper.addEmployee to add the employee
        const result = await Helper.addRemarks(employeeUsername, complaintID, newStatus, remarks = null);

        if (result) {
            res.status(200).send('Remarks added successfully.');
        } else {
            res.status(400).send('Failed to add Remarks.');
        }
    } catch (error) {
        console.error('Error adding Remarks:', error);
        res.status(500).send('Internal Server Error');
    }
}