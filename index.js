import express, { application } from "express";
import mongoose from "mongoose";
import { productRouter } from "./products/router.js";

const app = express()

app.use(express.json())
app.use("/products", productRouter)

app.listen(3000, () => mongoose.connect(process.env.MONGO_URI))