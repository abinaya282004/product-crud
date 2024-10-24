const express = require('express');
const mongoose=require('mongoose');
const Product=require('./product/structure.js');
const productRoute=require('./product/route.js');
const cors=require('cors');
const app = express();

//middle ware
app.use(express.json())

//route
app.use('/api/products',productRoute);

app.use(cors({
  origin:'http://localhost:3000'
}));


app.get('/', (req, res) => {
    res.send("Hello from node API Request Server");
});

mongoose.connect('mongodb+srv://abinaya:123@ecommerce.gunty.mongodb.net/')
  .then(() =>{
    console.log('Connected to Database');

    app.listen(3000, ()=>{
        console.log("Server is running on Port 3000");
    });
  });

