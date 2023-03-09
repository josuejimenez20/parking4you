const express = require('express');

const app = express();

// Usuarios 
app.use('/users', require('./users/usersRoutes'));

// Reservations
app.use('/reservations', require('./reservations/reservationsRoutes'));

module.exports = app;