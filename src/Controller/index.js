import 
{ 
    addEmployee,
    addAssignment,
    getAllEmployees,
    filterByStatus 
} 
from "./adminController/adminController.js";

import 
{
    addRemarks,
    getassigned,
    getComplaintById
} from "./employeeController/employeeController.js";

import {
    signup,
    addComplaint,
    checkProgress
} from "./userController/user.controller.js";




export const adminController = { 
    addEmployee,
    addAssignment,
    getAllEmployees,
    filterByStatus 
}

export const employeeController = {
    addRemarks,
    getassigned,
    getComplaintById
}

export const userController = {
    signup,
    addComplaint,
    checkProgress
}