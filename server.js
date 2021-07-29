const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express ();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config ();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const Product = mongoose.model (
    'products',
    new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    price: Number,
    category: String,
}));

const Category = mongoose.model (
    'Categorias',
    new mongoose.Schema({
    name: String,
    image: String
    }));

app.get('/api/products/seed',async (req, res) => {
    const products = await Product.insertMany(data.products);
    res.send({ products });
});

app.get('/api/products', async (req, res) => {
    const { category } = req.query;
    const products = await Product.find(category ? { category } : {});
    res.send (products);
});

app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.get('/api/categories', async (req, res) => {
    const categorias = await Category.find({});
    console.log('testelog')
    console.log(categorias);

    res.send(categorias);
    });

    const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
    });