var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  updated_date: {type: Date, default: Date.now},
});
/**
 * @class Book
 * @typeof Model<BookSchema>
 */
const Book = mongoose.model('book',BookSchema);
module.exports = Book;
