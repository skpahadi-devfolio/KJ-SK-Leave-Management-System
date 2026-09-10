//All Routes for Manager Leave History:-


import express from "express";
import { createManagerLeaveHistory, fetchManagerLeaveHistory } from "../../controllers/History/managerHistoryController.js";
import {AuthMiddleware, } from "../../middleware/authMiddleware.js";
import {managerMiddleware} from "../../middleware/managerMiddleware.js";
const router = express.Router();

router.get("/auth/ManagerApproval/LeaveHistory", AuthMiddleware, managerMiddleware,  fetchManagerLeaveHistory);                                            //Route for Get
router.post("/auth/ManagerApproval/LeaveHistory/:leaveId", AuthMiddleware, managerMiddleware, createManagerLeaveHistory);                                          //Route for Post



export default router;