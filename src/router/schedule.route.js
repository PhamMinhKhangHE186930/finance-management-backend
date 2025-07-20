const express = require('express');
const scheduleRouter = express.Router();

scheduleRouter.get('/ping', (req, res) => {
    res.status(200).send('pong');
})

module.exports = scheduleRouter;