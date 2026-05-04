import { createContext, useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext();

function CartProvider({ children }) {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);

  // 🔥 Load cart when user changes
  useEffect(() => {
    if (!user) {
      setCart([]);
      return;
    }

    const key = `cart_${user.email}`;
    const storedCart = localStorage.getItem(key);

    console.log("LOADING CART:", key);

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart([]);
    }
  }, [user]);

  // 🔥 Save cart for current user
  useEffect(() => {
    if (!user) return;

    const key = `cart_${user.email}`;

    console.log("SAVING CART:", key);

    localStorage.setItem(key, JSON.stringify(cart));
  }, [cart, user]);

  // ➕ Add to cart
  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // ❌ Remove item
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // ➕ Increase quantity
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // ➖ Decrease quantity
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
