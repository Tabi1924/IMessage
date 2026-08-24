import mongoose  from "mongoose";

export async function connectDB() {
    try {
        const mongoUrl= process.env.MONGO_URL;

        if(!mongoUrl){
            throw new Error("MONGO_URL IS required");

        }

        const conn = await mongoose.connect(mongoUrl);
        console.log("MongoDB connnected", conn.connection.host);
    } catch(error){
        console.error("Mongodb connection error", error.message);
        process.exit(1);
        // 1 mean failed and 0 is suucess
    }
    
}