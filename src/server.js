const express = require('express');
const path = require('path');
const app = express();


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 5500;
const connectDB = require('./config/db');
connectDB();

//Template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));

app.listen(PORT , ()=>{
    console.log(`Listening on port ${PORT}`);
})







// "start": "react-scripts start",