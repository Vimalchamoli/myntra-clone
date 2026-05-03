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
    <div className="flex flex-col md:flex-row gap-6 p-4 md:p-8">
      {/* Image */}
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-72 md:h-auto object-cover rounded-lg shadow"
        />
      </div>

      {/* Info */}
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-bold">{product.title}</h1>

        <p className="text-lg md:text-xl text-gray-700 mt-2">
          ₹{product.price}
        </p>

        <div className="mt-2 text-green-600 font-semibold">
          ★ 4.3 | 1.2k ratings
        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-3">
          <button
            onClick={() => addToCart(product)}
            className="bg-pink-500 text-white w-full md:w-auto px-6 py-3 rounded hover:bg-pink-600"
          >
            Add to Bag
          </button>

          <button className="border w-full md:w-auto px-6 py-3 rounded hover:bg-gray-100">
            Wishlist ❤️
          </button>
        </div>

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
