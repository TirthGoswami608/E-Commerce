import { Link } from 'react-router';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleCheckout = () => {
    toast.success('Order placed successfully! 🎉');
    clearCart();
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center py-12">
        <div className="text-center space-y-6">
          <ShoppingBag className="w-24 h-24 mx-auto text-gray-400" />
          <h2 className="text-2xl font-bold text-gray-900">Your cart is empty</h2>
          <p className="text-gray-600">Add some delicious honey to your cart!</p>
          <Link
            to="/products"
            className="inline-block px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm p-4 flex flex-col sm:flex-row gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 space-y-2">
                  <Link
                    to={`/products/${item.id}`}
                    className="font-semibold text-gray-900 hover:text-amber-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                  <p className="text-sm text-gray-600">{item.category}</p>
                  <p className="text-lg font-bold text-amber-600">${item.price}</p>
                </div>
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-between gap-4">
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => {
                      removeFromCart(item.id);
                      toast.success('Item removed from cart');
                    }}
                    className="text-red-500 hover:text-red-700 transition-colors p-2"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24 space-y-6">
              <h2 className="text-xl font-bold text-gray-900">Order Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>{getCartTotal() >= 50 ? 'FREE' : '$5.99'}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t pt-3 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>
                    ${(getCartTotal() + (getCartTotal() >= 50 ? 0 : 5.99) + getCartTotal() * 0.08).toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
              >
                Proceed to Checkout
              </button>
              <Link
                to="/products"
                className="block text-center text-amber-600 hover:text-amber-700 transition-colors"
              >
                Continue Shopping
              </Link>
              {getCartTotal() < 50 && (
                <div className="bg-amber-50 rounded-lg p-4 text-sm text-amber-800">
                  Add ${(50 - getCartTotal()).toFixed(2)} more for free shipping! 🚚
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
