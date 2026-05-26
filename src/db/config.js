const mongoose = require('mongoose');
const env = require("dotenv");

env.config();

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
        
    } catch(error) {
        console.log("Error connecting database : ", error);
    }
}

module.exports = connectDb;

