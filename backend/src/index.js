import express from "express";
import "dotenv/config";
import fs from "fs";
import path from "path";
import { clerkMiddleware } from '@clerk/express';
import cors from "cors";
import User from "./models/User.js";
import { connectDB } from "./lib/db.js";


const app = express();
const PORT = process.env.PORT;
const FRONTED_URL=process.env.FRONTED_URL;

const publicDir = path.join(process.cwd(), "public");

app.use(express.json())
app.use(cors({origin:FRONTED_URL, credentials:true}));
app.use(clerkMiddleware())
app.get("/health", (req, res) => {
    res.status(200).json({ok: true})
});

if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/{*any}", (req, res, next) => {
    res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
  });
}




app.listen(PORT, () => {
    connectDB();
     console.log("Server rat  30000", PORT)
    });
