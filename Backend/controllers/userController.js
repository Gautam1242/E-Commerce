import validator from "validator"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}


// Route for user login
const loginUser=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await userModel.findOne({email});

        // if email not exists
        if(!user){
            return res.json({
                success:false,
                message:"Not a registered User!"
            })
        }

        // comparing the password 
        const isMatch=await bcrypt.compare(password,user.password);

        if(isMatch){
            const token=createToken(user._id);
            res.json({
                success:true,
                token
            })
        }
        else{
            res.json({
                success:false,
                message:"Invalid Email or Password!"
            })
        }
        
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}

// Route for user register
const registerUser=async(req,res)=>{
    try {
        const {name,email,password,cartData}=req.body;

        // checking user alredy exists or not
        const exists=await userModel.findOne({email});
        if(exists){
            return res.json({
                success:false,
                message:"User Alredy Exists!"
            })
        }

        // validating email and string password
        if(!validator.isEmail(email)){
            return res.json({
                success:false,
                message:"Please enter a valid Email!"
            })
        }
        if(password.length<8){
            return res.json({
                success:false,
                message:"Please enter a strong password (at least 8 characters) !"
            })
        }

        // Hashing user password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);

        // creating a new user 
        const newUser=new userModel({
            name,
            email,
            password:hashedPassword
        })

        const user=await newUser.save();

        // generating the token using the user id(auto generated in the mongodb database)
        const token=createToken(user._id)

        res.json({
            success:true,
            token
        })

    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}

// Route for Admin login
const adminLogin=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(email!==process.env.ADMIN_EMAIL ||password!==process.env.ADMIN_PASSWORD){
            return res.json({
                success:false,
                message:"Invalid Credentials"
            })
        }
        const token=jwt.sign(email+password,process.env.JWT_SECRET);

        res.json({
            success:true,
            message:"Login Successful",
            token
        })
    } catch (error) {
        console.log(error);
        res.json({
            success:false,
            message:error.message
        })
    }
}

export {loginUser,registerUser,adminLogin}