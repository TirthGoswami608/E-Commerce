import { useState } from 'react';
import { Search, Package, Truck, CheckCircle, XCircle } from 'lucide-react';
import { orders, OrderStatus } from '../data/orders';

const statusConfig = {
  Pending: { icon: Package, color: 'text-yellow-500', bg: 'bg-yellow-50', border: 'border-yellow-500' },
  Processing: { icon: Package, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-500' },
  Shipped: { icon: Truck, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-500' },
  Delivered: { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-500' },
  Cancelled: { icon: XCircle, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-500' },
};

export const OrderTrackingPage = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [searchedOrder, setSearchedOrder] = useState<typeof orders[0] | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = () => {
    const order = orders.find(
      (o) => o.id === trackingNumber || o.trackingNumber === trackingNumber
    );
    if (order) {
      setSearchedOrder(order);
      setNotFound(false);
    } else {
      setSearchedOrder(null);
      setNotFound(true);
    }
  };

  const getStatusProgress = (status: OrderStatus) => {
    const statuses: OrderStatus[] = ['Pending', 'Processing', 'Shipped', 'Delivered'];
    return statuses.indexOf(status) + 1;
  };

  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Order</h1>
          <p className="text-gray-600">Enter your order ID or tracking number</p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Order ID (e.g., ORD-001) or Tracking Number"
              value={trackingNumber}
              onChange={(e) => {
                setTrackingNumber(e.target.value);
                setNotFound(false);
              }}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            />
            <button
              onClick={handleSearch}
              className="flex items-center space-x-2 px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              <Search className="w-5 h-5" />
              <span>Track</span>
            </button>
          </div>
          {notFound && (
            <p className="mt-4 text-red-500 text-sm">Order not found. Please check your order ID or tracking number.</p>
          )}
        </div>

        {/* Order Details */}
        {searchedOrder && (
          <div className="space-y-6">
            {/* Status Card */}
            <div className={`bg-white rounded-lg shadow-lg p-8 border-l-4 ${statusConfig[searchedOrder.status].border}`}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Order #{searchedOrder.id}</h2>
                  <p className="text-gray-600">Placed on {searchedOrder.date}</p>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${statusConfig[searchedOrder.status].bg}`}>
                  {(() => {
                    const Icon = statusConfig[searchedOrder.status].icon;
                    return <Icon className={`w-5 h-5 ${statusConfig[searchedOrder.status].color}`} />;
                  })()}
                  <span className={`font-semibold ${statusConfig[searchedOrder.status].color}`}>
                    {searchedOrder.status}
                  </span>
                </div>
              </div>

              {/* Progress Tracker */}
              {searchedOrder.status !== 'Cancelled' && (
                <div className="mb-8">
                  <div className="flex justify-between items-center">
                    {['Pending', 'Processing', 'Shipped', 'Delivered'].map((status, index) => {
                      const isActive = index < getStatusProgress(searchedOrder.status);
                      return (
                        <div key={status} className="flex-1 flex flex-col items-center">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              isActive ? 'bg-amber-600 text-white' : 'bg-gray-200 text-gray-400'
                            }`}
                          >
                            {isActive ? '✓' : index + 1}
                          </div>
                          <span className={`text-xs mt-2 ${isActive ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                            {status}
                          </span>
                          {index < 3 && (
                            <div
                              className={`hidden sm:block absolute h-1 w-full ${
                                isActive && index < getStatusProgress(searchedOrder.status) - 1
                                  ? 'bg-amber-600'
                                  : 'bg-gray-200'
                              }`}
                              style={{ top: '20px', left: '50%', width: 'calc(100% - 40px)' }}
                            />
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Shipping Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Shipping Address</h3>
                  <p className="text-gray-600">{searchedOrder.shippingAddress}</p>
                </div>
                {searchedOrder.trackingNumber && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tracking Number</h3>
                    <p className="text-amber-600 font-mono">{searchedOrder.trackingNumber}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Order Items</h3>
              <div className="space-y-4">
                {searchedOrder.items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 py-4 border-b last:border-b-0">
                    <img
                      src={item.image}
                      alt={item.productName}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.productName}</h4>
                      <p className="text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-amber-600">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-amber-600">${searchedOrder.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
