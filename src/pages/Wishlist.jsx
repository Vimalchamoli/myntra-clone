import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  if (wishlist.length === 0) {
    return <p className="p-4">Wishlist is empty</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8">
      <h1 className="text-xl font-bold mb-6">Your Wishlist ❤️</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {wishlist.map((item) => (
          <div key={item.id} className="border p-3 rounded">
            <img src={item.image} className="w-full h-48 object-cover" />
            <h2 className="mt-2 font-semibold">{item.title}</h2>
            <p>₹{item.price}</p>

            <button
              onClick={() => removeFromWishlist(item.id)}
              className="text-red-500 mt-2 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
