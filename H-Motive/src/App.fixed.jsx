import React, { useEffect, useState } from "react";
import HeroSlider from './components/HeroSlider';
import Navbar from './components/layout/Navbar';
import ProductCard from './components/product/ProductCard';
import { products } from './constants/data';
import { COLORS } from './constants/theme';

import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import RedeemPage from "./pages/RedeemPage";
import ShopPage from "./pages/ShopPage";
import SignupPage from "./pages/SignupPage";

export default function App() {
  const [page, setPage] = useState(() => (localStorage.getItem("hm_user") ? "dashboard" : "home"));
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("hm_user") || "null"));
  const [productId, setProductId] = useState(null);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("hm_cart") || "[]"));
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem("hm_wishlist") || "[]"));
  const [toast, setToast] = useState(null);

  useEffect(() => { localStorage.setItem("hm_cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("hm_user", JSON.stringify(user)); }, [user]);
  useEffect(() => { localStorage.setItem("hm_wishlist", JSON.stringify(wishlist)); }, [wishlist]);

  const navigate = (p, id = null) => { setPage(p); if (id) setProductId(id); window.scrollTo(0, 0); };
  const showToast = (msg) => { setToast(msg); setTimeout(() => setToast(null), 3000); };

  const onAddToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + qty } : i);
      return [...prev, { ...product, qty }];
    });
    showToast(`${qty} ${product.name}${qty > 1 ? 's' : ''} added to cart!`);
  };

  const onUpdateQty = (id, delta) => setCart(prev => prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  const onRemoveFromCart = id => setCart(prev => prev.filter(i => i.id !== id));
  const onClearCart = () => setCart([]);
  const onToggleWishlist = product => setWishlist(prev => prev.find(i => i.id === product.id) ? prev.filter(i => i.id !== product.id) : [...prev, product]);
  const onLogin = userData => { setUser(userData); navigate("dashboard"); };
  const onLogout = () => { setUser(null); navigate("home"); };

  const featured = products.slice(0, 4);

  const renderPage = () => {
    switch (page) {
      case "login": return <LoginPage navigate={navigate} onLogin={onLogin} />;
      case "signup": return <SignupPage navigate={navigate} onLogin={onLogin} />;
      case "cart": return <CartPage navigate={navigate} cart={cart} onUpdateQty={onUpdateQty} onRemove={onRemoveFromCart} />;
      case "checkout": return <CheckoutPage navigate={navigate} cart={cart} onClearCart={onClearCart} />;
      case "dashboard": return <DashboardPage navigate={navigate} user={user} onLogout={onLogout} wishlist={wishlist} />;
      case "orders": return <OrdersPage navigate={navigate} user={user} />;
      case "about": return <AboutPage navigate={navigate} />;
      case "contact": return <ContactPage navigate={navigate} />;
      case "shop": return <ShopPage navigate={navigate} onAdd={onAddToCart} wishlist={wishlist} onToggleWishlist={onToggleWishlist} />;
      case "detail": return <ProductDetailPage productId={productId} navigate={navigate} onAdd={onAddToCart} wishlist={wishlist} onToggleWishlist={onToggleWishlist} />;
      case "redeem": return <RedeemPage navigate={navigate} />;
      case "admin": return <AdminPage navigate={navigate} />;
      case "home":
      default:
        return (
          <>
            <HeroSlider navigate={navigate} />
            <section style={{ padding: "80px 3%", background: COLORS.cream }}>
              <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: COLORS.textDark }}>Featured Products</h2>
                <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
                  {featured.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} navigate={navigate} />)}
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  const totalCartCount = cart.reduce((acc, item) => acc + (item.qty || 0), 0);

  return (
    <div>
      {page !== "admin" && <Navbar cartCount={totalCartCount} navigate={navigate} user={user} />}
      {toast && <div className="toast">{toast}</div>}
      {renderPage()}
    </div>
  );
}
