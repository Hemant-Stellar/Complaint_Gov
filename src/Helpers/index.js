import addEmployee from "./addEmployee/addEmployee.js";
import addRemarks from "./addRemarks/addRemarks.js";
import addAssignment from "./assignComplains/assignHelper.js";
import checkProgress from "./checkProgress/checkProgress.js";
import {filterComplaintsByStatus, getAssignedComplaintIdsByUsername,getComplaintByDakId} from "./getComplains/getComplains.js";
import getAllEmployees from "./getEmployee/getEmployee.js";


export const Helper = {
    addEmployee,
    addRemarks,
    addAssignment,
    checkProgress,
    filterComplaintsByStatus,
    getAssignedComplaintIdsByUsername,
    getComplaintByDakId,
    getAllEmployees
}