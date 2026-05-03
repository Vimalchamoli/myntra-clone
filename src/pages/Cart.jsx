import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  if (cart.length === 0) {
    return <p className="p-4">Bag is empty</p>;
  }

  return (
    <div className="p-4">
      {cart.map((item) => (
        <div key={item.id} className="border p-4 mb-4 rounded">
          <img src={item.image} className="w-32 mb-2" />
          <h2 className="font-semibold">{item.title}</h2>
          <p>₹{item.price}</p>

          <div className="flex gap-2 mt-2">
            <button onClick={() => decreaseQty(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQty(item.id)}>+</button>
          </div>

          <button
            onClick={() => removeFromCart(item.id)}
            className="mt-2 text-red-500"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
