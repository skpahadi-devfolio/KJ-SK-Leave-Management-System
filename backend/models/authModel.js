// Auth Model for Both Signup And Login:-

import { pool } from "../config/db.js"


//Model for Signup:-
export const signupModel = async(name, email, password) => {
    return await pool.query(
        "INSERT INTO users (name, email, password) VALUES($1, $2, $3) RETURNING *", [name, email, password]
    )
}



//Model for Login:-
export const loginModel = async(email) => {
    return await pool.query(
        "SELECT * FROM users WHERE email = $1", [email]
    )
}



//Get Employee manager Id:-
export const getEmployeeManagerId = async(userId) => {
    return await pool.query(
      "SELECT managerId From employee WHERE userId = $1", [userId]
    )
}





//MOdel for Update:-
export const updateRole = async(role, email) => {
    return await pool.query(
        "UPDATE users SET role = $1 WHERE email = $2 RETURNING *", [role, email]
    )
}




//Get ManagerId Model:-
export const getManagerId = async(userId) => {
    return await pool.query(
        "SELECT managerId from manager WHERE userId = $1", [userId]
    )
}





//Get Manager Email Model:-
export const getManagerEmail = async(managerId) => {
    return await pool.query(
        "SELECT users.email FROM manager JOIN users ON manager.userId = users.userId WHERE manager.managerId = $1", [managerId]
    )
}




//Get Employee Email Model:-
export const getEmployeeEmail = async(userId) => {
    return await pool.query(
        "SELECT email FROM users WHERE userId = $1", [userId]
    )
}