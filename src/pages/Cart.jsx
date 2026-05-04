import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  // 🔥 total calculation
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <p className="p-4">Bag is empty</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-xl font-bold mb-6">Your Bag</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 border p-4 mb-4 rounded items-center"
        >
          {/* Image */}
          <img src={item.image} className="w-24 h-24 object-cover rounded" />

          {/* Info */}
          <div className="flex-1">
            <h2 className="font-semibold">{item.title}</h2>
            <p className="text-gray-600">₹{item.price}</p>

            {/* Quantity */}
            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-3 py-1 border rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increaseQty(item.id)}
                className="px-3 py-1 border rounded"
              >
                +
              </button>
            </div>
          </div>

          {/* Remove */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm"
          >
            Remove
          </button>
        </div>
      ))}

      {/* TOTAL */}
      <div className="mt-6 border-t pt-4 flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>₹{total}</span>
      </div>

      {/* Checkout */}
      <button className="mt-4 w-full bg-pink-500 text-white py-3 rounded hover:bg-pink-600">
        Checkout
      </button>
    </div>
  );
}

export default Cart;
