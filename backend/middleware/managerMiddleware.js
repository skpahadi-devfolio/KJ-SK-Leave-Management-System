//Middleware for the Manager access:-

export const managerMiddleware = (req, res, next) => {
    if(req.user.role !== 'manager'){
        return res.status(403).json({
            success: false,
            message: "Manager Access Permission Denied !"
        })
    }
    next();
}