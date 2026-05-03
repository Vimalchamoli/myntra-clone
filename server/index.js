const express = require("express");
const cors = require("cors");

const app = express();

// ✅ allow frontend requests
app.use(cors());

// ✅ test route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// ✅ products route
app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      title: "T-Shirt",
      price: 499,
      category: "men",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      title: "Shoes",
      price: 999,
      category: "men",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 3,
      title: "Dress",
      price: 1499,
      category: "women",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    },
    {
      id: 4,
      title: "Kids Hoodie",
      price: 799,
      category: "kids",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    },
  ]);
});

// ✅ IMPORTANT: use dynamic port for Render
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
