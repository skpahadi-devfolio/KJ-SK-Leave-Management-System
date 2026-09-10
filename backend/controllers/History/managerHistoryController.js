//All Controller Logic for Manager:-

import { createLeaveHistory, fetchLeaveHistory } from "../../models/leaveHistory.js";



//Create LeaveHistory Manager Controller logic:-
export const createManagerLeaveHistory = async(req, res) => {
    try {
        const userId = req.user.id;
        const managerId = req.user.managerId;
        const leaveId = req.params.leaveId;
        const {leaveReason, status, leaveApproval} = req.body;

        if(!leaveReason || !status || !leaveApproval){
            return res.status(400).json({
                success: false,
                message: "Please Field Empty Column"
            })
        }
        const leaveManagerHistory = await createLeaveHistory(leaveId, userId, managerId, leaveReason, status, leaveApproval);
        return res.status(201).json({
            success: true,
            message: "Your Leave is Added in your History",
            leaveManagerHistory: leaveManagerHistory.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}












//Fetch Leave History Manager Controller logic:-
export const fetchManagerLeaveHistory = async(req, res) => {
    try {
        const managerId = req.user.managerId;

        const fetchAllHistoryManager = await fetchLeaveHistory(managerId);
        if(fetchAllHistoryManager.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Leave History"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Fetch All Leaves History SuccessFully!",
            fetchAllHistoryManager: fetchAllHistoryManager.rows
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}