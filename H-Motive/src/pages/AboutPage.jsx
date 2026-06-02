import { COLORS as T } from "../constants/theme";
import { TEAM } from "../constants/data";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: 90 }}>
      {/* Hero */}
      <div style={{ background: `linear-gradient(145deg,${T.brown} 0%,#2E1A07 100%)`, padding: "100px 3% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-15%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "rgba(192,127,36,.08)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <span style={{ display: "inline-block", color: T.goldLight, fontSize: 11, fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 14 }}>Our Story</span>
          <h1 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: "clamp(34px,6vw,64px)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 18 }}>Rooted in Nature,<br />Built for You</h1>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.7)", maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.75 }}>H-Motive was born from a single, stubborn belief: the purest wellness products don't need chemicals, shortcuts, or compromises.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, maxWidth: 800, margin: "0 auto" }}>
            {[["2018", "Founded"], ["12+", "States Sourced"], ["2,400+", "Happy Customers"], ["100%", "Certified Organic"]].map(([v, l]) => (
              <div key={l} style={{ textAlign: "center", padding: "24px 16px", background: "rgba(255,255,255,0.07)", borderRadius: T.r, border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: T.goldLight, marginBottom: 4 }}>{v}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", letterSpacing: ".5px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mission & Vision */}
      <section style={{ padding: "100px 3%" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: T.green, marginBottom: 8 }}>Our Purpose</span>
            <h2 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: "clamp(26px,4vw,42px)", fontWeight: 700, color: T.brown }}>Mission & Vision</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }}>
            {[
              { bg: `linear-gradient(145deg,${T.brown},#2E1A07)`, titleColor: T.goldLight, icon: "🎯", title: "Our Mission", text: "To make certified organic, lab-tested wellness products accessible to every Indian household — without compromise on quality, transparency, or ethics." },
              { bg: `linear-gradient(145deg,${T.green},#1A4028)`, titleColor: "#9FDFB0", icon: "🔭", title: "Our Vision", text: "A world where every farmer grows with pride, every consumer chooses with confidence, and nature remains the foundation of human health. India's most trusted organic brand by 2030." },
            ].map(mv => (
              <div key={mv.title} style={{ background: mv.bg, borderRadius: T.r, padding: "36px 28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: "-20%", right: "-10%", width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.06)", pointerEvents: "none" }} />
                <div style={{ fontSize: 44, marginBottom: 18 }}>{mv.icon}</div>
                <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, fontWeight: 700, color: mv.titleColor, marginBottom: 14 }}>{mv.title}</h3>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>{mv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team */}
      <section style={{ padding: "100px 3%", background: T.ivory }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <span style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: T.green, marginBottom: 8 }}>The People</span>
            <h2 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: "clamp(26px,4vw,42px)", fontWeight: 700, color: T.brown }}>Meet Our Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 22 }}>
            {TEAM.map(m => (
              <div key={m.name} style={{ background: T.white, borderRadius: T.r, padding: 24, boxShadow: T.sh, border: `1px solid ${T.border}`, textAlign: "center", transition: "all .3s" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = T.shL; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = T.sh; }}>
                <div style={{ width: 70, height: 70, borderRadius: "50%", background: `linear-gradient(135deg,${T.gold},${T.brownMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 16px" }}>{m.emoji}</div>
                <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 17, fontWeight: 700, color: T.brown, marginBottom: 4 }}>{m.name}</h3>
                <div style={{ fontSize: 12, color: T.green, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 10 }}>{m.role}</div>
                <p style={{ fontSize: 13, color: T.textMid, lineHeight: 1.65 }}>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
