//require('./models');
const express = require('express');
const uuid = require('uuid');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('./middlewares/cors');
const { DATABASE_URL, PORT } = require('./config');
const { Products } = require('./models/product');
const validateApiKey = require('./middlewares/validateToken');

const app = express();
const jsonParser = bodyParser.json();

app.use(express.static("views"));
app.use(morgan('dev'));
app.use(validateApiKey);
app.use(cors);

//get all the products
app.get('/products', (req, res) => {
    Products
        .getAllProducts()
        .then(results => {
            res.status(200).json(results);
        })
});

app.post('/products', (req, res) => {
    let id = uuid.v4();
    let { name, description, quantity, provider, components } = req.body;
    let newProduct = req.body;

    if (name && description && quantity && provider && components) {
        res.statusMessage = "Some parameter was not pased through";
        res.status(406).end();
    }
    Products
        .createProduct(newProduct)
        .then(result => {
            return res.status(201).json(result);
        })
        .catch(err => {
            res.statusMessage = "Something went wrong with the database";
            return res.status(500).end();
        })
});



/*=================================
=               MAIN              =
==================================*/
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    new Promise((resolve, reject) => {
            const settings = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            };

            mongoose.connect(DATABASE_URL, settings, (err) => {
                if (err) {
                    reject(err);
                } else {
                    console.log("Database connected successfully.");
                    return resolve();
                }
            })
        })
        .catch(err => {
            mongoose.disconnect();
            console.log(err);
        })
});