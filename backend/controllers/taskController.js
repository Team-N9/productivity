const Task = require('../models/Task');

exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();

        return res.status(200).json({
            success: true,
            data: tasks
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.getTask = async (req, res, next) => {   //Might not need this function but just in case
    try {
        const task = await Task.findById(req.params.id);

        if(!task) {
            return res.status(404).json({
                success: false,
                error: 'No such task found'
            })
        }

        return res.status(200).json({
            success: true,
            data: recipe
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        })
    }
}

exports.addTask = async (req, res, next) => {
    try {
        const { text } = req.body;

        const task = await Task.create(req.body);
        return res.status(201).json({
            success: true,
            data: task
        })
    } catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val => val.message);

            return res.status(400).json({
                success: false,
                error: messages
            }); //400 is client error 
        }
        else {
            return res.status(500).json({
                success: false,
                error: 'Server error'
            });
        }
    }
}

exports.deleteTask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        
        if(!task) {
            return res.status(404).json({
                success: false,
                error: 'No such task found'
            })
        }

        await task.remove();

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
}