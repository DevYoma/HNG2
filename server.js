require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3500;
const connectDB = require('./config/dbConn');
const mongoose = require('mongoose');

connectDB()

app.use(express.json()); // receive and parse JSON

// app.use('/person')
app.use('/api', require('./routes/api/persons'))


mongoose.connection.once('open', () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`)) 
})