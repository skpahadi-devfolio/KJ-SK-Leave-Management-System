// Controller for Both Signup and Login:-

import { getEmployeeManagerId, getManagerId, loginModel, signupModel } from "../models/authModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


//Controller Logic for Signup:-
export const signupUser = async(req, res) => {
    try {
        const {name, email, password, confirmpassword} = req.body;
        if(!name || !email || !password || !confirmpassword){
            return res.status(400).json({
                success: false,
                message: "Please Field Empty column"
            })
        }

        //checking Already Signup or not:-
        const existUser = await loginModel(email);
        if(existUser.rows.length > 0){
            return res.status(400).json({
                success: false, 
                message: "User Already Exist with this Email"
            })
        }


        //Checking password:-
        if(password !== confirmpassword){
            return res.status(400).json({
                success: false, 
                message: "Password not Match Please Try Again"
            })
        }

        //hash password:-
        const hashpassword = await bcrypt.hash(password, 10);

        const newUser = await signupModel(name, email, hashpassword);
        return res.status(201).json({
            success: true,
            message: "You Signup SuccessFully!",
            newUser: newUser.rows[0]
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error !"
        })
    }
}







// Controller Logic for Login:-
export const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "Please Field Empty Column"
            })
        }

        const UserFound = await loginModel(email);

        //checking user found or not:-
        if(UserFound.rows.length === 0){
            return res.status(404).json({
                success: false,
                message: "User Not Found"
            })
        }

        //check password correct or not:-
        const user = UserFound.rows[0];

        const isMatchingPassword = await bcrypt.compare(password, user.password);

        if(!isMatchingPassword){
            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            })
        }

        //check id by role:-
        let managerId = null;

        if(user.role === 'manager'){
            const manager = await getManagerId(user.userid);

            if(manager.rows.length > 0){
                managerId = manager.rows[0].managerid;
            }
        }


        if(user.role === "user"){
            const manager = await getEmployeeManagerId(user.userid);

            if(manager.rows.length > 0){
                managerId = manager.rows[0].managerid
            }
        }

        //Token Generation:-
        const Token = jwt.sign(
            {id: user.userid,
            role: user.role,
            managerId: managerId},
            process.env.JWT_SECRET,
            {expiresIn: "15h"}
        )
        return res.status(200).json({
            success: true, 
            message: "You Login SuccessFully !",
            user: user,
            Token: Token
        })
    } catch (error) {
        return res.status(500).json({
            success: false, 
            message: "Internal Server Error"
        })
    }
}