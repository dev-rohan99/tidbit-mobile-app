import errorHandler from "../utilities/errorHandler.js";
import cloudinary from "cloudinary";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import userPostModel from "../models/postModel.js";


/**
 * user post create controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const createPost = catchAsyncErrors(async (req, res, next) => {
    try{

        const { image } = req.body;

        let myCloud;
        if(image){
            myCloud = await cloudinary.v2.uploader.upload(image, {
                folder: "posts"
            });
        }

        let replies = req.body.replies.map((item) => {
            if(item.image){
                const replyImage = cloudinary.v2.uploader.upload(item.image, {
                    folder: "posts"
                });
                item.image = {
                    public_id: replyImage.public_id,
                    url: replyImage.secure_url
                }
            }
            return item;
        });

        const post = new userPostModel({
            ...req.body,
            image: (image ? {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            } : null),
            replies
        });

        await post.save();

        res.status(201).json({
            success: true,
            post,
        });

    }catch(err){
        return next(new errorHandler(err.message, 400));
    }
});

/**
 * user posts get controller
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */

export const getAllUsersPost = catchAsyncErrors(async (req, res, next) => {
    try{

        const posts = await userPostModel.find().sort({
            createdAt: -1
        });

        res.status(200).json({
            success: true,
            posts
        });

    }catch(err){
        return next(new errorHandler(err.message, 400));
    }
});
