import { useState } from "react";
import { COLORS } from './constants/theme';
import { products, categories, benefits, reviews } from './constants/data';
import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProductCard from './components/ProductCard';
import ReviewCard from './components/ReviewCard';

// Page Imports
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import CheckoutPage from "./pages/CheckoutPage";
import DashboardPage from "./pages/DashboardPage";
import OrdersPage from "./pages/OrdersPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";

export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);
  const [productId, setProductId] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const navigate = (p, id = null) => {
    setPage(p);
    if (id) setProductId(id);
    window.scrollTo(0, 0);
  };

  const onAddToCart = () => setCartCount(c => c + 1);

  const featured = products.slice(0, 4);
  const exploreRange = products.slice(4, 8);

  const renderPage = () => {
    switch (page) {
      case "login": return <LoginPage navigate={navigate} onLogin={setUser} />;
      case "signup": return <SignupPage navigate={navigate} onLogin={setUser} />;
      case "cart": return <CartPage navigate={navigate} />;
      case "checkout": return <CheckoutPage navigate={navigate} />;
      case "dashboard": return <DashboardPage navigate={navigate} user={user} onLogout={() => setUser(null)} />;
      case "orders": return <OrdersPage navigate={navigate} />;
      case "about": return <AboutPage navigate={navigate} />;
      case "contact": return <ContactPage navigate={navigate} />;
      case "shop": return <ShopPage navigate={navigate} onAdd={onAddToCart} />;
      case "detail": return <ProductDetailPage productId={productId} navigate={navigate} onAdd={onAddToCart} />;
      case "home":
      default: return (
        <>
          <HeroSlider navigate={navigate} />

          {/* Featured Products */}
          <section style={{ padding: "100px 3%", background: COLORS.cream }}>
            <div style={{ maxWidth: 1600, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <span style={{ display: "inline-block", color: COLORS.green, fontSize: 12, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 12 }}>Hand-picked for you</span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(30px, 4vw, 48px)", color: COLORS.textDark, margin: "0 0 16px", fontWeight: 800 }}>Featured Products</h2>
                <p style={{ color: COLORS.textLight, fontSize: 16, maxWidth: 480, margin: "0 auto" }}>Our most-loved organic products, chosen for exceptional quality and proven results.</p>
              </div>
              <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
                {featured.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} navigate={navigate} />)}
              </div>
            </div>
          </section>

          {/* All Products Preview / Explore the Range */}
          <section style={{ padding: "100px 3%", background: "#fff" }}>
            <div style={{ maxWidth: 1600, margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 24 }}>
                <div>
                  <span style={{ display: "inline-block", color: COLORS.green, fontSize: 12, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 12 }}>Explore the range</span>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: COLORS.textDark, margin: 0, fontWeight: 800 }}>Our Products</h2>
                </div>
                <button onClick={() => navigate("shop")} style={{ background: "transparent", border: `2px solid ${COLORS.gold}`, color: COLORS.brown, borderRadius: 30, padding: "12px 28px", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.25s" }}>
                  View All Products →
                </button>
              </div>

              <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, marginBottom: 48 }}>
                {exploreRange.map(p => <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} navigate={navigate} />)}
              </div>

              <div style={{ textAlign: "center" }}>
                <button onClick={() => navigate("shop")} style={{ background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.brownLight})`, border: "none", color: "#fff", borderRadius: 30, padding: "16px 40px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: `0 4px 15px ${COLORS.gold}40`, transition: "all 0.25s" }}>
                  Browse Full Shop →
                </button>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section style={{ padding: "100px 3%", background: `linear-gradient(135deg, ${COLORS.brown} 0%, #3A2211 100%)`, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: `${COLORS.gold}10`, pointerEvents: "none" }} />
            <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative" }}>
              <div style={{ textAlign: "center", marginBottom: 64 }}>
                <span style={{ display: "inline-block", color: COLORS.goldLight, fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Why Choose Us</span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: "#fff", margin: 0, fontWeight: 800 }}>The Organic Promise</h2>
              </div>
              <div className="benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
                {benefits.map((b, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.06)", borderRadius: 24, padding: "40px 32px", border: `1px solid rgba(255,255,255,0.1)`, backdropFilter: "blur(10px)", transition: "all 0.3s" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "none"; }}>
                    <div style={{ fontSize: 42, marginBottom: 20 }}>{b.icon}</div>
                    <h3 style={{ color: COLORS.goldLight, fontFamily: "'Playfair Display', Georgia, serif", fontSize: 22, margin: "0 0 12px", fontWeight: 700 }}>{b.title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 15, lineHeight: 1.8, margin: 0 }}>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section style={{ padding: "100px 3%", background: COLORS.cream }}>
            <div style={{ maxWidth: 1600, margin: "0 auto" }}>
              <div style={{ textAlign: "center", marginBottom: 56 }}>
                <span style={{ display: "inline-block", color: COLORS.green, fontSize: 12, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 12 }}>Testimonials</span>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", color: COLORS.textDark, margin: "0 0 16px", fontWeight: 800 }}>What Our Customers Say</h2>
                <div style={{ display: "flex", gap: 4, justifyContent: "center", alignItems: "center" }}>
                  <span style={{ color: COLORS.gold, fontSize: 18 }}>★★★★★</span>
                  <span style={{ color: COLORS.textMid, fontSize: 14, fontWeight: 600, marginLeft: 6 }}>4.9 average · 2,400+ verified reviews</span>
                </div>
              </div>
              <div className="reviews-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
                {reviews.slice(0, 3).map((r, i) => <ReviewCard key={i} review={r} />)}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 32 }}>
                {reviews.slice(3).map((r, i) => <ReviewCard key={i} review={r} />)}
              </div>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div style={{ fontFamily: "'Nunito', -apple-system, sans-serif", background: COLORS.white, color: COLORS.textDark, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:wght@400;500;600;700;800&display=swap');
        
        :root {
          --transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * { 
          box-sizing: border-box; 
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html { scroll-behavior: smooth; }
        
        body { 
          margin: 0; 
          font-family: 'Montserrat', sans-serif;
          color: ${COLORS.textDark};
          line-height: 1.6;
        }

        button, a {
          transition: var(--transition);
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .fade-in { animation: fadeIn 0.8s ease-out forwards; }
        .scale-in { animation: scaleIn 0.5s ease-out forwards; }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .products-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .benefits-grid { grid-template-columns: repeat(1, 1fr) !important; }
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 10px; }
        ::-webkit-scrollbar-track { background: ${COLORS.ivory}; }
        ::-webkit-scrollbar-thumb { 
          background: ${COLORS.gold}; 
          border-radius: 10px;
          border: 3px solid ${COLORS.ivory};
        }
        ::-webkit-scrollbar-thumb:hover { background: ${COLORS.brownMid}; }
      `}</style>

      <Navbar cartCount={cartCount} navigate={navigate} user={user} />

      {renderPage()}

      {/* Footer */}
      <footer style={{ background: COLORS.textDark, color: "#fff", padding: "100px 3% 40px" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1.2fr", gap: 80, marginBottom: 80 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: "14px", background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.brownLight})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🍯</div>
                <span style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 26, fontWeight: 700, letterSpacing: "-0.5px" }}>H-Motive</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 16, lineHeight: 1.8, margin: "0 0 32px", maxWidth: 360 }}>
                Bringing you the finest organic products from nature's lap. Every product we offer is a promise of purity, potency, and care.
              </p>
              <div style={{ display: "flex", gap: 16 }}>
                {["📘", "📸", "🐦", "▶️"].map((icon, i) => (
                  <button key={i} style={{ width: 44, height: 44, borderRadius: "50%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 18, transition: "all 0.3s" }}
                    onMouseEnter={e => e.currentTarget.style.background = COLORS.gold}
                    onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.06)"}>
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {[
              { title: "Navigation", links: [["Home", "home"], ["Shop", "shop"], ["About Us", "about"], ["Contact", "contact"]] },
              { title: "Our Store", links: ["Wild Honey", "Herbal Herbs", "Virgin Oils", "Superfoods", "Premium Kits"] },
              { title: "Get in Touch", links: ["📍 Ahmedabad, India", "📞 +91 99999 00000", "✉️ hello@hmotive.org", "⏰ Mon–Sat, 9AM–7PM"] },
            ].map((col, i) => (
              <div key={i}>
                <h4 style={{ color: COLORS.white, fontSize: 18, margin: "0 0 24px", fontWeight: 700 }}>{col.title}</h4>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {col.links.map(link => (
                    <li key={Array.isArray(link) ? link[0] : link}>
                      <button
                        onClick={() => Array.isArray(link) && navigate(link[1])}
                        style={{ background: "none", border: "none", cursor: "pointer", padding: 0, textAlign: "left", color: "rgba(255,255,255,0.5)", fontSize: 14, textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => e.target.style.color = COLORS.gold}
                        onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.5)"}>
                        {Array.isArray(link) ? link[0] : link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: 0 }}>© 2026 H-Motive. Created with love for organic living.</p>
            <div style={{ display: "flex", gap: 24, alignItems: "center", opacity: 0.6 }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png" alt="Visa" style={{ height: 16 }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" style={{ height: 24 }} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" alt="Paypal" style={{ height: 22 }} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
