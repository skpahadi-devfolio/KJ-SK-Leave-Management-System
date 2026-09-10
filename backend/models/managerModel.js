//All Model for Managers:-

import { pool } from "../config/db.js"


//Create Manager Model Logic:-
export const createManagerModel = async(userId, name, department, designation) => {
    return await pool.query(
        "INSERT INTO manager (userId, name, department, designation) VALUES($1, $2, $3, $4) RETURNING *", [userId, name, department, designation]
    )
}




//Get Manager Model Logic:-
export const fetchManagerModel = async(userId) => {
    return await pool.query(
        "SELECT * FROM manager WHERE userId = $1", [userId]
    )
}




//Update Manager Model Logic:-
export const updateManagerModel = async(managerId, userId, name, department, designation) => {
    return await pool.query(
        "UPDATE manager SET name = $1, department = $2, designation = $3 WHERE managerId = $4 AND userId = $5 RETURNING *", [name, department, designation, managerId, userId]
    )
}




//Delete Manager Model Logic:-
export const deleteManagerModel = async(managerId, userId) => {
    return await pool.query(
        "DELETE FROM manager WHERE managerId = $1 AND userId = $2 RETURNING *", [managerId, userId]
    )
}