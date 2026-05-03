import { useNavigate } from "react-router-dom";

function ProductCard({ id, title, price, image }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className="bg-white rounded-lg overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition duration-300"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 md:h-64 object-cover group-hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-2 md:p-3">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {title}
        </h3>
        <p className="text-gray-600 text-sm">₹{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
