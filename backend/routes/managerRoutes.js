//Route for Manager:-
import express from "express";
import {AuthMiddleware} from "../middleware/authMiddleware.js"
import { createManager, deleteManager, fetchManager, updateManager } from "../controllers/managerController.js";
import { managerMiddleware } from "../middleware/managerMiddleware.js";
const router = express.Router();

router.get("/auth/yourManagerProfile", AuthMiddleware, managerMiddleware, fetchManager);         //Route for Get:-
router.post("/auth/createManagerProfile", AuthMiddleware, managerMiddleware, createManager);                //Route for Create:-
router.put("/auth/updateManagerProfile/:managerId", AuthMiddleware, managerMiddleware, updateManager);      //Route for Update:-
router.delete("/auth/deleteManagerProfile/:managerId", AuthMiddleware, managerMiddleware, deleteManager);   //Route for delete:-


export default router;