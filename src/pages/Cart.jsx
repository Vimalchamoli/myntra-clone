import { useEffect, useState } from "react";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) {
      setCart(JSON.parse(stored));
    }
  }, []);

  const updateCart = (updated) => {
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const increaseQty = (index) => {
    const updated = [...cart];
    updated[index].quantity += 1;
    updateCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cart];
    if (updated[index].quantity > 1) {
      updated[index].quantity -= 1;
    }
    updateCart(updated);
  };

  const removeItem = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    updateCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Bag 🛒</h1>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {cart.map((item, index) => (
              <div key={index} className="bg-white p-4 shadow rounded">
                <img src={item.image} className="w-full h-40 object-cover" />

                <h3 className="mt-2 font-semibold">{item.title}</h3>
                <p>₹{item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(index)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(index)}
                    className="bg-gray-200 px-2 rounded"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(index)}
                  className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-8 text-right">
            <h2 className="text-xl font-bold">Total: ₹{total}</h2>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
