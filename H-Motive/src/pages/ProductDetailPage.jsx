import { useState } from "react";
import { COLORS as T } from "../constants/theme";
import { products, reviews as globalReviews } from "../constants/data";
import Stars from "../components/Stars";
import ProductCard from "../components/ProductCard";
import BtnP from "../components/BtnP";

export default function ProductDetailPage({ productId, navigate, onAdd }) {
  const p = products.find(x => x.id === productId) || products[0];
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("desc");
  const [added, setAdded] = useState(false);
  const related = products.filter(x => x.id !== p.id && x.category === p.category).slice(0, 4);

  const handleAdd = () => {
    onAdd();
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div style={{ paddingTop: 90, background: "#fff" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "40px 3% 100px" }}>
        
        {/* Breadcrumb */}
        <nav style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 48, fontSize: 13, fontWeight: 500, color: T.textLight }}>
          <button onClick={() => navigate("home")} style={{ background: "none", border: "none", cursor: "pointer", color: T.textLight, padding: 0, fontWeight: 600 }}>Home</button>
          <span style={{ opacity: 0.5 }}>/</span>
          <button onClick={() => navigate("shop")} style={{ background: "none", border: "none", cursor: "pointer", color: T.textLight, padding: 0, fontWeight: 600 }}>Store</button>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ color: T.brown }}>{p.name}</span>
        </nav>

        {/* Main Product Showcase */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginBottom: 100 }} className="hero-grid">
          {/* Visual Side */}
          <div style={{ position: "sticky", top: 120 }}>
            <div style={{ 
              background: `linear-gradient(135deg, ${T.goldPale}60, #fff)`, 
              borderRadius: "40px", padding: "80px", display: "flex", alignItems: "center", 
              justifyContent: "center", border: `1px solid ${T.border}`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.03)"
            }} className="scale-in">
              <div style={{ 
                fontSize: 220, lineHeight: 1, filter: "drop-shadow(0 20px 40px rgba(74,44,10,0.15))",
                transition: "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)", cursor: "zoom-in" 
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1) rotate(5deg)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                {p.emoji}
              </div>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginTop: 24 }}>
              {[
                ["🌿", "Certified Organic", T.greenPale, T.green],
                ["🔬", "Purity Tested", "#F5F0FF", "#6B4AC2"],
                ["♻️", "Eco Packaging", "#FFF5F0", "#C26B4A"]
              ].map(([icon, label, bg, col]) => (
                <div key={label} style={{ 
                  background: bg, borderRadius: "20px", padding: "20px 12px", 
                  textAlign: "center", border: `1px solid ${col}15` 
                }}>
                  <div style={{ fontSize: 24, marginBottom: 8 }}>{icon}</div>
                  <div style={{ fontSize: 11, color: col, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Side */}
          <div className="fade-in">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
              <div style={{ fontSize: 12, color: T.green, fontWeight: 800, letterSpacing: "2.5px", textTransform: "uppercase" }}>{p.category}</div>
              {p.tag && <span style={{ background: T.gold, color: "#fff", borderRadius: "100px", padding: "6px 16px", fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px" }}>{p.tag}</span>}
            </div>
            
            <h1 style={{ 
              fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(32px, 4vw, 56px)", 
              fontWeight: 700, color: T.brown, lineHeight: 1.1, marginBottom: 16 
            }}>{p.name}</h1>
            
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <Stars rating={Math.round(p.rating)} size={18} />
                <span style={{ fontSize: 16, fontWeight: 700, color: T.brown, marginLeft: 8 }}>{p.rating}</span>
              </div>
              <div style={{ width: 1, height: 20, background: T.border }} />
              <span style={{ fontSize: 14, color: T.textLight, fontWeight: 500 }}>{p.reviews} verified reviews</span>
            </div>
            
            <div style={{ 
              fontSize: 42, fontWeight: 800, color: T.brown, 
              marginBottom: 32, display: "flex", alignItems: "baseline", gap: 8 
            }}>
              <span style={{ fontSize: 24, fontWeight: 600 }}>₹</span>
              {p.price.toLocaleString()}
            </div>
            
            <p style={{ fontSize: 17, color: T.textMid, lineHeight: 1.8, marginBottom: 40, borderLeft: `4px solid ${T.gold}20`, paddingLeft: 20 }}>
              {p.desc}
            </p>

            <div style={{ background: T.ivory, borderRadius: "24px", padding: "32px", border: `1px solid ${T.border}`, marginBottom: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 32 }}>
                <div style={{ fontSize: 14, color: T.brown, fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>Quantity</div>
                <div style={{ display: "flex", alignItems: "center", background: "#fff", borderRadius: "100px", padding: "4px", border: `1px solid ${T.border}`, boxShadow: "0 4px 10px rgba(0,0,0,0.03)" }}>
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: 44, height: 44, borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer", fontSize: 20, color: T.brown, fontWeight: 700 }}>−</button>
                  <span style={{ minWidth: 44, textAlign: "center", fontSize: 18, fontWeight: 700, color: T.brown }}>{qty}</span>
                  <button onClick={() => setQty(q => Math.min(10, q + 1))} style={{ width: 44, height: 44, borderRadius: "50%", background: "transparent", border: "none", cursor: "pointer", fontSize: 20, color: T.brown, fontWeight: 700 }}>+</button>
                </div>
                <div style={{ flex: 1, textAlign: "right" }}>
                  <span style={{ fontSize: 13, color: T.textLight, display: "block", marginBottom: 4 }}>Subtotal</span>
                  <span style={{ fontSize: 20, fontWeight: 800, color: T.brown }}>₹{(p.price * qty).toLocaleString()}</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: 16 }}>
                <button 
                  onClick={handleAdd}
                  style={{ 
                    flex: 1, background: added ? T.green : `linear-gradient(135deg, ${T.gold}, ${T.brownMid})`, 
                    color: "#fff", border: "none", borderRadius: "100px", padding: "20px", 
                    fontSize: 16, fontWeight: 700, cursor: "pointer", transition: "all 0.4s",
                    boxShadow: `0 10px 25px ${added ? T.green : T.gold}40` 
                  }}
                  onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = `0 15px 30px ${added ? T.green : T.gold}50`; }}
                  onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = `0 10px 25px ${added ? T.green : T.gold}40`; }}>
                  {added ? "✓ Successfully Added!" : "Add to Cart  — ₹" + (p.price * qty).toLocaleString()}
                </button>
                <button style={{ 
                  width: 60, height: 60, borderRadius: "50%", border: `1px solid ${T.border}`, 
                  background: "#fff", cursor: "pointer", fontSize: 22, color: T.brown, transition: "all 0.3s" 
                }}
                onMouseEnter={e => { e.target.style.borderColor = T.gold; e.target.style.color = T.gold; }}
                onMouseLeave={e => { e.target.style.borderColor = T.border; e.target.style.color = T.brown; }}>
                  ♡
                </button>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                ["🚚", "Free express delivery"],
                ["↩️", "7-Day hassle-free returns"],
                ["🔒", "100% Secure checkout"],
                ["🏆", "Authentic guaranteed"]
              ].map(([icon, text]) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: T.textLight, fontWeight: 500 }}>
                  <span style={{ fontSize: 18 }}>{icon}</span> {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div style={{ marginBottom: 120 }}>
          <div style={{ display: "flex", borderBottom: `2px solid ${T.border}`, marginBottom: 48, gap: 40 }}>
            {[["desc", "Description"], ["benefits", "Health Benefits"], ["ingr", "Ingredients"]].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)}
                style={{ 
                  background: "none", border: "none", cursor: "pointer", padding: "16px 0", 
                  fontSize: 16, fontWeight: 700, color: tab === key ? T.brown : T.textLight, 
                  borderBottom: tab === key ? `4px solid ${T.gold}` : "4px solid transparent", 
                  marginBottom: -2, transition: "all 0.3s", opacity: tab === key ? 1 : 0.6
                }}>
                {label}
              </button>
            ))}
          </div>
          
          <div className="fade-in" style={{ animationDuration: "0.5s" }}>
            {tab === "desc" && <p style={{ fontSize: 18, color: T.textMid, lineHeight: 1.9, maxWidth: 800 }}>{p.fullDesc}</p>}
            {tab === "benefits" && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
                {p.benefits.map((b, i) => (
                  <div key={i} style={{ 
                    display: "flex", alignItems: "flex-start", gap: 16, background: T.ivory, 
                    borderRadius: "20px", padding: "28px", border: `1px solid ${T.border}` 
                  }}>
                    <div style={{ 
                      width: 40, height: 40, borderRadius: "12px", background: T.greenPale, 
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 
                    }}>✅</div>
                    <span style={{ fontSize: 16, color: T.textDark, fontWeight: 600, lineHeight: 1.5 }}>{b}</span>
                  </div>
                ))}
              </div>
            )}
            {tab === "ingr" && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                {p.ingredients.map((ing, i) => (
                  <span key={i} style={{ 
                    background: `${T.gold}10`, color: T.brown, borderRadius: "100px", 
                    padding: "12px 24px", fontSize: 15, fontWeight: 700, border: `1px solid ${T.gold}20`
                  }}>🌿 {ing}</span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="fade-in">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 48 }}>
              <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 32, color: T.brown, fontWeight: 700, margin: 0 }}>Discover More</h2>
              <button onClick={() => navigate("shop")} style={{ background: "none", border: "none", color: T.gold, fontWeight: 700, cursor: "pointer", fontSize: 15 }}>View Collection →</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              {related.map(rp => <ProductCard key={rp.id} product={rp} onAddToCart={onAdd} navigate={navigate} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
