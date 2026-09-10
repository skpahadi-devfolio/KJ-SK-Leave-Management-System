//Leave Model for both employee and manager:-

import { pool } from "../config/db.js"


//Create Leave Model:-
export const createLeave = async(userId, managerId, leaveReason) => {
    return await pool.query(
        "INSERT INTO leave (userId, managerId, leaveReason) VALUES($1, $2, $3) RETURNING *", [userId, managerId, leaveReason]
    )
}




//Get Leave Model:-
export const fetchLeave = async(userId) => {
    return await pool.query(
        "SELECT * FROM leave WHERE userId = $1", [userId]
    )
}


//Get Manager Leave Model:-
export const fetchManagerLeave = async(managerId) => {
    return await pool.query(
        "SELECT leave.*, employee.name, employee.department, employee.designation FROM leave JOIN employee ON leave.userId = employee.userId WHERE leave.managerId = $1", [managerId]
    )
}




//Update Employee Leave Model:-
export const updateEmployeeleaves = async(leaveId, userId, leaveReason) => {
    return await pool.query(
        "UPDATE leave SET leaveReason = $1 WHERE leaveId = $2 AND userId= $3 RETURNING *", [leaveReason, leaveId, userId]
    )
}



//Update Manager Leave Model:-
export const updateManagerLeave = async(leaveId, managerId, status, leaveApproval) => {
    return await pool.query(
        "UPDATE leave SET status = $1, leaveApproval = $2 WHERE leaveId = $3 AND managerId = $4 RETURNING *", [status, leaveApproval, leaveId, managerId]
    )
}




//Delete Leave Model:-
export const deleteLeave = async(leaveId, userId) => {
    return await pool.query(
        "DELETE FROM leave WHERE leaveId = $1 AND userId = $2 RETURNING *", [leaveId, userId]
    )
}




//Get single Manager Leave Model:-
export const getSingleManagerLeave = async(leaveId, managerId) => {
    return await pool.query(
        "SELECT * FROM leave WHERE leaveId = $1 AND managerId = $2", [leaveId, managerId]
    )
}




// Delete Manager Leave Model:-
export const deleteManagerLeave = async(leaveId, managerId) => {
    return await pool.query(
        "DELETE FROM leave WHERE leaveId = $1 AND managerId = $2 RETURNING *", [leaveId, managerId]
    )
}