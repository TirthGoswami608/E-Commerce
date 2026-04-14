import { useState } from 'react';
import { Search, Mail, Phone, MapPin } from 'lucide-react';
import { customers as initialCustomers } from '../../data/customers';

export const AdminCustomers = () => {
  const [customers] = useState(initialCustomers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState<typeof customers[0] | null>(null);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Customers Management</h1>
        <p className="text-gray-600 mt-1">View and manage customer information</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-1">Total Customers</p>
          <p className="text-3xl font-bold text-gray-900">{customers.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-1">Total Orders</p>
          <p className="text-3xl font-bold text-gray-900">
            {customers.reduce((sum, c) => sum + c.totalOrders, 0)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-1">Total Revenue</p>
          <p className="text-3xl font-bold text-gray-900">
            ${customers.reduce((sum, c) => sum + c.totalSpent, 0).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search customers by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
        />
      </div>

      {/* Customers Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Customer</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Contact</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Orders</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Total Spent</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Reward Points</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Join Date</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{customer.name}</p>
                        <p className="text-sm text-gray-600">{customer.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-sm text-gray-700">{customer.email}</p>
                    <p className="text-sm text-gray-600">{customer.phone}</p>
                  </td>
                  <td className="py-3 px-4 text-gray-700">{customer.totalOrders}</td>
                  <td className="py-3 px-4 font-semibold text-gray-900">
                    ${customer.totalSpent.toFixed(2)}
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">
                      {customer.rewardPoints} pts
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{customer.joinDate}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => setSelectedCustomer(customer)}
                      className="px-3 py-1 text-sm text-amber-600 hover:bg-amber-50 rounded transition-colors"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {selectedCustomer.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCustomer.name}</h2>
                    <p className="text-gray-600">{selectedCustomer.id}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Contact Info */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Mail className="w-5 h-5 text-amber-600" />
                      <span>{selectedCustomer.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <Phone className="w-5 h-5 text-amber-600" />
                      <span>{selectedCustomer.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-700">
                      <MapPin className="w-5 h-5 text-amber-600" />
                      <span>{selectedCustomer.address}</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Customer Stats</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 text-sm mb-1">Total Orders</p>
                      <p className="text-2xl font-bold text-gray-900">{selectedCustomer.totalOrders}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 text-sm mb-1">Total Spent</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${selectedCustomer.totalSpent.toFixed(2)}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 text-sm mb-1">Reward Points</p>
                      <p className="text-2xl font-bold text-amber-600">
                        {selectedCustomer.rewardPoints}
                      </p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-600 text-sm mb-1">Member Since</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {selectedCustomer.joinDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
