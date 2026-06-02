import { useState, useEffect } from "react";
import { COLORS as T } from "../constants/theme";

export default function RedeemPage({ navigate }) {
  const [points, setPoints] = useState(450);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const rewards = [
    { 
      id: 1, 
      title: "₹100 Store Voucher", 
      cost: 500, 
      icon: "🎫", 
      desc: "Get a ₹100 discount on any product in our shop.",
      category: "Voucher",
      color: "#F39C12"
    },
    { 
      id: 2, 
      title: "Free Wild Honey (250g)", 
      cost: 800, 
      icon: "🍯", 
      desc: "Redeem a full jar of our signature wild forest honey.",
      category: "Product",
      color: "#E67E22"
    },
    { 
      id: 3, 
      title: "₹250 Store Voucher", 
      cost: 1200, 
      icon: "💳", 
      desc: "A premium voucher for your next big organic purchase.",
      category: "Voucher",
      color: "#2980B9"
    },
    { 
      id: 4, 
      title: "Wellness Gift Box", 
      cost: 2500, 
      icon: "🎁", 
      desc: "A curated selection of our top 5 wellness essentials.",
      category: "Special",
      color: "#8E44AD"
    },
    { 
      id: 5, 
      title: "VIP Early Access", 
      cost: 300, 
      icon: "🚀", 
      desc: "Get first pick on new arrivals and limited harvests.",
      category: "Access",
      color: "#16A085"
    },
    { 
      id: 6, 
      title: "Free Delivery (3 Orders)", 
      cost: 400, 
      icon: "🚚", 
      desc: "Zero delivery fees on your next three orders.",
      category: "Service",
      color: "#27AE60"
    },
  ];

  const activities = [
    { id: 1, type: "Earned", detail: "Purchase: Raw Wild Honey", points: "+120", date: "April 12, 2026" },
    { id: 2, type: "Earned", detail: "Review: Herbal Glow Kit", points: "+50", date: "April 08, 2026" },
    { id: 3, type: "Redeemed", detail: "Free Delivery Voucher", points: "-400", date: "March 15, 2026" },
    { id: 4, type: "Earned", detail: "Recycle Program Reward", points: "+100", date: "March 02, 2026" },
  ];

  const handleRedeem = (reward) => {
    if (points >= reward.cost) {
      setPoints(points - reward.cost);
      // In a real app, this would trigger an API call
      alert(`Successfully redeemed: ${reward.title}! Check your email for instructions.`);
    }
  };

  return (
    <div style={{ background: "#FDFCFB", minHeight: "100vh", paddingBottom: 100 }}>
      {/* Dynamic Navbar Color Override */}
      <style>{`
        .nav-logo-text { color: #fff !important; }
        .nav-links button { color: rgba(255,255,255,0.8) !important; }
        .nav-links button:hover { color: #fff !important; }
      `}</style>

      {/* Dynamic Header */}
      <section style={{ 
        background: `linear-gradient(135deg, ${T.brown} 0%, #2A1808 100%)`,
        padding: "180px 3% 140px",
        position: "relative",
        overflow: "hidden",
        textAlign: "center"
      }}>

        <div style={{ 
          position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, 
          background: `radial-gradient(circle, ${T.gold}20 0%, transparent 70%)`,
          pointerEvents: "none"
        }} />
        <div style={{ 
          position: "absolute", bottom: "-10%", left: "-5%", width: 400, height: 400, 
          background: `radial-gradient(circle, ${T.green}15 0%, transparent 70%)`,
          pointerEvents: "none"
        }} />
        
        <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div className="fade-in" style={{ opacity: isLoaded ? 1 : 0, transform: isLoaded ? "translateY(0)" : "translateY(20px)", transition: "all 0.8s ease" }}>
            <span style={{ 
              display: "inline-block", color: T.goldLight, fontSize: 13, 
              fontWeight: 800, textTransform: "uppercase", letterSpacing: "3px", marginBottom: 20 
            }}>H-Motive Rewards Program</span>
            <h1 style={{ 
              fontFamily: "'Libre Baskerville', serif", fontSize: "clamp(40px, 6vw, 72px)", 
              color: "#fff", margin: "0 0 24px", fontWeight: 700 
            }}>Your Wellness Wealth</h1>
            <p style={{ 
              color: "rgba(255,255,255,0.7)", fontSize: 18, maxWidth: 700, margin: "0 auto 60px", lineHeight: 1.8 
            }}>
              Every purchase brings you closer to nature and exclusive rewards. 
              Track your points and unlock the best of H-Motive.
            </p>

            {/* Points Glass Card */}
            <div style={{ 
              display: "inline-flex", flexDirection: "column", alignItems: "center",
              background: "rgba(255,255,255,0.05)", backdropFilter: "blur(20px)",
              borderRadius: "40px", padding: "40px 80px", border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 40px 80px rgba(0,0,0,0.3)"
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: T.goldLight, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 8 }}>Available Balance</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <span style={{ fontSize: 80, fontWeight: 900, color: "#fff", letterSpacing: "-2px" }}>{points}</span>
                <span style={{ fontSize: 24, fontWeight: 700, color: "rgba(255,255,255,0.5)" }}>Points</span>
              </div>
              <div style={{ marginTop: 24, width: 240, height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 3, position: "relative" }}>
                <div style={{ 
                  width: `${Math.min((points / 1000) * 100, 100)}%`, height: "100%", 
                  background: `linear-gradient(90deg, ${T.gold}, ${T.goldLight})`, 
                  borderRadius: 3, boxShadow: `0 0 20px ${T.gold}80` 
                }} />
              </div>
              <div style={{ marginTop: 12, fontSize: 13, color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
                {points >= 1000 ? "Level: Platinum" : `Unlock Platinum at 1,000 points`}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ 
        maxWidth: 1600, 
        margin: "-80px auto 0", 
        padding: "60px 3% 100px", 
        position: "relative", 
        zIndex: 10,
        background: "#fff",
        borderRadius: "60px 60px 0 0",
        boxShadow: "0 -20px 60px rgba(0,0,0,0.05)",
        border: `1px solid ${T.border}`,
        borderBottom: "none"
      }}>
        
        {/* Main Grid: Rewards & Activity */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 60, alignItems: "start" }}>

          
          {/* Rewards Section */}
          <div className="scale-in" style={{ animationDelay: "0.2s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
              <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 32, color: T.brown }}>Available Rewards</h2>
              <div style={{ display: "flex", gap: 12 }}>
                {["All", "Vouchers", "Products"].map((cat, i) => (
                  <button key={i} style={{ 
                    background: i === 0 ? T.brown : "#fff", 
                    color: i === 0 ? "#fff" : T.brown,
                    border: `1.5px solid ${T.border}`,
                    padding: "8px 20px", borderRadius: "100px", fontSize: 14, fontWeight: 700, cursor: "pointer"
                  }}>{cat}</button>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))", gap: 24 }}>
              {rewards.map((r) => {
                const canAfford = points >= r.cost;
                const progress = Math.min((points / r.cost) * 100, 100);

                return (
                  <div key={r.id} style={{ 
                    background: "#fff", borderRadius: "32px", padding: "32px",
                    border: `2px solid ${canAfford ? T.gold + "15" : "transparent"}`,
                    boxShadow: "0 15px 40px rgba(0,0,0,0.03)",
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    position: "relative", overflow: "hidden",
                    display: "flex", flexDirection: "column", minHeight: "100%",
                    opacity: isLoaded ? 1 : 0, transform: isLoaded ? "scale(1)" : "scale(0.95)"
                  }}

                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.boxShadow = "0 30px 60px rgba(74,44,10,0.1)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.03)";
                    }}>
                    
                    <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
                      <div style={{ 
                        fontSize: 48, background: `${r.color}10`, width: 80, height: 80, 
                        display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "24px" 
                      }}>{r.icon}</div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: 12, fontWeight: 800, color: r.color, opacity: 0.8, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 4 }}>{r.category}</div>
                        <div style={{ fontSize: 24, fontWeight: 900, color: T.textDark }}>{r.cost} <span style={{ fontSize: 14, fontWeight: 700, color: T.textLight }}>PTS</span></div>
                      </div>
                    </div>

                    <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 20, color: T.brown, marginBottom: 12 }}>{r.title}</h3>
                    <p style={{ fontSize: 15, color: T.textMid, lineHeight: 1.6, marginBottom: 28, minHeight: 48 }}>{r.desc}</p>
                    
                    {!canAfford && (
                      <div style={{ marginBottom: 24 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 700, color: T.textLight, marginBottom: 8 }}>
                          <span>Collection Progress</span>
                          <span>{Math.round(progress)}%</span>
                        </div>
                        <div style={{ height: 6, background: T.ivory, borderRadius: 3, position: "relative" }}>
                          <div style={{ width: `${progress}%`, height: "100%", background: r.color, borderRadius: 3, opacity: 0.6 }} />
                        </div>
                      </div>
                    )}
                    </div>


                    <button 
                      onClick={() => handleRedeem(r)}
                      disabled={!canAfford}
                      style={{ 
                        width: "100%", padding: "16px", borderRadius: "20px", border: "none",
                        background: canAfford ? `linear-gradient(135deg, ${T.brown}, ${T.textDark})` : "#F5F5F5",
                        color: canAfford ? "#fff" : "#A0A0A0",
                        fontSize: 15, fontWeight: 700, cursor: canAfford ? "pointer" : "not-allowed",
                        transition: "all 0.3s", position: "relative", overflow: "hidden"
                      }}>
                      {canAfford ? "Redeem Now" : `Need ${r.cost - points} more points`}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Activity Section */}
          <aside style={{ position: "sticky", top: 120 }}>
            <div style={{ 
              background: "#fff", borderRadius: "40px", padding: "40px 32px", 
              border: `1px solid ${T.border}`, boxShadow: "0 20px 50px rgba(0,0,0,0.02)" 
            }}>
              <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 24, color: T.brown, marginBottom: 32 }}>Recent Activity</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {activities.map((a, i) => (
                  <div key={a.id} style={{ display: "flex", gap: 16, borderBottom: i === activities.length - 1 ? "none" : `1px solid ${T.ivory}`, paddingBottom: 20 }}>
                    <div style={{ 
                      width: 48, height: 48, borderRadius: "16px", background: a.points.startsWith("+") ? `${T.green}10` : "#F5F5F5",
                      display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0
                    }}>

                      {a.points.startsWith("+") ? "✨" : "🎁"}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 4 }}>
                        <div style={{ fontWeight: 700, color: T.brown, fontSize: 14 }}>{a.detail}</div>
                        <div style={{ fontWeight: 800, color: a.points.startsWith("+") ? T.green : T.textDark, fontSize: 15 }}>{a.points}</div>
                      </div>

                      <div style={{ fontSize: 12, color: T.textLight, fontWeight: 500 }}>{a.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button style={{ 
                width: "100%", marginTop: 32, padding: "14px", borderRadius: "100px",
                border: `1.5px solid ${T.border}`, background: "none", color: T.brown,
                fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "all 0.3s"
              }}
              onMouseEnter={e => e.target.style.background = T.ivory}
              onMouseLeave={e => e.target.style.background = "none"}>
                View Full History
              </button>
            </div>


          </aside>
        </div>

        {/* Ways to Earn Section */}
        <section style={{ marginTop: 120 }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 40, color: T.brown, marginBottom: 16 }}>Ways to Earn Points</h2>
            <p style={{ color: T.textMid, fontSize: 16 }}>Multiply your wellness currency with these activities.</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {[
              { icon: "🛍️", title: "Shop & Save", desc: "Earn 1 point for every ₹10 spent on all products.", pts: "1pt / ₹10" },
              { icon: "⭐", title: "Share Love", desc: "Write a verified product review to help others.", pts: "50 pts" },
              { icon: "♻️", title: "Recycle More", desc: "Return your empty glass jars to our stores.", pts: "100 pts" },
              { icon: "🎂", title: "Birthday Gift", desc: "A special surprise on your wellness anniversary.", pts: "500 pts" },
            ].map((item, i) => (
              <div key={i} style={{ 
                background: "#fff", padding: "40px 32px", borderRadius: "32px", textAlign: "center",
                border: `1px solid ${T.border}`, transition: "all 0.3s",
                display: "flex", flexDirection: "column", alignItems: "center", minHeight: 320
              }}

              onMouseEnter={e => { e.currentTarget.style.borderColor = T.gold; e.currentTarget.style.transform = "translateY(-5px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.transform = "none"; }}>
                <div style={{ fontSize: 48, marginBottom: 24 }}>{item.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: T.brown, marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: T.textMid, lineHeight: 1.6, marginBottom: 20, flex: 1 }}>{item.desc}</p>

                <div style={{ display: "inline-block", background: T.ivory, color: T.gold, padding: "6px 16px", borderRadius: "100px", fontWeight: 800, fontSize: 12 }}>{item.pts}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Support Banner */}
        <div style={{ 
          marginTop: 100, background: `${T.green}08`, borderRadius: "40px", padding: "60px", 
          display: "flex", alignItems: "center", justifyContent: "space-between", border: `1px dashed ${T.green}30` 
        }}>
          <div style={{ maxWidth: 600 }}>
            <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 28, color: T.brown, marginBottom: 16 }}>Questions about H-Motive Rewards?</h3>
            <p style={{ fontSize: 16, color: T.textMid, lineHeight: 1.7, margin: 0 }}>
              Our dedicated support team is here to help you maximize your points and rewards. 
              Check our FAQ or talk to us directly.
            </p>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            <button style={{ 
              background: "#fff", border: `1.5px solid ${T.border}`, padding: "16px 32px", 
              borderRadius: "100px", color: T.brown, fontWeight: 700, cursor: "pointer" 
            }}>Read FAQ</button>
            <button onClick={() => navigate("contact")} style={{ 
              background: T.green, border: "none", padding: "16px 32px", 
              borderRadius: "100px", color: "#fff", fontWeight: 700, cursor: "pointer" 
            }}>Contact Support</button>
          </div>
        </div>

        {/* Back Button */}
        <div style={{ marginTop: 60, textAlign: "center" }}>
          <button 
            onClick={() => navigate("dashboard")}
            style={{ 
              background: "none", border: "none", color: T.textLight, 
              fontSize: 15, fontWeight: 700, cursor: "pointer", textDecoration: "underline" 
            }}>
            Return to Profile Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
