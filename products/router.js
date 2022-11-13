import express from "express";
import { productModel } from "./model.js";

export const productsRouter = express.Router()

productsRouter.post("/", async (req, res) => {
	const createdProduct = await productModel.create(req.body)
	res.status(201).send(createdProduct)
})

productsRouter.get("/", async (req, res) => {
	const products = await productModel.find({})
	res.status(200).send(products)
})

productsRouter.patch("/:id", async (req, res) => {
	const updatedProduct = await productModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
	return res.status(200).send(updatedProduct)
})

productsRouter.get("/:id", async (req, res) => {
	const product = await productModel.findOne({ _id: req.params.id })
	return res.status(200).send(product)
})

productsRouter.delete("/:id", async (req, res) => {
	const deletedProduct = await productModel.findOneAndDelete({ _id: req.params.id })
	return res.status(200).send(deletedProduct)
})