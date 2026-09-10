//All Models for Leave History:-

import {pool} from "../config/db.js"

//Create Model for Leave History:-
export const createLeaveHistory = async(leaveId, userId, managerId, leaveReason, status, leaveApproval) => {
    return await pool.query(
        "INSERT INTO leavehistory (leaveId, userId, managerId, leaveReason, status, leaveApproval) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",[leaveId, userId, managerId, leaveReason, status, leaveApproval]
    )
}






//Fetch all Leave History:-
export const fetchLeaveHistory = async(managerId) => {
    return await pool.query(
        "SELECT leavehistory.*, employee.name, employee.designation, employee.department FROM leavehistory JOIN employee on leavehistory.userId = employee.userId WHERE leavehistory.managerId = $1",[managerId]
    )
}