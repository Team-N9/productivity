const express = require('express');
const router = express.Router();
const { getTasks, getTask, addTask, deleteTask } = require('../controllers/taskController');

router.route('/').get(getTasks).post(addTask);

router.route('/:id').delete(deleteTask).get(getTask);

module.exports = router;