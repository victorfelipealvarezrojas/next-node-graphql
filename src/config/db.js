import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config({ path: './config/.env' })


export class DBConnection {

    constructor() {
        this.client = new mongoose.connect(process.env.BD_MONGO, { useNewUrlParser: true });
    }

    connect() {
        return this.client;
    }

    disconnect() {
        return this.client.close();
    }
}