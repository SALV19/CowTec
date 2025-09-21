const express = require('express');
const path = require('path');
require('dotenv').config();
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Database
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => console.log("Conectado a la base de datos de MongoDB"))
  .catch((error) =>
    console.error("Error al conectar con la base de datos:", error)
  );

// Set EJS as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', require('./routes/index'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('pages/error', { 
    title: 'Error',
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err : {}
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('pages/404', { 
    title: '404 - Page Not Found',
    url: req.originalUrl 
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit: http://localhost:${PORT}`);
});