const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema(
    {
        deviceId: {type: String, require: true},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        deviceType: {type: String},
        platform: {type: String},
        lastLogin: {type: Date}
    }
);

module.exports = mongoose.model("Device", deviceSchema);