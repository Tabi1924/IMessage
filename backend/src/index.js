import express from "express";
import "dotenv/config";
import { clerkMiddleware } from '@clerk/express';
import cors from "cors";
import User from "./models/User.js";
import { connectDB } from "./lib/db.js";


const app = express();
const PORT = process.env.PORT;
const FRONTED_URL=process.env.FRONTED_URL;
app.use(express.json())
app.use(cors({origin:FRONTED_URL, credentials:true}));
app.use(clerkMiddleware())
app.get("/health", (req, res) => {
    res.status(200).json({ok: true})
});

app.listen(PORT, () => {
    connectDB();
     console.log("Server rat  30000", PORT)
    });
