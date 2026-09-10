//Manager All Leave Controller logic:-

import { getEmployeeEmail } from "../../models/authModel.js";
import { createLeaveHistory } from "../../models/leaveHistory.js";
import { deleteManagerLeave, fetchManagerLeave, getSingleManagerLeave} from "../../models/leaveModel.js";
import { sendLeaveStatusNotification } from "../../services/emailService.js";


//Get All Leaves Manager control Controller Logic:-
export const fetchManagerLeaveControl = async(req, res) => {
    try {
        const managerId = req.user.managerId;

        //fetch all leave:-
        const fetchleavesControl = await fetchManagerLeave(managerId);
        if(fetchleavesControl.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Employee Leave list Available"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Fetch All Employee Leave list SuccessFully!",
            fetchleavesControl: fetchleavesControl.rows
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}







//Update All Leaves Manager Control Controller Logic:-
export const updateManagerLeaveControl = async(req, res) => {
    try {
       const {leaveId} = req.params;
       const managerId = req.user.managerId;
       const {status, leaveApproval} = req.body;
       
       if(!status || !leaveApproval){
        return res.status(400).json({
            success: false,
            message: "Please Field Empty Column"
        })
       }


       //Check the status of leave:-
       if(status !== "Accepted" && status !== "Rejected"){
        return res.status(400).json({
            success: false, 
            message: "Invalid Leave Status"
        })
       }

       //single leave details:-
       const leaveDetails = await getSingleManagerLeave(leaveId, managerId);

       if(leaveDetails.rows.length === 0){
        return res.status(404).json({
            success: false,
            message: "No Leave History Available"
        })
       }

       //get employee leave information:-
       const leave = leaveDetails.rows[0];
       const userId = leave.userid;
       const leaveReason = leave.leavereason;



       //sending mail to the employee from manager approval:-
       const employeeEmailData = await getEmployeeEmail(userId);

       if(employeeEmailData.rows.length === 0){
        return res.status(404).json({
            success: false,
            message: "Employee Email not Found"
        })
       }
       
       
       //Added leave into history:-
       const leaveHistory = await createLeaveHistory(leaveId, userId, managerId, leaveReason, status, leaveApproval);

       
       //Delete leave from current leave table:-
       const deleteLeave = await deleteManagerLeave(leaveId, managerId);
       
       if(deleteLeave.rows.length === 0){
           return res.status(404).json({
               success: false,
               message: "Leave could not be deleted"
            })
        }
        await sendLeaveStatusNotification(employeeEmailData.rows[0].email, status);


       //finally response:-
       return res.status(200).json({
        success: true,
        message: "Your Leave addes in History SuccessFully!",
        leaveHistory: leaveHistory.rows[0]
       })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}