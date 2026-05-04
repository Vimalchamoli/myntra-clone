import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-50 px-4 md:px-6 py-3 flex items-center justify-between">
      <h1 className="text-pink-500 font-bold text-xl">Myntra</h1>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-6">
        <Link to="/">Men</Link>
        <Link to="/">Women</Link>
        <Link to="/">Kids</Link>
      </div>

      {/* Right side */}
      <div className="flex gap-4 md:gap-6 text-sm">
        <Link to="/">Profile</Link>
        <Link to="/wishlist">Wishlist ❤️</Link>
        <Link to="/cart">Bag</Link>
      </div>
    </div>
  );
}

export default Navbar;
