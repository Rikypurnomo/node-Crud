// const express = require('express');
import express from 'express';
const app = express();
const port = 4000;
import rbook from "./src/route/book.js";
import middleware from "./middleware/log.js";


// app.use(middleware);
app.use(express.json());

app.use('/books',rbook)

app.listen(port,() => {
    console.log(`server berjalan di ${port}`)
});