import express from "express"
import mongoose from "mongoose"
import { productsRouter } from "./products/router.js"

const app = express()

app.use(express.json())
app.use("/products", productsRouter)

app.listen(3000, () => mongoose.connect(process.env.MONGO_URI))