import 
{ 
    addEmployee,
    addAssignment,
    getAllEmployees,
    filterByStatus 
} 
from "./adminController/adminController";

import 
{
    addRemarks,
    getassigned,
    getComplaintById
} from "./employeeController/employeeController";

import {
    signup,
    addComplaint,
    checkProgress
} from "./userController/user.controller";

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