const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const defaultHeaders = {
  "Content-Type": "application/json",
};

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

  getCategories: async () => {
    const response = await fetch(`${API_BASE_URL}/categories`);
    const data = await response.json();
    return data?.data || [];
  },

  // Orders
  getOrders: async () => {
    const response = await fetch(`${API_BASE_URL}/orders`);
    return response.json();
  },

  // Auth
  register: async (payload) => {
    return fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(payload),
    });
  },

  login: async (payload) => {
    return fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(payload),
    });
  },
};
