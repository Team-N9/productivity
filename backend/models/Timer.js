mongoose = require('mongoose');

const TimerSchema = new mongoose.Schema({
    time: {
        type: Number,
        required: [true, 'Your timer is missing the time!']
    },
    name: {
        type: String,
        required: [true, 'Your timer is missing the name!']
    }
});

module.exports = mongoose.model('Timer', TimerSchema)