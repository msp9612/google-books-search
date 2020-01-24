/* Dependencies */
/* -------------------------------*/

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

/* Global variables and instances */
/* -------------------------------*/

const PORT = process.env.PORT || 3001;
const app = express();

/* MAIN */
/* -------------------------------*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

// API routes
app.use(routes);

// Mongoose
mongoose.connect('mongodb://localhost/googlebooks', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});
