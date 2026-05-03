import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50 px-3 md:px-6 py-3 flex items-center justify-between flex-wrap">
      <h1 className="text-pink-500 font-bold text-xl">Myntra</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6">
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>
        <Link to="/">Kids</Link>
      </div>

      {/* Right Side */}
      <div className="flex gap-3 md:gap-6 text-sm">
        <Link to="/">Profile</Link>
        <Link to="/">Wishlist</Link>
        <Link to="/cart">Bag</Link>
      </div>
    </div>
  );
}

export default Navbar;
