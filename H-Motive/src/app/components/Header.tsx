import { Link, useLocation } from 'react-router';
import { ShoppingCart, User, Search, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

export const Header = () => {
  const { getCartItemsCount } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
              <span className="text-2xl">🍯</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              Golden Honey
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`transition-colors ${
                isActive('/products') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Products
            </Link>
            <Link
              to="/orders"
              className={`transition-colors ${
                isActive('/orders') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Track Order
            </Link>
            <Link
              to="/dashboard"
              className={`transition-colors ${
                isActive('/dashboard') ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
              }`}
            >
              Dashboard
            </Link>
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-amber-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/dashboard" className="p-2 text-gray-700 hover:text-amber-600 transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/cart" className="p-2 text-gray-700 hover:text-amber-600 transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`${isActive('/') ? 'text-amber-600' : 'text-gray-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className={`${isActive('/products') ? 'text-amber-600' : 'text-gray-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/orders"
                className={`${isActive('/orders') ? 'text-amber-600' : 'text-gray-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Track Order
              </Link>
              <Link
                to="/dashboard"
                className={`${isActive('/dashboard') ? 'text-amber-600' : 'text-gray-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
