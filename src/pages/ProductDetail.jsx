import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://myntra-clone-9o39.onrender.com/products")
      .then((res) => {
        console.log("PRODUCT DATA:", res.data); // debug

        const found = res.data.find(
          (p) => p.id === Number(id), // 🔥 FIX
        );

        setProduct(found);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleAddToCart = (item) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((p) => p.id === item.id);

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart 🛒");
  };

  if (!product) return <p>Product not found...</p>;

  return (
    <div className="flex gap-10 p-10">
      <img src={product.image} className="w-80 rounded" />

      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="text-xl text-gray-600 mt-2">₹{product.price}</p>

        <button
          onClick={() => handleAddToCart(product)}
          className="mt-6 bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
