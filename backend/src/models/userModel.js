import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Name"],
    },
    userName: {
        type: String,
    },
    bio: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
    },
    avatar: {
        public_id: {
            type: String,
            required: [true, "Please upload one profile picture"],
        },
        url: {
            type: String,
            required: [true, "Please upload one profile picture"],
        },
    },
    followers: [
        {
            userId: {
                type: String,
            },
        },
    ],
    following: [
        {
            userId: {
                type: String,
            },
        },
    ],
});


// Hash password
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

// jwt token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRECT, {
        expiresIn: process.env.JWT_EXPIRE,
    });
};

// compare password 
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};


const userModel = mongoose.model("users", userSchema);
export default userModel;
