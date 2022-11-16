import express from "express";
import { productModel } from "./model.js";

export const productRouter = express.Router();

productRouter.post("/", async (req, res) => {
  const createdProduct = await productModel.create(req.body);
  res.status(201).send(createdProduct);
});

productRouter.get("/", async (req, res) => {
  const products = await productModel.find({});
  res.status(200).send(products);
});

productRouter.patch("/:id", async (req, res) => {
  const updateProduct = await productModel.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    {
      new: true,
    }
  );
  res.status(200).send(updateProduct);
});

productRouter.get("/:id", async (req, res) => {
	const product = await productModel.findOne({ _id: req.params.id });
	res.status(200).send(product);
  });

  productRouter.delete("/:id", async (req, res) => {
	const deletedProduct = await productModel.findOneAndDelete({ _id: req.params.id });
	res.status(200).send(deletedProduct);
  });
