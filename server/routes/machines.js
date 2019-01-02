const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send('list all machines')
});

router.post('/', () => {

});

module.exports = router
