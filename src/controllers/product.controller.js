import Product from "../models/product.model.js";

async function store(req, res) {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function showAll(req, res) {
    try {
        const products = await Product.find().exec();
        res.status(201).json(products);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

export default {
    store, showAll
};