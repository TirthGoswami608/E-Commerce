import { useState } from 'react';
import { Search, Eye } from 'lucide-react';
import { orders as initialOrders, OrderStatus } from '../../data/orders';
import { toast } from 'sonner';

export const AdminOrders = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<typeof orders[0] | null>(null);

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.customerName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setOrders(
      orders.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order))
    );
    toast.success('Order status updated successfully!');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
        <p className="text-gray-600 mt-1">View and manage all customer orders</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search orders by ID or customer name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Order ID</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Customer</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Date</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Total</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{order.id}</td>
                  <td className="py-3 px-4">
                    <div>
                      <p className="font-medium text-gray-900">{order.customerName}</p>
                      <p className="text-sm text-gray-600">{order.customerEmail}</p>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{order.date}</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">${order.total.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value as OrderStatus)}
                      className={`px-3 py-1 rounded-full text-xs font-medium border-0 outline-none cursor-pointer ${
                        order.status === 'Delivered'
                          ? 'bg-green-100 text-green-700'
                          : order.status === 'Shipped'
                          ? 'bg-purple-100 text-purple-700'
                          : order.status === 'Processing'
                          ? 'bg-blue-100 text-blue-700'
                          : order.status === 'Cancelled'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="p-2 text-amber-600 hover:bg-amber-50 rounded transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Order Details</h2>
                  <p className="text-gray-600">Order #{selectedOrder.id}</p>
                </div>
                <button
                  onClick={() => setSelectedOrder(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Customer Info */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Customer Information</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                    <p className="text-gray-700">
                      <span className="font-medium">Name:</span> {selectedOrder.customerName}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Email:</span> {selectedOrder.customerEmail}
                    </p>
                    <p className="text-gray-700">
                      <span className="font-medium">Address:</span> {selectedOrder.shippingAddress}
                    </p>
                  </div>
                </div>

                {/* Order Items */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Order Items</h3>
                  <div className="space-y-3">
                    {selectedOrder.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                      >
                        <img
                          src={item.image}
                          alt={item.productName}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{item.productName}</p>
                          <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                        </div>
                        <p className="font-semibold text-gray-900">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Summary */}
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg">
                    <span className="font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-amber-600">
                      ${selectedOrder.total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Status */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Order Status</h3>
                  <select
                    value={selectedOrder.status}
                    onChange={(e) => {
                      handleStatusChange(selectedOrder.id, e.target.value as OrderStatus);
                      setSelectedOrder({ ...selectedOrder, status: e.target.value as OrderStatus });
                    }}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>

                {selectedOrder.trackingNumber && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tracking Number</h3>
                    <p className="text-amber-600 font-mono">{selectedOrder.trackingNumber}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
