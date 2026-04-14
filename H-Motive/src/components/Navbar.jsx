import { useState, useEffect } from "react";
import { COLORS as T } from '../constants/theme';

export default function Navbar({ cartCount, navigate, user }) {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);
      
      if (currentScroll <= 0) {
        setVisible(true);
      } else if (currentScroll > lastScroll && currentScroll > 100) {
        setVisible(false);
      } else if (currentScroll < lastScroll) {
        setVisible(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const linkStyle = (target) => ({
    background: "none",
    border: "none",
    cursor: "pointer",
    color: T.brown,
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    padding: "8px 12px",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    position: "relative",
    opacity: 0.85,
  });

  return (
    <nav style={{
      position: "fixed", top: visible ? 0 : -80, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(255, 255, 255, 0.85)" : "transparent",
      backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
      borderBottom: scrolled ? `1px solid ${T.border}` : "none",
      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      padding: "0 3%",
      height: scrolled ? 70 : 100,
      display: "flex",
      alignItems: "center"
    }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }} onClick={() => navigate("home")}>
          <div style={{ 
            width: 42, height: 42, borderRadius: "14px", 
            background: `linear-gradient(135deg, ${T.gold}, ${T.brownMid})`, 
            display: "flex", alignItems: "center", justifyContent: "center", 
            fontSize: 22, boxShadow: `0 8px 20px ${T.gold}30` 
          }}>🍯</div>
          <span style={{ 
            fontFamily: "'Libre Baskerville', serif", fontSize: 24, fontWeight: 700, 
            color: T.brown, letterSpacing: "-0.5px" 
          }}>H-Motive</span>
        </div>

        {/* Links */}
        <ul style={{ display: "flex", gap: 8, listStyle: "none", margin: 0, padding: 0, alignItems: "center" }} className="nav-links">
          {[["Home", "home"], ["Shop", "shop"], ["About", "about"], ["Contact", "contact"]].map(([item, target]) => (
            <li key={item}>
              <button
                onClick={() => navigate(target)}
                style={linkStyle(target)}
                onMouseEnter={e => {
                  e.target.style.opacity = 1;
                  e.target.style.color = T.gold;
                }}
                onMouseLeave={e => {
                  e.target.style.opacity = 0.85;
                  e.target.style.color = T.brown;
                }}>
                {item}
                <span className="nav-underline" style={{
                  position: "absolute", bottom: 0, left: "50%", width: 0, height: 2,
                  background: T.gold, transition: "all 0.3s ease", transform: "translateX(-50%)"
                }} />
              </button>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <button onClick={() => navigate("cart")} style={{ 
            position: "relative", background: "rgba(74, 44, 10, 0.04)", 
            border: "none", cursor: "pointer", fontSize: 22, 
            padding: "10px", borderRadius: "12px", transition: "all 0.2s"
          }}
            onMouseEnter={e => e.target.style.background = "rgba(74, 44, 10, 0.08)"}
            onMouseLeave={e => e.target.style.background = "rgba(74, 44, 10, 0.04)"}>
            🛒
            {cartCount > 0 && (
              <span style={{ 
                position: "absolute", top: -4, right: -4, 
                background: T.green, color: "#fff", borderRadius: "50%", 
                width: 20, height: 20, fontSize: 11, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 10px rgba(58, 107, 69, 0.3)"
              }}>{cartCount}</span>
            )}
          </button>
          
          <button
            onClick={() => navigate(user ? "dashboard" : "login")}
            style={{ 
              background: `linear-gradient(135deg, ${T.gold}, ${T.brownMid})`, 
              border: "none", borderRadius: "14px", padding: "12px 28px", 
              color: "#fff", fontWeight: 700, fontSize: 14, cursor: "pointer", 
              letterSpacing: "0.5px", transition: "all 0.3s", 
              boxShadow: `0 10px 25px ${T.gold}40` 
            }}
            onMouseEnter={e => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = `0 15px 30px ${T.gold}50`;
            }}
            onMouseLeave={e => {
              e.target.style.transform = "none";
              e.target.style.boxShadow = `0 10px 25px ${T.gold}40`;
            }}>
            {user ? "My Account" : "Sign In"}
          </button>
        </div>
      </div>
    </nav>
  );
}
