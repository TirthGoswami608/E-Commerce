import { useState } from "react";
import { COLORS as T } from "../constants/theme";
import SectionCard from "../components/SectionCard";

export default function RedeemPage({ navigate }) {
  const [points, setPoints] = useState(450);

  const rewards = [
    { title: "₹100 Store Voucher", cost: 500, icon: "🎫", desc: "Get a ₹100 discount on any product in our shop." },
    { title: "Free Wild Honey (250g)", cost: 800, icon: "🍯", desc: "Redeem a full jar of our signature wild forest honey." },
    { title: "₹250 Store Voucher", cost: 1200, icon: "💳", desc: "A premium voucher for your next big organic purchase." },
    { title: "Wellness Gift Box", cost: 2500, icon: "🎁", desc: "A curated selection of our top 5 wellness essentials." },
    { title: "VIP Early Access", cost: 300, icon: "🚀", desc: "Get first pick on new arrivals and limited harvests." },
    { title: "Free Delivery (3 Orders)", cost: 400, icon: "🚚", desc: "Zero delivery fees on your next three orders." },
  ];

  const handleRedeem = (cost) => {
    if (points >= cost) {
      setPoints(points - cost);
      alert("Reward Redeemed Successfully! Check your email for the code.");
    } else {
      alert("Not enough points! Shop more to earn more.");
    }
  };

  return (
    <div style={{ paddingTop: 100, minHeight: "100vh", background: "#FDFCFB" }}>
      <div style={{ background: `linear-gradient(135deg, ${T.gold}, ${T.brownMid})`, padding: "80px 3% 60px", color: "#fff", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -50, right: -50, fontSize: 300, opacity: 0.1 }}>✨</div>
        <div style={{ maxWidth: 1600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(32px, 5vw, 56px)", margin: "0 0 16px" }}>Redeem Rewards</h1>
          <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 600, margin: "0 auto 40px" }}>You've earned these points by choosing nature. Now, it's time to enjoy the benefits.</p>
          
          <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(20px)", borderRadius: "32px", padding: "32px 60px", display: "inline-block", border: "1px solid rgba(255,255,255,0.2)", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 8 }}>Available Balance</div>
            <div style={{ fontSize: 64, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
              {points} <span style={{ fontSize: 24, fontWeight: 600, opacity: 0.8 }}>Points</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "80px 3% 100px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
          <div>
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 32, color: T.brown, margin: "0 0 12px" }}>Choose Your Reward</h2>
            <p style={{ color: T.textLight, fontSize: 16 }}>Redeem your points for exclusive discounts and products.</p>
          </div>
          <button onClick={() => navigate("dashboard")} style={{ background: "none", border: `2px solid ${T.border}`, borderRadius: "100px", padding: "12px 28px", color: T.brown, fontWeight: 700, cursor: "pointer", transition: "all 0.3s" }}
            onMouseEnter={e => e.target.style.background = "#fff"}
            onMouseLeave={e => e.target.style.background = "none"}>
            ← Back to Dashboard
          </button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))", gap: 32 }}>
          {rewards.map((r, i) => (
            <div key={i} style={{ background: "#fff", borderRadius: "32px", padding: "40px", border: `2px solid ${points >= r.cost ? `${T.gold}15` : T.border}`, transition: "all 0.3s", position: "relative", overflow: "hidden", opacity: points >= r.cost ? 1 : 0.7 }}
              onMouseEnter={e => { if(points >= r.cost) e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}>
              
              <div style={{ fontSize: 56, marginBottom: 24 }}>{r.icon}</div>
              <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 22, fontWeight: 700, color: T.brown, marginBottom: 12 }}>{r.title}</h3>
              <p style={{ fontSize: 15, color: T.textMid, lineHeight: 1.6, marginBottom: 32 }}>{r.desc}</p>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: `1px solid ${T.border}`, paddingTop: 24 }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: T.gold }}>{r.cost} Points</div>
                <button 
                  onClick={() => handleRedeem(r.cost)}
                  disabled={points < r.cost}
                  style={{ 
                    background: points >= r.cost ? T.brown : T.border, 
                    color: "#fff", border: "none", borderRadius: "100px", 
                    padding: "12px 24px", fontSize: 14, fontWeight: 700, 
                    cursor: points >= r.cost ? "pointer" : "not-allowed",
                    transition: "all 0.3s"
                  }}>
                  {points >= r.cost ? "Redeem Now" : "Not Enough Points"}
                </button>
              </div>
              
              {points < r.cost && (
                <div style={{ position: "absolute", top: 20, right: 20, fontSize: 11, background: "#f0f0f0", padding: "4px 10px", borderRadius: "100px", color: T.textLight, fontWeight: 700 }}>
                  Locked 🔒
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 80, background: `${T.green}08`, borderRadius: "40px", padding: "60px", textAlign: "center", border: `1px dashed ${T.green}30` }}>
          <div style={{ fontSize: 50, marginBottom: 20 }}>♻️</div>
          <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 28, color: T.brown, marginBottom: 16 }}>Want more points?</h2>
          <p style={{ fontSize: 16, color: T.textMid, maxWidth: 600, margin: "0 auto 32px", lineHeight: 1.7 }}>
            Remember, you earn points not only by shopping, but also by referring your friends or returning your empty jars for our recycle program!
          </p>
          <button onClick={() => navigate("shop")} style={{ background: T.green, color: "#fff", border: "none", borderRadius: "100px", padding: "16px 40px", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
            Shop to Earn Now
          </button>
        </div>
      </div>
    </div>
  );
}
