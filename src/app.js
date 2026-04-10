import express from "express";
import cors from "cors";
import CookieParser from "cookieparser";
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
app.use(CookieParser())
export default app;