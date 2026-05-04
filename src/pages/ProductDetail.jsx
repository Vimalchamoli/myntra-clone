import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext"; // ✅ ADD THIS
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

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
    <div className="max-w-6xl mx-auto p-4 md:p-8 grid md:grid-cols-2 gap-10">
      {/* IMAGE */}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 md:h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* DETAILS */}
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">{product.title}</h1>

        <p className="text-lg text-gray-700 mt-2">₹{product.price}</p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-500 text-white px-6 py-3 rounded"
          >
            Add to Bag
          </button>

          <button
            onClick={() => {
              addToWishlist(product);
              navigate("/wishlist");
            }}
            className="border px-6 py-3 rounded"
          >
            Wishlist ❤️
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
