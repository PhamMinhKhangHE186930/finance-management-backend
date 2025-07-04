const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connect db successfully');
    } catch (error) {
        console.error('Connect failed: ', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;