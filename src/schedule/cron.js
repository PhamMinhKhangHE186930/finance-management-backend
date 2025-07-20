const cron = require('node-cron');
const axios = require('axios');

const awakeServerOnRender = async () => {
    cron.schedule('*/1 * * * *', async () => {
        try {
            const response = await axios.get('https://finance-management-backend-qdp8.onrender.com/api/schedule/ping');
            console.log("Ping success")
        } catch (error) {
            console.log("Ping failed")
        }
    })
}

module.exports = awakeServerOnRender