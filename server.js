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

const Category = mongoose.model (
    'categories',
    new mongoose.Schema({
    name: String,
    image: String
    }));

const Product = mongoose.model (
    'products',
    new mongoose.Schema({
    category: String,
    image: String,
    name: String,
    description: String,
    price: Number,
}));




app.get('/api/products', async (req, res) => {
    const { category } = req.query;
    const products = await Product.find (category ? { category } : {});
    res.send (products);
});

app.post('/api/products', async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.get('/api/categories', async (req, res) => {
    const categories = await Category.find({});
    console.log('testelog')
    console.log(categories);

    res.send(categories);
    });

    const Order = mongoose.model(
        'order',
        new mongoose.Schema(
          {
            number: { type: Number, default: 0 },
            orderType: String,
            paymentType: String,
            isPaid: { type: Boolean, default: false },
            isReady: { type: Boolean, default: false },
            inProgress: { type: Boolean, default: true },
            isCanceled: { type: Boolean, default: false },
            isDelivered: { type: Boolean, default: false },
            totalPrice: Number,
            taxPrice: Number,
            orderItems: [
              {
                name: String,
                price: Number,
                quantity: Number,
              },
            ],
          }));
          app.post('/api/orders', async (req, res) => {
            const lastOrder = await Order.find().sort({ number: -1 }).limit(1);
            const lastNumber = lastOrder.length === 0 ? 0 : lastOrder[0].number;
            if (
                !req.body.orderType ||
                !req.body.paymentType ||
                !req.body.orderItems ||
                req.body.orderItems.length === 0
              ) {
                return res.send({ message: 'Data is required.' });
              }
              const order = await Order({ ...req.body, number: lastNumber + 1 }).save();
              res.send(order);
            });
            app.get('/api/orders', async (req, res) => {
              const orders = await Order.find({ isDelivered: false, isCanceled: false });
              res.send(orders);
            });

    const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`serve at http://localhost:${port}`);
    });