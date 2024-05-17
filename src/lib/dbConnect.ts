import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number
}

const connection : ConnectionObject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already Connected to DB");
        return
    }
    try {
        // TODO: study mongoose.connect() options
        const db = await mongoose.connect(process.env.MONGO_URI || "", {})

        console.log(db);
        
        connection.isConnected = db.connections[0].readyState

        console.log("DB connected successfully");
        
    } catch (error) {
        console.log("DB connection failed", error);

        process.exit(1)
    }
}

export default dbConnect;