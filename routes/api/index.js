/* Dependencies */
/* -------------------------------*/

const router = require('express').Router();
const bookRoutes = require('./books');

/* MAIN */
/* -------------------------------*/

// Book routes
router.use('/books', bookRoutes);

module.exports = router;
