import { COLORS as T } from "../constants/theme";
import SectionCard from "../components/SectionCard";
import BtnP from "../components/BtnP";
import BtnO from "../components/BtnO";
import { ORDERS } from "../constants/data";

export default function OrdersPage() {
  const STATUS = {
    delivered: { icon: "✅", label: "Delivered" },
    processing: { icon: "🔄", label: "Processing" },
    cancelled: { icon: "❌", label: "Cancelled" },
  };
  const progressFor = s => s === "cancelled" ? 1 : s === "processing" ? 2 : 4;
  const STEPS = ["Placed", "Confirmed", "Shipped", "Delivered"];

  return (
    <div style={{ paddingTop: 70, minHeight: "100vh", background: T.cream }}>
      <div style={{ background: `linear-gradient(135deg,${T.ivory},${T.goldPale})`, padding: "44px 5% 36px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: T.green, marginBottom: 8 }}>Your Orders</span>
          <h1 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: "clamp(24px,4vw,36px)", fontWeight: 700, color: T.brown }}>Order History</h1>
          <p style={{ fontSize: 14, color: T.textLight, marginTop: 6 }}>{ORDERS.length} orders · All time</p>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "36px 5% 88px" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap" }}>
          {["All", "Delivered", "Processing", "Cancelled"].map((f, i) => (
            <button key={f} style={{ background: i === 0 ? T.goldPale : "transparent", color: T.brown, border: `2px solid ${T.gold}`, borderRadius: 50, padding: "7px 18px", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all .25s" }}
              onMouseEnter={e => { e.currentTarget.style.background = T.gold; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.background = i === 0 ? T.goldPale : "transparent"; e.currentTarget.style.color = T.brown; }}>{f}</button>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {ORDERS.map(o => {
            const s = STATUS[o.status];
            const prog = progressFor(o.status);
            return (
              <div key={o.id} style={{ background: T.white, borderRadius: T.r, padding: 20, boxShadow: T.sh, border: `1px solid ${T.border}`, transition: "all .3s" }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = T.shL; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = T.sh; e.currentTarget.style.transform = "none"; }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 14 }}>
                  <div>
                    <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 15, fontWeight: 700, color: T.brown }}>{o.id}</div>
                    <div style={{ fontSize: 12, color: T.textLight, marginTop: 2 }}>📅 {o.date}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <span style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: T.brown }}>₹{o.total.toLocaleString()}</span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 50, padding: "5px 13px", fontSize: 11, fontWeight: 700, letterSpacing: ".5px", textTransform: "uppercase",
                      background: o.status === "delivered" ? "#E8F5EC" : o.status === "processing" ? "#EEF4FF" : o.status === "cancelled" ? "#FFF0F0" : "#FDF5E0",
                      color: o.status === "delivered" ? T.green : o.status === "processing" ? "#3B5BDB" : o.status === "cancelled" ? "#e74c3c" : T.gold }}>
                      {s.icon} {s.label}
                    </span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
                  {o.items.map(i => <div key={i.name} style={{ display: "flex", alignItems: "center", gap: 6, background: T.goldPale, borderRadius: 8, padding: "5px 10px", fontSize: 12, fontWeight: 500, color: T.textMid }}>{i.emoji} {i.name}</div>)}
                </div>
                {o.status !== "cancelled" ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 14 }}>
                    {STEPS.map((step, idx) => {
                      const done = idx < prog;
                      return (
                        <div key={step} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, position: "relative" }}>
                          {idx < STEPS.length - 1 && <div style={{ position: "absolute", top: 12, left: "50%", width: "100%", height: 2, background: done ? T.green : T.border, zIndex: 0 }} />}
                          <div style={{ width: 24, height: 24, borderRadius: "50%", background: done ? T.green : T.white, border: `2px solid ${done ? T.green : T.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, zIndex: 1, color: done ? "#fff" : T.textLight }}>
                            {done ? "✓" : idx + 1}
                          </div>
                          <div style={{ fontSize: 10, color: T.textLight, marginTop: 5, textAlign: "center" }}>{step}</div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div style={{ padding: "10px 14px", background: "#FFF0F0", borderRadius: T.rSm, fontSize: 12, color: "#e74c3c", fontWeight: 500, marginBottom: 14 }}>❌ This order was cancelled.</div>
                )}
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <BtnP style={{ padding: "8px 18px", fontSize: 12 }}>View Details</BtnP>
                  {o.status === "delivered" && <BtnO style={{ padding: "7px 16px", fontSize: 12 }}>⭐ Rate Order</BtnO>}
                  <BtnO style={{ padding: "7px 16px", fontSize: 12 }}>📥 Invoice</BtnO>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
