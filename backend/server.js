/* const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
app.use(express.json());
// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Example route
app.use("/api", require("./ApiRoutes/ProductRouter"));

app.get("/", (req, res) => {
  res.send("API is working!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port: http://localhost: ${PORT}`)
);
 */

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Mount the product router
app.use("/api", require("./ApiRoutes/ProductRouter"));
app.use("/api", require("./ApiRoutes/UserRouter"));
app.use("/api", require("./ApiRoutes/AddCartRouter"));

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Atlas connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Example route
app.get("/", (req, res) => {
  res.send("API is working!");
});

const PORT = process.env.PORT || 5200;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port: http://localhost:${PORT}`)
);
