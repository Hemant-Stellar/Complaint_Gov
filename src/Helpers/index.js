import addEmployee from "./addEmployee/addEmployee";
import addRemarks from "./addRemarks/addRemarks";
import addAssignment from "./assignComplains/assignHelper";
import checkProgress from "./checkProgress/checkProgress";
import {filterComplaintsByStatus, getAssignedComplaintIdsByUsername,getComplaintByDakId} from "./getComplains/getComplains";
import getAllEmployees from "./getEmployee/getEmployee";


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