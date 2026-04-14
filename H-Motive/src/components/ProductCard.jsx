import { useState } from "react";
import { COLORS } from '../constants/theme';

export default function ProductCard({ product, onAddToCart, navigate }) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div onClick={() => navigate("detail", product.id)}
      style={{ 
        background: "#fff", borderRadius: "24px", overflow: "hidden", 
        boxShadow: "0 10px 30px rgba(0,0,0,0.04)", border: `1px solid ${COLORS.gold}15`, 
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)", cursor: "pointer",
        position: "relative"
      }}
      onMouseEnter={e => { 
        e.currentTarget.style.transform = "translateY(-10px)"; 
        e.currentTarget.style.boxShadow = "0 30px 60px rgba(74,44,10,0.12)";
        e.currentTarget.style.borderColor = COLORS.gold;
      }}
      onMouseLeave={e => { 
        e.currentTarget.style.transform = "none"; 
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.04)";
        e.currentTarget.style.borderColor = `${COLORS.gold}15`;
      }}>
      
      {/* Product Image Area */}
      <div style={{ 
        background: `linear-gradient(135deg, ${product.color}40, #fff)`, 
        height: 220, display: "flex", alignItems: "center", justifyContent: "center", 
        fontSize: 100, position: "relative", overflow: "hidden" 
      }}>
        <div style={{ 
          position: "absolute", width: "100%", height: "100%", 
          background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)" 
        }} />
        <span style={{ zIndex: 1, transition: "transform 0.5s ease" }} className="card-emoji">{product.emoji}</span>
        {product.tag && (
          <span style={{ 
            position: "absolute", top: 16, right: 16, background: COLORS.gold, 
            color: "#fff", padding: "6px 14px", borderRadius: "100px", 
            fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "1px",
            zIndex: 2, boxShadow: "0 4px 12px rgba(192,127,36,0.3)"
          }}>{product.tag}</span>
        )}
      </div>

      {/* Info Area */}
      <div style={{ padding: "24px", textAlign: "left" }}>
        <div style={{ fontSize: 11, color: COLORS.green, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 8 }}>{product.category}</div>
        <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 18, color: COLORS.textDark, margin: "0 0 10px", fontWeight: 700 }}>{product.name}</h3>
        <p style={{ fontSize: 13, color: COLORS.textLight, margin: "0 0 20px", lineHeight: 1.5, height: 40, overflow: "hidden" }}>{product.desc}</p>
        
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <div style={{ fontSize: 22, fontWeight: 800, color: COLORS.brown }}>₹{product.price.toLocaleString()}</div>
          <button 
            onClick={(e) => { e.stopPropagation(); handleAdd(); }}
            style={{ 
              width: 44, height: 44, borderRadius: "14px", 
              background: added ? COLORS.green : `${COLORS.gold}10`,
              color: added ? "#fff" : COLORS.gold, border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, transition: "all 0.3s"
            }}
            onMouseEnter={e => { if(!added) e.target.style.background = `${COLORS.gold}20`; }}
            onMouseLeave={e => { if(!added) e.target.style.background = `${COLORS.gold}10`; }}>
            {added ? "✓" : "🛒"}
          </button>
        </div>
      </div>
    </div>
  );
}
