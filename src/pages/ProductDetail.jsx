import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext"; // ✅ ADD THIS

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  // 👇 PUT IT HERE (INSIDE COMPONENT)
  const { addToWishlist } = useContext(WishlistContext);

  useEffect(() => {
    axios.get("https://myntra-clone-9o39.onrender.com/products").then((res) => {
      const found = res.data.find((p) => p.id === Number(id));
      setProduct(found);
    });
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>

      <button onClick={() => addToCart(product)}>Add to Bag</button>

      {/* 👇 USE IT HERE */}
      <button onClick={() => addToWishlist(product)}>Wishlist ❤️</button>
    </div>
  );
}

export default ProductDetail;
