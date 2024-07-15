import { Helper } from "../../Helpers/index.js";
import { Model } from "../../Models/index.js";

export const addEmployee = async (req,res)=>{
    const { adminUsername, employeeUsername, employeePassword } = req.body;

    try {
        // Call Helper.addEmployee to add the employee
        const result = await Helper.addEmployee(adminUsername, employeeUsername, employeePassword);

        if (result) {
            res.status(200).send('Employee added successfully.');
        } else {
            res.status(200).send('Failed to add employee.');
        }
    } catch (error) {
        console.error('Error adding employee:', error);
        res.status(500).send('Internal Server Error');
    }
}

export const addAssignment = async (req,res) =>{
    const {assignee,Dak_ID} = req.body;
    try {
        // Call Helper.add to add the employee
        const result = await Helper.addAssignment(assignee,Dak_ID);

        if (result) {
            res.status(200).send('assigned successfully');
        } else {
            res.status(200).send('Failed to assign.');
        }
    } catch (error) {
        console.error('Error assigning :', error);
        res.status(500).send('Internal Server Error');
    }
}

export const getAllEmployees = async(req,res) =>{
    try {
        // Call Helper.add to get the employee
        const result = await Helper.getAllEmployees();

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(400).send('Failed to get employee');
        }
    } catch (error) {
        console.error('Error getting all employee :', error);
        res.status(500).send('Internal Server Error');
    }
}


export const filterByStatus = async(req,res)=>{
    const {status} = req.body;
    try {
        // Call Helper.add to get the employee
        const result = await Helper.filterComplaintsByStatus(status);

        if (result) {
            res.status(200).send(result);
        } else {
            res.status(400).send('Failed check status');
        }
    } catch (error) {
        console.error('Error checking status :', error);
        res.status(500).send('Internal Server Error');
    }
}