import mongoose from 'mongoose';
import { cloneElement } from 'react';

const closeConnectionMongo = async()=>{
    if (mongoose.connection.readyState>0) {
        mongoose.disconnect;
    }
};

export default closeConnectionMongo;
 
