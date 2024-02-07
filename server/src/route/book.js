// const express = require('express');
import express from 'express';
import bookController from '../controllers/books.js'
// import bookController from "../controllers/books.js"
// const bookController = require('../controllers/books.js')

const route = express.Router();

route.get('/get',bookController.getBook);

route.post('/update',bookController.createBooks);

route.patch('/update/:id',bookController.updateBook)

route.delete('/delete/:id',bookController.deleteBook)

export default route;