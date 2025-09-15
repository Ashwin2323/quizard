import jwt from "jsonwebtoken"

export function isAuthenticated(req,res){
    try{
        const token = req.cookies.token;
        if(!token){
            res.status(401).json({
                message:"User not Authenticated",
                success: false
            })
        }
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded){
            res.status(401).json({
                message:"Invalid Token",
                success: false
            })
        }
    
        next();
    } catch(e){
        console.log(e);
    }
}