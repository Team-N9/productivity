const express = require('express');
const router = express.Router();
const { getTimers, addTimer } = require('../controllers/timerController');

router.route('/').get(getTimers).post(addTimer);

module.exports = router;