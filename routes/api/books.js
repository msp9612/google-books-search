/* Dependencies */
/* -------------------------------*/

const router = require('express').Router();
// const booksController = require('../../controllers/booksController');

/* MAIN */
/* -------------------------------*/

// Matches with "/api/books"
// router
// 	.route('/')
// 	.get(booksController.findSaved)
// 	.post(booksController.save);

// Matches with "/api/books/:id"
// router.route('/:id').delete(booksController.delete);

module.exports = router;
