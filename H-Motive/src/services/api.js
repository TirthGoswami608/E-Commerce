const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Products
  getProducts: async () => {
    const response = await fetch(`${API_BASE_URL}/products`);
    return response.json();
  },

  getProduct: async (id) => {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    return response.json();
  },

  // Orders
  getOrders: async () => {
    const response = await fetch(`${API_BASE_URL}/orders`);
    return response.json();
  },

  // Add more API endpoints as needed
};
