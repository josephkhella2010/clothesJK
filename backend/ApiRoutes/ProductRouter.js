const express = require("express");
const router = express.Router();
const Product = require("../mongoSchemas/ProductSchema");

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({ products });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error with get product request" });
  }
});

router.post("/addProduct", async (req, res) => {
  const { name, description, price, imgs } = req.body;
  try {
    if (!name || !description || !price) {
      return res.status(404).json({ error: "please fill all field" });
    }
    const newProduct = { name, description, price, imgs };
    const product = await Product.create(newProduct);
    return res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: "error with post add product request" });
  }
});

module.exports = router;
