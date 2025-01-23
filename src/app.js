import e from "express";
import "dotenv/config";
import productRouter from "./routes/product.router.js";

const port = process.env.PORT;
const app = e();

app.use(e.json());

app.get('/', (req, res) => {
    res.json("Welcome to acai system");
})

app.use('/product', productRouter);

app.listen(port, () => {
    console.log("Server running on port", port);
});