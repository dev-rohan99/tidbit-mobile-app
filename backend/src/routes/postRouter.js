import express from "express";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { createPost, getAllUsersPost } from "../controllers/postController.js";
const router = express.Router();


// user routes
router.post('/create-post', isAuthenticated, createPost);
router.get('/all-post', isAuthenticated, getAllUsersPost);

export default router;
