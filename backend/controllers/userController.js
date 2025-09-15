import {User} from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

export async function signup(req,res){
    try{
        const user=req.body;
        if(!user){
            return res.send("Invalid Input");
        }
        if(!user.email || !user.password || !user.name){
            return res.send("Invalid Input");
        }
        
        const alreadyExist = await User.findOne({email: user.email});
        if(alreadyExist){
            return res.send("User Already Exists");
        }
    
        const hashedPassword = await bcrypt.hash(user.password, 10);
    
        const newUser=await User.create({
            name: user.name,
            email: user.email,
            password: hashedPassword
        });
    
        // console.log("Hii from register");
        return res.json({
            message: `Account Created, ${alreadyExist.name}!`
        });
    }catch(e){
        res.send(e);
    }
}

export async function login(req,res){
    try{
        const user=req.body;
        if(!user){
            return res.send("Invalid Input");
        }
        if(!user.email || !user.password){
            return res.send("Invalid Input");
        }
        
        const alreadyExist = await User.findOne({email: user.email});
        if(!alreadyExist){
            return res.send("Invalid Credentials");
        }
        
        const match = await bcrypt.compare(user.password, alreadyExist.password);
        
        if(!match){
            return res.send("Invalid Credentials");
        }
        
        const token = jwt.sign({
          data: alreadyExist.email
        }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 60 });
    
        return res.cookie('token',token).json({
            message: `Welcome back, ${alreadyExist.name}!`,
            token
        });
    }catch(e){
        res.send(e);
    }
}

export async function logout(req,res){
    try{
        const user=req.body;
        if(!user){
            return res.send("Invalid Input");
        }
        if(!user.email || !user.password){
            return res.send("Invalid Input");
        }
        
        const alreadyExist = await User.findOne({email: user.email});
        if(!alreadyExist){
            return res.send("Invalid Credentials");
        }
        res.clearCookie('token');
        return res.cookie('token',"").json({
            message: `Logged out successfully`,
        });
    }catch(e){
        res.send(e);
    }
}

export async function getUserDashboard(req,res){
    try{
        const userId=req.params;
        
        const user = await User.findById(userId)
        .select("-password")
        .populate("attemptedQuizzes");

        if(!user){
            return res.send("User not found");
        }
        
        return res.status(200).json({
            success: true,
            user,
        });
    }catch(e){
        console.log(e);
        return res.status(500).json({
          success: false,
          message: "Failed to load dashboard",
        });
    }
}


