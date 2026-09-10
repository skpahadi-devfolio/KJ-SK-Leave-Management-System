//Employe Model Logic:-

import { pool } from "../config/db.js"



//Create Employee Leave Model:-
export const createEmployeeModel = async(userId, name, department, designation) => {
    return await pool.query(
        "INSERT INTO employee(userId, managerId, name, department, designation) VALUES($1, (SELECT managerId FROM manager WHERE department = $3), $2, $3, $4) RETURNING *", [userId, name, department, designation]
    )
}



//Get Employee Leave Model:-
export const fetchEmployeeModel = async(userId) => {
    return await pool.query(
        "SELECT * FROM employee WHERE userId = $1",[userId]
    )
}




//Update Employee Leave Model:-
export const updateEmployeeModel = async(empId, userId, name, department, designation) => {
    return await pool.query(
        "UPDATE employee SET name = $1, department = $2, designation = $3 WHERE empId = $4 AND userId = $5 RETURNING *", [name, department, designation, empId, userId]
    )
}




//Delete Employee Leave Model:-
export const deleteEmployeeModel = async(empId, userId) => {
    return await pool.query(
        "DELETE FROM employee WHERE empId = $1 AND userId = $2 RETURNING *", [empId, userId]
    )
}