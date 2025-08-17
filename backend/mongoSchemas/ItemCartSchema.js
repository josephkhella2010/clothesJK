const mongoose = require("mongoose");

const ItemCartSchema = new mongoose.Schema(
  {
    ItemProduct: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
  },
  { _id: true }
);

module.exports = ItemCartSchema;
