const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();


// Enable CORS for all routes
app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
  }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 5500;
const connectDB = require('./config/db');
connectDB();

//Template engine
app.set('views', path.join(__dirname, '/views'));
// app.set('view engine', 'ejs');

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));


app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}`);
})







// "start": "react-scripts start",