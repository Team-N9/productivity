const Timer = require('../models/Timer');

exports.getTimers = async (req, res, next) => {
    try {
        const timers = await Timer.find();

        return res.status(200).json({
            success: true,
            data: timers
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.addTimer = async (req, res, next) => {
    try {
        const { time, name } = req.body;

        const timer = await Timer.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}