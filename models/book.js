var mongoose = require('mongoose')

var bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  },
  buy_url: {
    type: String,
    required: true
  }
})

var Book = module.exports = mongoose.model('Book', bookSchema)

module.exports.getBook = function (callback, limit) {
  Book.find(callback).limit(limit)
}

module.exports.addBook = function (genre, callback) {
  Book.create(genre, callback)
}

module.exports.updateBook = function (id, book, options, callback) {
  var query = {_id: id}
  var update = {
    title: book.title,
    genre: book.genre,
    author: book.author,
    buy_url: book.buy_url
  }
  Book.findOneAndUpdate(query, update, options, callback)
}

module.exports.deleteBook = function (id, callback) {
    var query = {_id: id}
    Book.remove(query, callback)
}
