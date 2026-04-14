import { useState } from "react";
import { COLORS as T } from "../constants/theme";
import SectionCard from "../components/SectionCard";

export default function DashboardPage({ navigate, user }) {
  const [active, setActive] = useState("overview");

  const menu = [
    { id: "overview", label: "Dashboard", icon: "📊" },
    { id: "orders", label: "Recent Orders", icon: "📦" },
    { id: "address", label: "Addresses", icon: "📍" },
    { id: "wellness", label: "Wellness Hub", icon: "🌿" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  const stats = [
    { label: "Total Orders", value: "12", icon: "🛍️", col: T.gold },
    { label: "Wellness Points", value: "450", icon: "✨", col: T.green },
    { label: "Saved Items", value: "8", icon: "❤️", col: "#E74C3C" },
  ];

  return (
    <div style={{ paddingTop: 120, minHeight: "100vh", background: "#FDFCFB" }}>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "0 3% 100px", display: "grid", gridTemplateColumns: "320px 1fr", gap: 50 }}>
        
        {/* Sidebar */}
        <aside style={{ position: "sticky", top: 120, height: "fit-content" }}>
          <div style={{ background: "#fff", borderRadius: "32px", padding: "40px 24px", border: `1px solid ${T.border}`, boxShadow: "0 20px 50px rgba(0,0,0,0.02)" }}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div style={{ position: "relative", width: 100, height: 100, margin: "0 auto 20px" }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "32%", background: `linear-gradient(135deg, ${T.gold}, ${T.brownMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, color: "#fff", boxShadow: `0 15px 35px ${T.gold}40` }}>
                  {user?.name?.[0] || "P"}
                </div>
                <div style={{ position: "absolute", bottom: -5, right: -5, width: 32, height: 32, background: T.green, borderRadius: "50%", border: "4px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>✓</div>
              </div>
              <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 20, fontWeight: 700, color: T.brown, margin: "0 0 6px" }}>
                {user?.name || "Priya Sharma"}
              </h3>
              <div style={{ display: "inline-block", background: `${T.green}10`, color: T.green, padding: "4px 12px", borderRadius: "100px", fontSize: 12, fontWeight: 700 }}>Gold Member</div>
            </div>

            <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {menu.map(item => (
                <button key={item.id} onClick={() => setActive(item.id)}
                  style={{ 
                    display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", 
                    borderRadius: "16px", border: "none", cursor: "pointer", fontSize: 15, 
                    fontWeight: active === item.id ? 700 : 500, transition: "all 0.3s",
                    background: active === item.id ? `${T.gold}10` : "transparent",
                    color: active === item.id ? T.gold : T.textMid, textAlign: "left"
                  }}
                  onMouseEnter={e => { if(active !== item.id) e.target.style.background = "#F9F6F2"; }}
                  onMouseLeave={e => { if(active !== item.id) e.target.style.background = "transparent"; }}>
                  <span style={{ fontSize: 20 }}>{item.icon}</span>
                  {item.label}
                </button>
              ))}
              <div style={{ height: 1, background: T.border, margin: "20px 10px" }} />
              <button onClick={() => navigate("home")}
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 20px", borderRadius: "16px", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 600, color: "#E74C3C", background: "transparent", textAlign: "left" }}>
                <span>Logout 🚪</span>
              </button>
            </nav>
          </div>

          <div style={{ marginTop: 24, padding: "28px", borderRadius: "32px", background: `linear-gradient(135deg, ${T.gold}, ${T.brownMid})`, color: "#fff", position: "relative", overflow: "hidden", boxShadow: `0 15px 35px ${T.gold}30` }}>
            <div style={{ position: "absolute", top: -20, right: -20, opacity: 0.2, fontSize: 100 }}>🍯</div>
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 16, opacity: 0.9 }}>H-Motive Rewards</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                <span style={{ fontSize: 36, fontWeight: 900 }}>450</span>
                <span style={{ fontSize: 14, fontWeight: 700, opacity: 0.9 }}>Points</span>
              </div>
              <p style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.5, marginBottom: 16, opacity: 0.9 }}>You're 50 points away from a <strong>FREE</strong> organic gift box!</p>
              <div style={{ height: 6, background: "rgba(255,255,255,0.2)", borderRadius: 3, marginBottom: 20 }}>
                <div style={{ width: "90%", height: "100%", background: "#fff", borderRadius: 3, boxShadow: "0 0 10px #fff" }} />
              </div>
              <button style={{ width: "100%", background: "#fff", color: T.gold, border: "none", borderRadius: "100px", padding: "12px", fontSize: 13, fontWeight: 800, cursor: "pointer", transition: "all 0.3s" }}
                onMouseEnter={e => e.target.style.transform = "scale(1.02)"}
                onMouseLeave={e => e.target.style.transform = "none"}>
                Redeem Rewards
              </button>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="fade-in">
          {active === "overview" && (
            <div>
              <div style={{ marginBottom: 44 }}>
                <h1 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 36, color: T.brown, margin: "0 0 12px" }}>Welcome Back, Priya!</h1>
                <p style={{ color: T.textLight, fontSize: 16 }}>Here is what's happening with your wellness journey today.</p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 44 }}>
                {stats.map(s => (
                  <div key={s.label} style={{ background: "#fff", borderRadius: "24px", padding: "32px", border: `1px solid ${T.border}`, boxShadow: "0 10px 30px rgba(0,0,0,0.02)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                      <div style={{ width: 48, height: 48, borderRadius: "14px", background: `${s.col}10`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{s.icon}</div>
                      <span style={{ fontSize: 12, color: T.green, fontWeight: 700 }}>+12% ↑</span>
                    </div>
                    <div style={{ fontSize: 32, fontWeight: 800, color: T.brown, marginBottom: 4 }}>{s.value}</div>
                    <div style={{ fontSize: 14, color: T.textLight, fontWeight: 600 }}>{s.label}</div>
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 32 }}>
                <div style={{ background: "#fff", borderRadius: "32px", padding: "36px", border: `1px solid ${T.border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                    <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 22, color: T.brown, margin: 0 }}>Recent Orders</h3>
                    <button onClick={() => setActive("orders")} style={{ background: "none", border: "none", color: T.gold, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>View All</button>
                  </div>
                  {[
                    { id: "#HM-2026-0892", items: "Raw Honey, Neem Oil", price: "₹1,499", status: "Delivered", date: "April 12" },
                    { id: "#HM-2026-0714", items: "Herbal Roots Tea", price: "₹890", status: "In Transit", date: "April 10" },
                  ].map((o, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", borderBottom: i === 0 ? `1px solid ${T.border}` : "none" }}>
                      <div>
                        <div style={{ fontWeight: 700, color: T.brown, marginBottom: 4 }}>{o.id}</div>
                        <div style={{ fontSize: 13, color: T.textLight }}>{o.items} • {o.date}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontWeight: 800, color: T.textDark, marginBottom: 4 }}>{o.price}</div>
                        <div style={{ fontSize: 11, color: o.status === "Delivered" ? T.green : T.gold, fontWeight: 800, textTransform: "uppercase" }}>{o.status}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: `${T.gold}08`, borderRadius: "32px", padding: "36px", border: `1px solid ${T.gold}15` }}>
                  <h3 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 20, color: T.brown, marginBottom: 24 }}>Wellness Tip</h3>
                  <div style={{ fontSize: 40, marginBottom: 20 }}>🍃</div>
                  <p style={{ fontSize: 15, color: T.textMid, lineHeight: 1.7, marginBottom: 24 }}>
                    "Replacing morning coffee with warm lemon water and a spoon of raw honey can improve digestion and boost your natural immunity."
                  </p>
                  <button style={{ background: "#fff", border: `1px solid ${T.gold}40`, borderRadius: "100px", padding: "12px 24px", color: T.gold, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                    Read More Tips
                  </button>
                </div>
              </div>
            </div>
          )}

          {active === "orders" && (
            <div className="scale-in">
              <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 32, color: T.brown, marginBottom: 32 }}>Your Order History</h2>
              {[1, 2, 3].map(id => (
                <div key={id} style={{ background: "#fff", borderRadius: "24px", padding: "32px", marginBottom: 20, border: `1px solid ${T.border}`, display: "flex", alignItems: "center", gap: 32 }}>
                  <div style={{ width: 80, height: 80, borderRadius: "20px", background: T.goldPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>📦</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: T.brown }}>Order #HM-2026-645{id}</span>
                      <span style={{ fontSize: 13, color: T.textLight }}>April {10 + id}, 2026</span>
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: T.textDark, marginBottom: 8 }}>₹2,450.00</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <span style={{ background: `${T.green}15`, color: T.green, padding: "4px 12px", borderRadius: "100px", fontSize: 11, fontWeight: 800, textTransform: "uppercase" }}>Delivered</span>
                      <span style={{ fontSize: 13, color: T.textLight }}>4 items</span>
                    </div>
                  </div>
                  <button style={{ background: "none", border: `2px solid ${T.gold}`, borderRadius: "100px", padding: "12px 28px", color: T.gold, fontWeight: 700, cursor: "pointer", transition: "all 0.3s" }}
                    onMouseEnter={e => { e.target.style.background = T.gold; e.target.style.color = "#fff"; }}
                    onMouseLeave={e => { e.target.style.background = "none"; e.target.style.color = T.gold; }}>
                    View Details
                  </button>
                </div>
              ))}
            </div>
          )}

          {active === "address" && (
            <div className="scale-in">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 32, color: T.brown, margin: 0 }}>Saved Addresses</h2>
                <button style={{ background: T.gold, color: "#fff", border: "none", borderRadius: "100px", padding: "12px 24px", fontWeight: 700, cursor: "pointer" }}>+ Add New Address</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
                {[
                  { tag: "Home", addr: "42, Panchvati Society, Ambawadi, Ahmedabad, Gujarat - 380015", icon: "🏠" },
                  { tag: "Work", addr: "801, Zion Heights, Thaltej Road, Ahmedabad, Gujarat - 380054", icon: "🏢" }
                ].map((a, i) => (
                  <div key={i} style={{ background: "#fff", borderRadius: "24px", padding: "32px", border: `2px solid ${i === 0 ? T.gold : T.border}`, position: "relative" }}>
                    {i === 0 && <span style={{ position: "absolute", top: 20, right: 20, background: T.gold, color: "#fff", fontSize: 10, fontWeight: 800, padding: "4px 10px", borderRadius: "100px", textTransform: "uppercase" }}>Primary</span>}
                    <div style={{ fontSize: 24, marginBottom: 16 }}>{a.icon}</div>
                    <div style={{ fontSize: 18, fontWeight: 700, color: T.brown, marginBottom: 8 }}>{a.tag}</div>
                    <p style={{ fontSize: 14, color: T.textMid, lineHeight: 1.6, marginBottom: 24 }}>{a.addr}</p>
                    <div style={{ display: "flex", gap: 16 }}>
                      <button style={{ background: "none", border: "none", color: T.gold, fontWeight: 700, fontSize: 13, cursor: "pointer", padding: 0 }}>Edit</button>
                      <button style={{ background: "none", border: "none", color: "#E74C3C", fontWeight: 700, fontSize: 13, cursor: "pointer", padding: 0 }}>Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === "wellness" && (
            <div className="scale-in">
              <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 32, color: T.brown, marginBottom: 12 }}>Wellness & Rewards</h2>
              <p style={{ color: T.textLight, marginBottom: 40 }}>Your journey towards a healthier life and exclusive benefits.</p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 32 }}>
                <div style={{ background: "#fff", borderRadius: "32px", padding: "40px", border: `2px solid ${T.gold}`, textAlign: "center", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: -10, right: -10, fontSize: 80, opacity: 0.05 }}>✨</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: T.brown, marginBottom: 16 }}>Current Points Balance</h3>
                  <div style={{ fontSize: 56, fontWeight: 900, color: T.gold, marginBottom: 8 }}>450</div>
                  <div style={{ fontSize: 13, color: T.textLight, fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>≈ ₹45.00 Value</div>
                  <p style={{ fontSize: 14, color: T.textMid, marginTop: 20, lineHeight: 1.6 }}>You earn <strong>1 Point for every ₹10</strong> spent on organic goodness.</p>
                </div>
                
                <div style={{ background: "#fff", borderRadius: "32px", padding: "40px", border: `1px solid ${T.border}` }}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: T.brown, marginBottom: 24 }}>How to Earn More</h3>
                  {[
                    { t: "Shop Organic", d: "Earn 1 point per ₹10 spent", icon: "🛒" },
                    { t: "Write a Review", d: "Get 50 points per review", icon: "⭐" },
                    { t: "Recycle Packaging", d: "Return bottles for 100 points", icon: "♻️" }
                  ].map((x, i) => (
                    <div key={i} style={{ display: "flex", gap: 16, marginBottom: i === 2 ? 0 : 20, padding: 18, borderRadius: 20, background: T.ivory, border: "1px solid rgba(0,0,0,0.02)" }}>
                      <span style={{ fontSize: 28, background: "#fff", width: 50, height: 50, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "14px", boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}>{x.icon}</span>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15, color: T.brown, marginBottom: 2 }}>{x.t}</div>
                        <div style={{ fontSize: 13, color: T.textMid }}>{x.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: "32px", padding: "40px", border: `1px solid ${T.border}` }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: T.brown, marginBottom: 24 }}>Points History</h3>
                {[
                  { t: "Purchase: Raw Wild Honey", p: "+120", d: "April 12, 2026" },
                  { t: "Reward: Product Review", p: "+50", d: "April 08, 2026" },
                  { t: "Purchase: Herbal Glow Kit", p: "+280", d: "March 28, 2026" }
                ].map((h, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 0", borderBottom: i === 2 ? "none" : `1px solid ${T.border}` }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 15, color: T.textDark }}>{h.t}</div>
                      <div style={{ fontSize: 12, color: T.textLight }}>{h.d}</div>
                    </div>
                    <div style={{ fontWeight: 800, color: T.green, fontSize: 16 }}>{h.p}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {active === "settings" && (
            <div className="scale-in">
              <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 32, color: T.brown, marginBottom: 40 }}>Account Settings</h2>
              <div style={{ background: "#fff", borderRadius: "32px", padding: "40px", border: `1px solid ${T.border}` }}>
                {[
                  { t: "Email Notifications", d: "Stay updated on orders and wellness tips", type: "toggle" },
                  { t: "Two-Factor Authentication", d: "Add an extra layer of security", type: "btn", label: "Enable" },
                  { t: "Privacy Profile", d: "Manage what information we share", type: "btn", label: "Manage" },
                  { t: "Delete Account", d: "Permanently remove your data", type: "btn", label: "Delete", danger: true }
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 0", borderBottom: i === 3 ? "none" : `1px solid ${T.border}` }}>
                    <div>
                      <div style={{ fontWeight: 700, color: T.brown, marginBottom: 4 }}>{s.t}</div>
                      <div style={{ fontSize: 13, color: T.textLight }}>{s.d}</div>
                    </div>
                    {s.type === "toggle" ? (
                      <div style={{ width: 44, height: 24, borderRadius: 12, background: T.green, position: "relative", cursor: "pointer" }}>
                        <div style={{ position: "absolute", top: 2, right: 2, width: 20, height: 20, borderRadius: "50%", background: "#fff" }} />
                      </div>
                    ) : (
                      <button style={{ padding: "8px 20px", borderRadius: "100px", border: `1.5px solid ${s.danger ? "#E74C3C" : T.border}`, color: s.danger ? "#E74C3C" : T.brown, background: "none", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                        {s.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
