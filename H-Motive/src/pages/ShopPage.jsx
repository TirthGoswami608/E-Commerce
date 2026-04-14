import { useState } from "react";
import { COLORS as T } from "../constants/theme";
import { products, categories } from "../constants/data";
import ProductCard from "../components/ProductCard";
import SectionCard from "../components/SectionCard";

export default function ShopPage({ navigate, onAdd }) {
  const [cat, setCat] = useState("All");
  const [price, setPrice] = useState(5000);
  const [sort, setSort] = useState("default");
  const [visible, setVisible] = useState(9);

  const filtered = products
    .filter(p => (cat === "All" || p.category === cat) && p.price <= price)
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <div style={{ paddingTop: 70 }}>
      {/* Header */}
      <div style={{ background: `linear-gradient(135deg,${T.ivory},${T.goldPale})`, padding: "80px 3% 60px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: T.green, display: "block", marginBottom: 12 }}>Handcrafted Selection</span>
          <h1 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: "clamp(32px,5vw,56px)", fontWeight: 700, color: T.brown, marginBottom: 16, lineHeight: 1.1 }}>Our Organic Collection</h1>
          <p style={{ fontSize: 17, color: T.textLight, maxWidth: 520, lineHeight: 1.8 }}>Curated with care from small-scale sustainable farms, bringing you nature's purest harvest in its rawest form.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "60px 3% 100px", display: "grid", gridTemplateColumns: "320px 1fr", gap: 60, alignItems: "start" }}>
        {/* Sidebar - Fixed/Sticky on the left */}
        <aside style={{ position: "sticky", top: 120, maxHeight: "calc(100vh - 140px)", overflowY: "auto", paddingRight: 10 }} className="custom-scrollbar">
          <div style={{ background: "#fff", borderRadius: "24px", padding: "32px", border: `1px solid ${T.border}`, boxShadow: "0 10px 40px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
              <span style={{ fontSize: 20 }}>🏷️</span>
              <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, fontWeight: 700, color: T.brown, margin: 0 }}>Discover</h3>
            </div>
            
            <div style={{ marginBottom: 40 }}>
              <div style={{ fontSize: 11, color: T.green, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>Categories</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {categories.map(c => (
                  <button key={c} onClick={() => { setCat(c); setVisible(9); }}
                    style={{ 
                      display: "block", width: "100%", textAlign: "left", 
                      background: cat === c ? `${T.gold}10` : "transparent", 
                      color: cat === c ? T.gold : T.textMid, border: "none", 
                      borderRadius: "12px", padding: "12px 16px", fontSize: 15, 
                      fontWeight: cat === c ? 700 : 500, cursor: "pointer", 
                      transition: "all .3s", borderLeft: cat === c ? `3px solid ${T.gold}` : "3px solid transparent" 
                    }}
                    onMouseEnter={e => { if(cat !== c) e.target.style.background = "#F9F6F2"; }}
                    onMouseLeave={e => { if(cat !== c) e.target.style.background = "transparent"; }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 40 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                <div style={{ fontSize: 11, color: T.green, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>Price Range</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.brown }}>₹{price}</div>
              </div>
              <input type="range" min={500} max={5000} step={100} value={price} onChange={e => { setPrice(+e.target.value); setVisible(9); }} 
                style={{ width: "100%", accentColor: T.gold, cursor: "pointer", height: 6, borderRadius: 3 }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: T.textLight, marginTop: 12, fontWeight: 600 }}>
                <span>₹500</span>
                <span>₹5000+</span>
              </div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontSize: 11, color: T.green, fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>Sort By</div>
              <select value={sort} onChange={e => setSort(e.target.value)}
                style={{ width: "100%", padding: "14px", borderRadius: "14px", border: `1.5px solid ${T.border}`, background: "#fff", color: T.textMid, fontSize: 14, fontWeight: 600, cursor: "pointer", outline: "none", transition: "all 0.3s" }}
                onFocus={e => e.target.style.borderColor = T.gold}>
                <option value="default">Newest First</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="rating">Most Popular</option>
              </select>
            </div>

            <button onClick={() => { setCat("All"); setPrice(5000); setSort("default"); }} 
              style={{ width: "100%", padding: "12px", background: "none", border: `1px dashed ${T.border}`, borderRadius: "12px", color: T.textLight, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.3s" }}
              onMouseEnter={e => { e.target.style.color = T.brown; e.target.style.borderColor = T.brown; }}>
              Reset Filters
            </button>
          </div>
          
          <div style={{ marginTop: 20, background: `linear-gradient(135deg, ${T.gold}, ${T.brownMid})`, borderRadius: "20px", padding: "24px", textAlign: "center", color: "#fff", boxShadow: `0 10px 20px ${T.gold}20` }}>
            <div style={{ fontSize: 13, opacity: 0.8, marginBottom: 8, fontWeight: 600 }}>Showing</div>
            <div style={{ fontSize: 32, fontWeight: 800, marginBottom: 4 }}>{Math.min(visible, filtered.length)}</div>
            <div style={{ fontSize: 12, opacity: 0.9, fontWeight: 500 }}>of {filtered.length} products</div>
          </div>
        </aside>

        {/* Content */}
        <div>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>🔍</div>
              <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, color: T.brown, marginBottom: 10 }}>No Products Found</h3>
              <p style={{ color: T.textMid }}>Try adjusting your filters or search criteria.</p>
              <button onClick={() => { setCat("All"); setPrice(5000); setSort("default"); }} style={{ marginTop: 20, color: T.gold, background: "none", border: "none", fontWeight: 700, cursor: "pointer", textDecoration: "underline" }}>Clear All Filters</button>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 32, marginBottom: 60 }}>
                {filtered.slice(0, visible).map(p => <ProductCard key={p.id} product={p} onAddToCart={onAdd} navigate={navigate} />)}
              </div>
              
              {visible < filtered.length && (
                <div style={{ textAlign: "center" }}>
                  <button onClick={() => setVisible(v => v + 3)}
                    style={{ background: "transparent", border: `2px solid ${T.gold}`, color: T.brown, borderRadius: 30, padding: "13px 40px", fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all .25s" }}
                    onMouseEnter={e => { e.target.style.background = T.gold; e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.background = "transparent"; e.target.style.color = T.brown; }}>
                    Load More Products ↓
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
