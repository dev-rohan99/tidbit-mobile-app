import userModel from "../models/userModel.js";
import errorHandler from "../utilities/errorHandler.js";
import fs from "fs";
import { createActivationToken, sendToken, verifyActivationToken } from "../utilities/token.js";
import sendEmail from "../utilities/sendEmail.js";
import cloudinary from "cloudinary";


/**
 * user signup controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password, avatar } = req.body;
    
        let user = await userModel.findOne({ email });
        if (user) {
            return res.status(400).json({ 
                success: false, 
                message: "User already exists" 
            });
        }
    
        let myCloud;
    
        if (avatar) {
            myCloud = await cloudinary.v2.uploader.upload(avatar, {
                folder: "avatars",
            });
        }
    
        const userNameWithoutSpace = name.replace(/\s/g, "");
    
        const uniqueNumber = Math.floor(Math.random() * 1000);
    
        user = await userModel.create({
          name,
          email,
          password,
          userName: userNameWithoutSpace + uniqueNumber,
          avatar: avatar
            ? { public_id: myCloud.public_id, url: myCloud.secure_url }
            : null,
        });
    
        sendToken(user, 201, res);
      }catch(err){
        return next(new errorHandler(err.message, 400));
      }
}

/**
 * user activation controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const userActivation = async (req, res, next) => {
    try{

        const { activationToken } = req.body;
        const newUser = verifyActivationToken(activationToken);

        if(!newUser){
            return next(new errorHandler("Invalid token", 400));
        }

        const { name, email, password, avatar } = newUser;
        const findUser = await userModel.findOne({ email });

        if(findUser){
            return next(new errorHandler("This user already exists!", 400));
        }

        const user = await userModel.create({
            ...newUser
        });

        sendToken(user, 201, res);

    }catch(err){
        return next(new errorHandler(err.message, 400));
    }
}

/**
 * user login controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const userLogin = async (req, res, next) => {
    try{

        const { email, password } = req.body;

        if(!email || !password){
            return next(new errorHandler("Please provide the all fields!", 400));
        }

        const user = await userModel.findOne({ email });

        if(!user){
            return next(new errorHandler("User doesn't exists!", 400));
        }

        const isPasswordValid = await user.comparePassword(password);
        
        if(!isPasswordValid){
            return next(new errorHandler("Please provide the correct information", 400));
        }

        sendToken(user, 201, res);

    }catch(err){
        return next(new errorHandler(err.message, 400));
    }
}

/**
 * get login user controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const getLoginUser = async (req, res, next) => {
    try{

        const user = await userModel.findById(req.user.id);

        if(!user){
            return next(new errorHandler("User doesn't exists", 400));
        }

        res.status(200).json({
            success: true,
            user,
        });

    }catch(err){
        return next(new errorHandler(err.message, 400));
    }
}


