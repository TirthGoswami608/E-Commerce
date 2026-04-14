import { TrendingUp, Package, ShoppingBag, Users, DollarSign } from 'lucide-react';
import { orders } from '../../data/orders';
import { products } from '../../data/products';
import { customers } from '../../data/customers';

export const AdminDashboard = () => {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const totalProducts = products.length;
  const totalCustomers = customers.length;

  const recentOrders = orders.slice(-5).reverse();

  const stats = [
    {
      label: 'Total Revenue',
      value: `$${totalRevenue.toFixed(2)}`,
      icon: DollarSign,
      color: 'bg-green-500',
      change: '+12.5%',
    },
    {
      label: 'Total Orders',
      value: totalOrders,
      icon: ShoppingBag,
      color: 'bg-blue-500',
      change: '+8.2%',
    },
    {
      label: 'Products',
      value: totalProducts,
      icon: Package,
      color: 'bg-purple-500',
      change: '+3',
    },
    {
      label: 'Customers',
      value: totalCustomers,
      icon: Users,
      color: 'bg-amber-500',
      change: '+15%',
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's your business overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-600 text-sm font-medium flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {stat.change}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Order ID</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Customer</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Date</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Total</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{order.id}</td>
                  <td className="py-3 px-4 text-gray-700">{order.customerName}</td>
                  <td className="py-3 px-4 text-gray-600">{order.date}</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">${order.total.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Low Stock Alert */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Low Stock Products</h2>
        <div className="space-y-3">
          {products
            .filter((p) => p.stock < 20)
            .map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 bg-red-50 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.category}</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-red-200 text-red-800 rounded-full text-sm font-medium">
                  {product.stock} left
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
