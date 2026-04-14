import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍯</span>
              </div>
              <span className="text-xl font-bold text-white">Golden Honey</span>
            </div>
            <p className="text-amber-100 text-sm">
              Premium, organic honey sourced from the finest local bee farms. Pure quality you can taste.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-amber-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-amber-100 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-amber-100 hover:text-white transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-amber-100 hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-amber-100">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Returns & Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-amber-100">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@goldenhoney.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Honey Lane, Sweet Valley, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center text-sm text-amber-100">
          <p>&copy; 2024 Golden Honey. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
