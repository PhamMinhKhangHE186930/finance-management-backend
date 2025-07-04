const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const router = require('./src/router/index.route.js');
require('dotenv').config();

const app = express();
app.use(express.json());

connectDB();
app.use('/api', router);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`server is running in localhost:${PORT}`)
})