/* const mongoose = require("mongoose");

// Define schema
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    imgs: {
      type: [String], // Array of strings
      required: false, // Optional
    },
  },
  { timestamps: true }
);

// Create model
module.exports = mongoose.model("Product", productSchema);
 */
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    imgs: { type: [String] }, // optional
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
