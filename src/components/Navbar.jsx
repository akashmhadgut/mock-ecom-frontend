import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ user, logout, cart, toggleCart }) => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Brand */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-yellow-400 text-2xl">🛍️</span>
          <span>Vibe Commerce</span>
        </div>

        {/* Navigation / User Actions */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="hidden sm:inline">Hi, <span className="font-semibold">{user.name}</span></span>

              {/* Cart Icon */}
              <button
                className="relative p-2 rounded hover:bg-gray-800 transition"
                onClick={toggleCart}
              >
                <FaShoppingCart size={20} />
                {cart.items?.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cart.items.length}
                  </span>
                )}
              </button>

              {/* Logout Button */}
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition"
              >
                Logout
              </button>
            </>
          ) : (
            <a
              href="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition"
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
