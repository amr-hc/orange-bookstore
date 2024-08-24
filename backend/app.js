const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require("dotenv").config();



const bodyParser = require('body-parser');
const bookRoutes = require('./Routes/bookRoutes');
const authorRoutes = require('./Routes/authorRoutes');


const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: process.env.FRONT_URL
}));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running');
});



app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);


app.use((request,response)=>{
  response.status(404).json({data:"Not Found"});
});



app.use((error,request,response,next)=>{
  response.status(500).json({data:`Error ${error}`})
});
