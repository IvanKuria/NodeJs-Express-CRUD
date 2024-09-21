import express from "express";
import mongoose from 'mongoose';
import Product from "./models/productModel.js";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;


app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello!")
})

// Allows us to get all products saved in the database
app.get("/products", async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

// Allows us to get a product by its id
app.get("/products/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Allows us to add a product to the database
app.post("/products", async(req, res) => {
    try {
        const procut = await Product.create(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
        
    }
})

// Allows us to update the data in the database
app.put("/products/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message: `Could not find product with ID ${id}`});
        }
        const updateProduct = await Product.findById(id, req.body)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// Delete a product from the database
app.delete("/products/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product) {
            return res.status(404).json({message: `Cannot find any product with this ID ${id}`})
        }
        res.status(200),json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// MongoDB set up
mongoose.set("strictQuery", false)
mongoose.
connect(`mongodb+srv://${username}:${password}G8uxmYnCTGh8lrwM@cluster2.yolhv.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster2`).
then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
    console.log("Connected to MogogDB")
}).catch((error) => {
    console.log(error)
})
