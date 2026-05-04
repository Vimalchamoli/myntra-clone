import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get("https://myntra-clone-9o39.onrender.com/products")
      .then((res) => {
        const found = res.data.find((p) => p.id === Number(id));
        setProduct(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <p className="p-4">Loading...</p>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8 grid md:grid-cols-2 gap-10">
      {/* LEFT - IMAGE */}
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 md:h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      {/* RIGHT - DETAILS */}
      <div>
        <h1 className="text-xl md:text-2xl font-semibold">{product.title}</h1>

        <div className="mt-2 text-green-600 font-medium">
          ★ 4.3 | 1.2k Ratings
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-xl font-bold">₹{product.price}</span>
          <span className="line-through text-gray-400">
            ₹{product.price + 200}
          </span>
          <span className="text-pink-500 font-semibold">20% OFF</span>
        </div>

        <hr className="my-4" />

        {/* SIZE */}
        <p className="font-semibold">Select Size</p>
        <div className="flex gap-3 mt-2">
          {["S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="border px-3 py-1 rounded hover:border-pink-500"
            >
              {size}
            </button>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-500 text-white px-6 py-3 rounded font-semibold hover:bg-pink-600"
          >
            ADD TO BAG
          </button>

          <button className="border px-6 py-3 rounded font-semibold hover:bg-gray-100">
            WISHLIST ❤️
          </button>
        </div>

        {/* DELIVERY */}
        <div className="mt-6 text-sm text-gray-600">
          <p>🚚 Delivery in 3-5 days</p>
          <p>✔ 7 days return policy</p>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-6 text-gray-600">
          <p>
            Premium quality product designed for comfort and style. Perfect for
            everyday wear.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
