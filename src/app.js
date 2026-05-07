import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app =express();
// frontend aur backend kay cross origin issue ko solve krnay kay liye 
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
// json data ko handle krnay kay liye
app.use(express.json({limit:"10mb"}));
// url encoded data ko handle krnay kay liye
app.use(express.urlencoded({extended:true,limit:"10mb"}))
// static files ko serve krnay kay liye
app.use(express.static("public"))
// cookies ko handle krnay kay liye
app.use(cookieParser())

// routes and their import
import userRouter from './routes/user.route.js' 

// ****routes prefixes***
// for users(register,login)
app.use("/api/v1/users",userRouter)

export default app;