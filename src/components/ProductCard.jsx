import { useNavigate } from "react-router-dom";

function ProductCard({ id, title, price, image }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="bg-white rounded-md overflow-hidden cursor-pointer group hover:shadow-lg transition duration-300 border"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 md:h-64 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Discount badge */}
        <span className="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
          20% OFF
        </span>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-800 line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold">₹{price}</span>
          <span className="text-gray-400 text-sm line-through">
            ₹{price + 200}
          </span>
        </div>

        <p className="text-green-600 text-xs mt-1">Free Delivery</p>
      </div>
    </div>
  );
}

export default ProductCard;
