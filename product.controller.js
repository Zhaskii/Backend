import express from "express";
import { productSchema } from "./product.validation.js";
import ProductTable from "./product.model.js";

const router = express.Router();

router.post(
  "/product/add",
  async (req, res, next) => {
    try {
      const validatedData = await productSchema.validate(req.body);
      req.body = validatedData;

      next();
    } catch (error) {
      return res.status(401).send({ message: error.message });
    }
  },
  async (req, res) => {
    // extract new product from req.body
    const newProduct = req.body;

    await ProductTable.create(newProduct);

    res.status(201).send({ message: "Product is added successfully" });
  }
);

export { router as productController };
