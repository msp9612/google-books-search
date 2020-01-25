/* Dependencies */
/* -------------------------------*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Global variables and instances */
/* -------------------------------*/

const bookSchema = new Schema({
	// Required
	title: { type: String, required: true },
	'author(s)': { type: [String], required: true },
	link: { type: String, required: true },

	// Not required
	description: { type: String },
	image: { type: String },
});

/* MAIN */
/* -------------------------------*/

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
