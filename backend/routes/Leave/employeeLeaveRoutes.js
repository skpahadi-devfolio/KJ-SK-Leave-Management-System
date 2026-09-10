//All Routes for Employee leave:-

import express from "express";
import { createEmployeeLeave, deleteEmployeeLeave, fetchEmployeeLeave, updateEmployeeLeave } from "../../controllers/Leave/employeeleaveController.js";
import {AuthMiddleware} from "../../middleware/authMiddleware.js"
const router = express.Router();

router.get("/auth/yourLeaves", AuthMiddleware, fetchEmployeeLeave);            //Route for Get
router.post("/auth/createYourLeave", AuthMiddleware, createEmployeeLeave);    //Route for Create
router.put("/auth/updateYourLeave/:leaveId", AuthMiddleware, updateEmployeeLeave);      //Route for Update
router.delete("/auth/deleteYourLeave/:leaveId", AuthMiddleware, deleteEmployeeLeave);   //Router for Delete


export default router;