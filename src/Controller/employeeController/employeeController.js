import { Helper } from "../../Helpers/index.js";
import { Model } from "../../Models/index.js";


export const addRemarks = async(req,res)=>{
    const {employeeUsername, complaintID, newStatus, remarks} = req.body;

    try {
        // Call Helper.addEmployee to add the employee
        const result = await Helper.addRemarks(employeeUsername, complaintID, newStatus, remarks);

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

export const getassigned = async (req,res)=>{
    const {employeeUsername} = req.body;
    try {
        // Call Helper.addEmployee to add the employee
        const result = await Helper.getAssignedComplaintIdsByUsername(employeeUsername);

        if (result) {
            res.status(200).json({result});
        } else {
            res.status(400).send( 'Failed to fetch assigned complaints.');
        }
    } catch (error) {
        console.error('Error getting assigned complaints', error);
        res.status(500).send( 'Internal Server Error');
    }
}

export const getComplaintById = async (req,res) => {
    const {Dak_ID } = req.body;
    try {
        // Call Helper.addEmployee to add the employee
        const result = await Helper.getComplaintByDakId(Dak_ID);

        if (result) {
            res.status(200).json({ result});
        } else {
            res.status(400).send( 'Failed to fetch complaint.');
        }
    } catch (error) {
        console.error('Error getting complaint by dak id', error);
        res.status(500).send( 'Internal Server Error');
    }
}