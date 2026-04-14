import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { AdminLayout } from './components/AdminLayout';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { UserDashboardPage } from './pages/UserDashboardPage';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { ManageProducts } from './pages/admin/ManageProducts';
import { AdminOrders } from './pages/admin/AdminOrders';
import { AdminCustomers } from './pages/admin/AdminCustomers';
import { AdminRewards } from './pages/admin/AdminRewards';
import { AdminSettings } from './pages/admin/AdminSettings';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:id', element: <ProductDetailPage /> },
      { path: 'cart', element: <CartPage /> },
      { path: 'orders', element: <OrderTrackingPage /> },
      { path: 'dashboard', element: <UserDashboardPage /> },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: 'products', element: <ManageProducts /> },
      { path: 'orders', element: <AdminOrders /> },
      { path: 'customers', element: <AdminCustomers /> },
      { path: 'rewards', element: <AdminRewards /> },
      { path: 'settings', element: <AdminSettings /> },
    ],
  },
]);
