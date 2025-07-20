const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');
const router = require('./src/router/index.route.js');
const awakeServerOnRender = require('./src/schedule/cron.js')
require('dotenv').config();

const app = express();
connectDB();
app.use(express.json());
app.use(cors());

app.use('/api', router);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`server is running in localhost:${PORT}`)
})