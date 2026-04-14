import { useState } from 'react';
import { Package, Award, User, MapPin, Mail, Phone } from 'lucide-react';
import { orders } from '../data/orders';

export const UserDashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'rewards'>('orders');

  // Mock user data
  const user = {
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Springfield, IL 62701',
    rewardPoints: 450,
  };

  const userOrders = orders.filter((order) => order.customerId === 'CUST-001');

  return (
    <div className="bg-amber-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 space-y-2">
              <button
                onClick={() => setActiveTab('orders')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'orders'
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-700 hover:bg-amber-50'
                }`}
              >
                <Package className="w-5 h-5" />
                <span>My Orders</span>
              </button>
              <button
                onClick={() => setActiveTab('rewards')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'rewards'
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-700 hover:bg-amber-50'
                }`}
              >
                <Award className="w-5 h-5" />
                <span>Reward Points</span>
              </button>
              <button
                onClick={() => setActiveTab('profile')}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === 'profile'
                    ? 'bg-amber-600 text-white'
                    : 'text-gray-700 hover:bg-amber-50'
                }`}
              >
                <User className="w-5 h-5" />
                <span>Profile</span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {/* My Orders */}
            {activeTab === 'orders' && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Orders</h2>
                {userOrders.map((order) => (
                  <div key={order.id} className="bg-white rounded-lg shadow-sm p-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900">Order #{order.id}</h3>
                        <p className="text-sm text-gray-600">{order.date}</p>
                      </div>
                      <span
                        className={`mt-2 sm:mt-0 px-4 py-1 rounded-full text-sm ${
                          order.status === 'Delivered'
                            ? 'bg-green-100 text-green-700'
                            : order.status === 'Shipped'
                            ? 'bg-purple-100 text-purple-700'
                            : order.status === 'Processing'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="space-y-3 mb-4">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center space-x-4">
                          <img
                            src={item.image}
                            alt={item.productName}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="flex-1">
                            <p className="font-medium text-gray-900">{item.productName}</p>
                            <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                          </div>
                          <p className="font-semibold text-amber-600">${item.price}</p>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t">
                      <span className="font-semibold text-gray-900">Total</span>
                      <span className="text-xl font-bold text-amber-600">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Reward Points */}
            {activeTab === 'rewards' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Reward Points</h2>
                <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-lg shadow-lg p-8 text-white">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-amber-100 mb-2">Your Points Balance</p>
                      <p className="text-5xl font-bold">{user.rewardPoints}</p>
                    </div>
                    <Award className="w-20 h-20 text-amber-200" />
                  </div>
                  <p className="text-amber-100">
                    Earn 10 points for every $1 spent. Redeem points for discounts on future purchases!
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">How to Earn Points</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                      <span className="text-gray-700">Complete a purchase</span>
                      <span className="font-semibold text-amber-600">10 pts per $1</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                      <span className="text-gray-700">Write a product review</span>
                      <span className="font-semibold text-amber-600">50 pts</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-amber-50 rounded-lg">
                      <span className="text-gray-700">Refer a friend</span>
                      <span className="font-semibold text-amber-600">100 pts</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Redeem Points</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">$5 Off Coupon</p>
                        <p className="text-sm text-gray-600">500 points required</p>
                      </div>
                      <button className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed">
                        Redeem
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">$10 Off Coupon</p>
                        <p className="text-sm text-gray-600">1000 points required</p>
                      </div>
                      <button
                        disabled
                        className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                      >
                        Redeem
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Profile */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">My Profile</h2>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{user.name}</h3>
                      <p className="text-gray-600">Customer since 2023</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium text-gray-900">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium text-gray-900">{user.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-amber-600 mt-1" />
                      <div>
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="font-medium text-gray-900">{user.address}</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 w-full px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                    Edit Profile
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
