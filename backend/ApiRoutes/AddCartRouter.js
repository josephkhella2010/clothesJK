/* const express = require("express");
const router = express.Router();
const User = require("../mongoSchemas/UserSchema");
const authenticateToken = require("../middleware/auth");

router.post("/:userId/addItem", authenticateToken, async (req, res) => {
  try {
    const userId = req.params;
    const { ItemProduct, quantity } = req.body;
    const user = await User.find(userId);
    if (!user) {
      return res.status(500).json({ error: "user not found" });
    }
    user.items.push({
      ItemProduct: ItemProduct,
      quantity: quantity || 1,
    });
    await user.save();
    return res.status(200).json({
      sms: "successfull created",
      ItemProduct: ItemProduct,
      quantity: quantity,
    });
  } catch (error) {
    return res.status(500).json({ error: "error with post itemcart request" });
  }
});
router.get("/:userId/cartItem", authenticateToken, async (req, res) => {
  try {
    const userId = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });
    const itemProduct = user.itemProduct;
    return res.status(200).json({ itemProduct, quantity });
  } catch (error) {
    return res.status(500).json({ error: "error with get itemcart request" });
  }
});

module.exports = router;
 */

/* ////////// */
const express = require("express");
const router = express.Router();
const User = require("../mongoSchemas/UserSchema");
const { authenticateToken } = require("../middleware/auth");
// Add item to user's cart
router.post("/:userId/addItem", authenticateToken, async (req, res) => {
  try {
    const { userId } = req.params;
    const { ItemProduct, quantity } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.itemProduct.push({
      ItemProduct: ItemProduct,
      quantity: quantity || 1,
    });

    await user.save();

    return res.status(200).json({
      message: "Item successfully added",
      ItemProduct,
      quantity: quantity || 1,
    });
  } catch (error) {
    return res.status(500).json({ error: "Error with post itemcart request" });
  }
});

// Get all items in user's cart
router.get("/:userId/cartItem", authenticateToken, async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate(
      "itemProduct.ItemProduct"
    );
    const itemProduct = user.itemProduct;
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json(itemProduct);
  } catch (error) {
    return res.status(500).json({ error: "Error with get itemcart request" });
  }
});

router.delete(
  "/:userId/deleteCartItem/:id",
  authenticateToken,
  async (req, res) => {
    try {
      const { userId, id } = req.params;

      console.log("Decoded user:", req.user); // <-- This will show what middleware decoded
      console.log("userId from URL:", userId);

      if (!req.user || req.user.id !== userId) {
        return res.status(403).json({ error: "Unauthorized action" });
      }

      const user = await User.findById(userId);
      if (!user) return res.status(404).json({ error: "User not found" });

      user.itemProduct = user.itemProduct.filter(
        (item) => item._id.toString() !== id
      );

      await user.save();
      return res.status(200).json({ message: "Item successfully removed" });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Error with delete cart method" });
    }
  }
);

// GET cart items

// DELETE cart item by ItemProduct._id

module.exports = router;
