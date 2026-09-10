// All Controller for Manager:-

import { createManagerModel, deleteManagerModel, fetchManagerModel, updateManagerModel } from "../models/managerModel.js";


//Create Manager Controller Logic:-
export const createManager = async(req, res) => {
    try {
        const userId = req.user.id;
        const {name, department, designation} = req.body;
        if(!name || !department || !designation){
            return res.status(400).json({
                success: false, 
                message: "Please Field Empty Column"
            })
        }
        
        //create Manger:-
        const managerCreate = await createManagerModel(userId, name, department, designation);
        return res.status(201).json({
            success: true,
            message: "Your Profile Created SuccessFully!",
            managerCreate: managerCreate.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "Internal Server Error"
        })
    }
}






//Get Manager Controller Logic:-
export const fetchManager = async(req, res) => {
    try {
        const userId = req.user.id;
        
        //fetch manager:-
        const managerFetch = await fetchManagerModel(userId);
        if(managerFetch.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "No Profile Found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your Profile Created SuccessFully!",
            managerFetch: managerFetch.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}





//Update Manager Controller Logic:-
export const updateManager = async(req, res) => {
    try {
        const {managerId} = req.params;
        const userId = req.user.id;
        const {name, department, designation} = req.body;

        if(!name || !department || !designation){
            return res.status(400).json({
                success: false,
                message: "Please Field Empty Column"
            })
        }

        const managerUpdate = await updateManagerModel(managerId, userId, name, department, designation);
        if(managerUpdate.rows.length === 0){
            return res.status(404).json({
                success: false, 
                message: "No Profile Found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your Profile Has Been Updated SuccessFully!",
            managerUpdate: managerUpdate.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error!"
        })
    }
}






//Delete Manager Controller Logic:-
export const deleteManager = async(req, res) => {
    try {
        const {managerId} = req.params;
        const userId = req.user.id;
        
        const managerDelete = await deleteManagerModel(managerId, userId);
        if(managerDelete.rows.length === 0){
            return res.status(404).json({
                success: false, 
                message: "No Profile Found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Your Profile Deleted SuccessFully!",
            managerDelete: managerDelete.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}