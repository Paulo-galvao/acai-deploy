import conn from "../config/conn.js";

const Schema = conn.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true
    },
    additional: {
        type: String,
        required: true 
    },
    size: {
        type: Number,
        required: true
    }

});

const Product = conn.model("Product", productSchema);

export default Product;