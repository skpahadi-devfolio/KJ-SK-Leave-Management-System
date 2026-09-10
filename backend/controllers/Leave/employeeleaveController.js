//All Controller for Employee Leave:-

import { getEmployeeManagerId, getManagerEmail } from "../../models/authModel.js";
import { createLeave, deleteLeave, fetchLeave, updateEmployeeleaves } from "../../models/leaveModel.js";
import { sendLeaveNotification } from "../../services/emailService.js";


//Create Employee Leave Controller Logic:-
export const createEmployeeLeave = async(req, res) => {
    try {
        const userId = req.user.id;
        const {leaveReason} = req.body;

        if(!leaveReason){
            return res.status(400).json({
                success: false,
                message: "Please Enter Your Leave Reason"
            })
        }

        const managerData = await getEmployeeManagerId(userId);

        if(managerData.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "Manager not Assigned"
            })
        }
        const managerId = managerData.rows[0].managerid;
        const createleaveReason = await createLeave(userId, managerId, leaveReason);

        //sending email to the manager by automation:-
        const managerEmailData = await getManagerEmail(managerId);

        if(managerEmailData.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "Manager Email not Found"
            })
        }
        await sendLeaveNotification(managerEmailData.rows[0].email);
        return res.status(201).json({
            success: true,
            message: "Your Leave Applied SuccessFully!",
            createleaveReason: createleaveReason.rows[0]
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}






//Get Employee Leave Controller Logic:-
export const fetchEmployeeLeave = async(req, res) => {
    try {
        const userId = req.user.id;

        //fetch all leave of user:-
        const fetchLeaves = await fetchLeave(userId);
        if(fetchLeaves.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Leaves Founded"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your All Leaves Got SuccessFully!",
            fetchLeaves: fetchLeaves.rows
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}







//Update Employee Leave Controller Logic:-
export const updateEmployeeLeave = async(req, res) => {
    try {
        const {leaveId} = req.params;
        const userId = req.user.id;
        const {leaveReason} = req.body;

        if(!leaveReason){
            return res.status(400).json({
                success: false,
                message: "Please Field this Column"
            })
        }
        const updateLeaves = await updateEmployeeleaves(leaveId, userId, leaveReason);
        if(updateLeaves.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Leaves Avaibale"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your Leave Has Been Updated SuccessFully!",
            updateLeaves: updateLeaves.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}







//Delete Employee Leave Controller Logic:-
export const deleteEmployeeLeave = async(req, res) => {
    try {
       const {leaveId} = req.params;
       const userId = req.user.id;
       
       //deleting:-
       const deleteLeaves = await deleteLeave(leaveId, userId);
       if(deleteLeaves.rows.length === 0){
        return res.status(404).json({
            success: false,
            message: "No Leaves Found"
        })
       }
       return res.status(200).json({
        success: true,
        message: "Your Leave Deleted SuccessFully!",
        deleteLeaves: deleteLeaves.rows[0]
       })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}