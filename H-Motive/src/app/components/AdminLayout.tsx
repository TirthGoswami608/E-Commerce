import { Outlet, Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  Award,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

export const AdminLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { path: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/products', label: 'Manage Products', icon: Package },
    { path: '/admin/orders', label: 'Orders', icon: ShoppingBag },
    { path: '/admin/customers', label: 'Customers', icon: Users },
    { path: '/admin/rewards', label: 'Reward Points', icon: Award },
    { path: '/admin/settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-amber-900 text-white transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-amber-800">
            <Link to="/admin" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍯</span>
              </div>
              <span className="text-xl font-bold text-white">Admin Panel</span>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-amber-800 text-white'
                      : 'text-amber-100 hover:bg-amber-800'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Back to Store */}
          <div className="p-4 border-t border-amber-800">
            <Link
              to="/"
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-amber-800 hover:bg-amber-700 rounded-lg transition-colors"
            >
              <span>Back to Store</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="bg-white shadow-sm sticky top-0 z-30">
          <div className="flex items-center justify-between px-4 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center space-x-4 ml-auto">
              <span className="text-gray-700">Admin User</span>
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
