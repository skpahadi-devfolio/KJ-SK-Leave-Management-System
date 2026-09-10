//All Controller for Employee detail:-

import { createEmployeeModel, deleteEmployeeModel, fetchEmployeeModel, updateEmployeeModel } from "../models/employeeModel.js";


//Create Employee Controller Logic:-
export const createEmployee = async(req, res) => {
    try {
        const userId = req.user.id;
        const {name, department, designation} = req.body;
        if(!name || !department || !designation){
            return res.status(400).json({
                success: false,
                message: "Please Field Empty Column"
            })
        }
        const employeeCreate = await createEmployeeModel(userId, name, department, designation);
        return res.status(201).json({
            success: true,
            message: "Employee Profile Created SuccessFully!",
            employeeCreate: employeeCreate.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "Internal Server Error !"
        })
    }
}








//Get Employee Controller Logic:-
export const fetchEmployee = async(req, res) => {
    try {
        const userId= req.user.id;
        const fetchEmployee = await fetchEmployeeModel(userId);

        if(fetchEmployee.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Employee Profile Found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your Profile Got SuccessFully!",
            fetchEmployee: fetchEmployee.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}





//Update Employee Controller Logic:-
export const updateEmployee = async(req, res) => {
    try {
        const {empId} = req.params;
        const userId = req.user.id;
        const {name, department, designation} = req.body;

        if(!name || !department || !designation){
            return res.status(400).json({
                success: false, 
                message: "Please Field Empty Column"
            })
        }
        const updateEmployeeprofile = await updateEmployeeModel(empId, userId, name, department, designation);

        if(updateEmployeeprofile.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Profile Found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Your Profile Has been Updated SuccessFully!",
            updateEmployeeprofile: updateEmployeeprofile.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}






//Delete Employee Controller Logic:-
export const deleteEmployee = async(req, res) => {
    try {
        const userId = req.user.id;
        const {empId} = req.params;

        const deleteEmployeeProfile = await deleteEmployeeModel(empId, userId);
        if(deleteEmployeeProfile.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Profile Found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your Profile Deleted SuccessFully!",
            deleteEmployeeProfile: deleteEmployeeProfile.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "Internal Server Error !"
        })
    }
}