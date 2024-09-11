import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
    throw new Error("Env não preenchido");
}

const connectMongo = async()=>{
    if (mongoose.connection.readyState>0) {
        return;
    } else {
       return await mongoose.connect.DATABASE_URL
        .then("MongoDB conectado")
        .catch(err=>console.error(err));
    }
}

export default connectMongo;
