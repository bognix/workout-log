const express = require('express')
const router = express.Router()
const api = require('./api');

router.use('/api', api);

// define the home page route
router.get('*', function (req, res) {
	res.sendFile('index.html', {
		root: 'frontend/dist'
	});
});

module.exports = router
