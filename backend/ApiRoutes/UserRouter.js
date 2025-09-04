const express = require("express");
const router = express.Router();
const User = require("../mongoSchemas/UserSchema");
const { generateToken } = require("../middleware/auth");
router.post("/addUser", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    // Check if username or email already exists
    const existingUser = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (existingUser) {
      return res.status(400).json({
        error: "Username or email already exists",
      });
    }
    const newUser = { username, email, password };
    const user = await User.create(newUser);
    return res.status(201).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "error with post user" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ error: "error with get user" });
  }
});
///  login
router.post("/loginUser", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existUser = await User.findOne({
      $or: [{ username: username }, { email: username }],
    });

    if (!existUser) {
      return res
        .status(409)
        .json({ error: "user is not found please register" });
    }
    if (existUser.password != password) {
      return res.status(409).json({ error: "passward is not correct" });
    }
    if (!username || !password) {
      return res.status(404).json({ error: "please fill all field" });
    }
    // create JWT
    const token = generateToken({
      id: existUser._id.toString(), // ✅ use _id, not id
      username: existUser.username,
      email: existUser.email,
      password: existUser.password,
    });
    return res
      .status(201)
      .json({ user: existUser, token, msm: "sucessfully login " });
  } catch (error) {
    return res.status(500).json({ error: "error with post loginUser" });
  }
});

module.exports = router;

module.exports = router;
