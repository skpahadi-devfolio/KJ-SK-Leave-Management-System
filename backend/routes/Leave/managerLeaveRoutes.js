//All Routes for Manager Leave Control:-

import express from "express";
import { fetchManagerLeaveControl, updateManagerLeaveControl } from "../../controllers/Leave/managerleaveController.js";
import { AuthMiddleware } from "../../middleware/authMiddleware.js";
import { managerMiddleware } from "../../middleware/managerMiddleware.js";
const router = express.Router();

router.get("/auth/ManagerAssign/allLeaves", AuthMiddleware, managerMiddleware,fetchManagerLeaveControl);                                                     //Route for Get

router.put("/auth/ManagerAssign/ActionLeaves/:leaveId", AuthMiddleware, managerMiddleware, updateManagerLeaveControl);                                                  //Router for Update


export default router;