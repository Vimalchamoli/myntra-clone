import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [wishlist, setWishlist] = useState([]);

  // 🔥 Load wishlist per user
  useEffect(() => {
    if (!user) {
      setWishlist([]);
      return;
    }

    const key = `wishlist_${user.email}`;
    const stored = localStorage.getItem(key);

    console.log("LOADING WISHLIST:", key);

    if (stored) {
      setWishlist(JSON.parse(stored));
    } else {
      setWishlist([]);
    }
  }, [user]);

  // 🔥 Save wishlist per user
  useEffect(() => {
    if (!user) return;

    const key = `wishlist_${user.email}`;

    console.log("SAVING WISHLIST:", key);

    localStorage.setItem(key, JSON.stringify(wishlist));
  }, [wishlist, user]);

  // ➕ Add
  const addToWishlist = (product) => {
    const exists = wishlist.find((item) => item.id === product.id);

    if (!exists) {
      setWishlist([...wishlist, product]);
    }
  };

  // ❌ Remove
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
