const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const url = process.env.CONNECTION_URL;

const connectToDatabase = async () => {
    await mongoose.connect(url);
}

module.exports = connectToDatabase;