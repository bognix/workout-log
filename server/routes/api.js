const express = require('express')
const router = express.Router()
const machines = require('./machines');

// define the home page route
router.get('/', function (req, res) {
	res.send('api home page')
});

router.use('/machines', machines);

module.exports = router
