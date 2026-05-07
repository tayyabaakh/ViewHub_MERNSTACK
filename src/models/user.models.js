import mongoose from "mongoose";
import jwt from "jsonwebtoken"; 
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    fullName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
        watchHistory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Video",
    },
    coverImage:{
        type:String
    },
    refreshToken:{
        type:String
    }

    
}, { timestamps: true })


export const User = mongoose.model("User", userSchema)