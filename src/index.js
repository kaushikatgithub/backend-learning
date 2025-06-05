// require('dotenv').config({path: './env'});
import dotenv from "dotenv"

import mongoose from "mongoose";
import express from "express";
import {DB_NAME} from "./constants.js"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
});

connectDB();


/*
const app = express();
// semicolon is for clearning purpose, somebody might have forgotten to add semicolon on previous lines
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening at ${process.env.PORT}...`);
        })
    } catch (error) {
        console.log("DATABASE Connection ERROR: ", error);
        throw error;
    }
} )();

*/