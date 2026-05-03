import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm px-6 py-3 flex items-center justify-between">
      {/* LEFT: Logo + Menu */}
      <div className="flex items-center gap-6">
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-pink-500 cursor-pointer"
        >
          Myntra
        </h1>

        <span className="cursor-pointer hover:text-pink-500">Men</span>
        <span className="cursor-pointer hover:text-pink-500">Women</span>
        <span className="cursor-pointer hover:text-pink-500">Kids</span>
      </div>

      {/* CENTER: Search */}
      <input
        type="text"
        placeholder="Search for products"
        className="w-1/3 border rounded px-3 py-1 focus:outline-none"
      />

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-6">
        <span className="cursor-pointer hover:text-pink-500">Profile</span>
        <span className="cursor-pointer hover:text-pink-500">Wishlist</span>
        <span
          onClick={() => navigate("/cart")}
          className="cursor-pointer hover:text-pink-500"
        >
          Bag
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
