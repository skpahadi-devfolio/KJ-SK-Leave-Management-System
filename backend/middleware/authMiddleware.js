//Middleware for both Signup and Login:-

import jwt from "jsonwebtoken";

export const AuthMiddleware = async(req, res, next) => {
    const Authorization = req.headers.authorization;

    if(!Authorization){
        return res.status(401).json({
            success: false,
            message: "No Token Provides !"
        })
    }
    const Token = Authorization.split(" ")[1];
    try {
        const decoded = jwt.verify(Token, process.env.JWT_SECRET)
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({
            success: false,
            message: "Token Expire or Invalid"
        })
    }
}