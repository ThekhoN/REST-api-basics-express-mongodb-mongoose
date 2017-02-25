var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(bodyParser.json())

Genre = require('./models/genre')
Book = require('./models/book')

mongoose.connect('mongodb://localhost/bookstore2')
var db = mongoose.Connection

app.get('/', function (req, res) {
  res.json('Please use correct api endpoints. . .')
})

app.get('/api/genre', function (req, res) {
  Genre.getGenre(function (err, genre) {
    if(err){
      throw err
    }
    res.json(genre)
  })
})

app.post('/api/genre', function (req, res) {
  var genre = req.body
  Genre.addGenre(genre, function (err, genre) {
    if(err){
      throw err
    }
    res.json(genre)
  })
})

app.put('/api/genre/:_id', function (req, res) {
  var id = req.params._id
  var genre = req.body
  Genre.updateGenre(id, genre, {}, function (err, genre) {
    if(err){
      throw err
    }
    res.json(genre)
  })
})

app.delete('/api/genre/:_id', function (req, res) {
  var id = req.params._id
  Genre.deleteGenre(id, function (err, genre) {
    if(err){
      throw err
    }
    res.json(genre)
  })
})

app.get('/api/book', function (req, res) {
  Book.getBook(function(err, book){
    if(err){
      throw err
    }
    res.json(book)
  })
})

app.post('/api/book', function (req, res) {
  var book = req.body
  Book.addBook(book, function (err, book) {
    if(err){
      throw err
    }
    res.json(book)
  })
})

app.put('/api/book/:_id', function (req, res) {
  var id = req.params._id
  var book = req.body
  Book.updateBook(id, book, {}, function (err, book) {
    if(err){
      throw err
    }
    res.json(book)
  })
})

app.delete('/api/book/:_id', function (req, res) {
  var id = req.params._id
  Book.deleteBook(id, function(err, book){
    if(err){
      throw error
    }
    res.json(book)
  })
})

app.listen('3000', function () {
  console.log('listening on 3000');
})
