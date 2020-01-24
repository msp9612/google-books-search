/* Dependencies */
/* -------------------------------*/

const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

/* MAIN */
/* -------------------------------*/

// API routes
router.use('/api', apiRoutes);

// Send miscellaneous requests to the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
