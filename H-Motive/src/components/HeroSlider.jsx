import { useState, useEffect, useRef } from "react";
import { COLORS } from '../constants/theme';
import { slides } from '../constants/data';

export default function HeroSlider({ navigate }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef();

  const goTo = (idx) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 450);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent(c => (c + 1) % slides.length);
        setAnimating(false);
      }, 450);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  const slide = slides[current];

  return (
    <section style={{ 
      minHeight: "90vh", background: `linear-gradient(135deg, ${slide.bg}, #fff)`, 
      display: "flex", alignItems: "center", position: "relative", overflow: "hidden", 
      transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)", paddingTop: 80 
    }}>
      {/* Decorative Elements */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, borderRadius: "50%", background: `${slide.accent}08`, filter: "blur(80px)" }} />
      
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 5%", width: "100%", display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 60, alignItems: "center", minHeight: "75vh" }} className="hero-grid">
        {/* Content Side */}
        <div style={{ opacity: animating ? 0 : 1, transform: animating ? "translateY(20px)" : "none", transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.6)", backdropFilter: "blur(10px)", padding: "8px 16px", borderRadius: "100px", border: `1px solid ${slide.accent}20`, marginBottom: 24 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: slide.accent }} />
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: COLORS.textDark }}>{slide.badge}</span>
          </div>
          
          <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(36px, 6vw, 68px)", fontWeight: 700, color: COLORS.textDark, lineHeight: 1.1, margin: "0 0 20px" }}>{slide.title}</h1>
          <p style={{ color: COLORS.textMid, fontSize: 18, fontWeight: 500, margin: "0 0 16px" }}>{slide.subtitle}</p>
          <p style={{ color: COLORS.textLight, fontSize: 16, lineHeight: 1.8, margin: "0 0 44px", maxWidth: 500 }}>{slide.desc}</p>
          
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            <button onClick={() => navigate("shop")} style={{ background: `linear-gradient(135deg, ${slide.accent}, #4A2C0A)`, border: "none", borderRadius: "100px", padding: "18px 44px", color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: `0 12px 30px ${slide.accent}40`, transition: "all 0.3s" }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-4px)"; e.target.style.boxShadow = `0 18px 40px ${slide.accent}60`; }}
              onMouseLeave={e => { e.target.style.transform = "none"; e.target.style.boxShadow = `0 12px 30px ${slide.accent}40`; }}>
              {slide.cta} →
            </button>
            <button onClick={() => navigate("shop")} style={{ background: "none", border: "none", color: COLORS.textMid, fontSize: 14, fontWeight: 600, cursor: "pointer", borderBottom: `2px solid ${slide.accent}40` }}>Learn More</button>
          </div>
        </div>

        {/* Visual Side */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", opacity: animating ? 0 : 1, transform: animating ? "scale(0.9) rotate(-5deg)" : "none", transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)" }}>
          <div style={{ position: "relative", width: 420, height: 420, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", width: "110%", height: "110%", background: `radial-gradient(circle, ${slide.accent}15 0%, transparent 70%)`, borderRadius: "50%" }} />
            <div style={{ width: 380, height: 380, borderRadius: "50%", background: "#fff", boxShadow: "0 30px 100px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 160, zIndex: 1, border: `1px solid ${slide.accent}10` }}>
              {slide.emoji}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Indicators */}
      <div style={{ position: "absolute", bottom: 40, left: "5%", display: "flex", gap: 12 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{ width: i === current ? 40 : 10, height: 10, borderRadius: 5, background: i === current ? slide.accent : "rgba(0,0,0,0.1)", border: "none", cursor: "pointer", transition: "all 0.4s ease", padding: 0 }} />
        ))}
      </div>
    </section>
  );
}
