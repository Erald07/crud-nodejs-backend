const express = require('express')
const mongosse = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoute);

mongosse.connect("mongodb://localhost:27017/node-crud")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    }) 
})
.catch(() => {
    console.log("Connected failed!");
})