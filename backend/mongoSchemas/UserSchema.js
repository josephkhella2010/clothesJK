const mongoose = require("mongoose");
const ItemCartSchema = require("./ItemCartSchema");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String },
    email: { type: String },
    itemProduct: [ItemCartSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
