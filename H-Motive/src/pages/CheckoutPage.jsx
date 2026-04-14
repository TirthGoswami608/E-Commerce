import { useState } from "react";
import { COLORS as T } from "../constants/theme";
import SectionCard from "../components/SectionCard";
import FormInput from "../components/FormInput";
import BtnP from "../components/BtnP";
import BtnO from "../components/BtnO";
import { CART_ITEMS } from "../constants/data";

export default function CheckoutPage({ navigate }) {
  const [payMethod, setPayMethod] = useState("razorpay");
  const [orderPlaced, setOrder] = useState(false);
  const [form, setForm] = useState({ name: "Priya Sharma", phone: "+91 98765 43210", email: "priya@example.com", address: "42, Panchvati Society, Ambawadi", city: "Ahmedabad", state: "Gujarat", pincode: "380015" });
  const sub = CART_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);
  const del = sub >= 999 ? 0 : 99;
  const total = sub + del;

  if (orderPlaced) return (
    <div style={{ paddingTop: 70, minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <SectionCard style={{ maxWidth: 500, width: "100%", textAlign: "center", padding: "52px 40px", boxShadow: T.shXl }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: `linear-gradient(135deg,${T.green},#2A5235)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, margin: "0 auto 20px" }}>✅</div>
        <h2 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 28, color: T.brown, marginBottom: 10 }}>Order Confirmed!</h2>
        <p style={{ color: T.textMid, lineHeight: 1.7, marginBottom: 6 }}>Thank you for choosing H-Motive Organics.</p>
        <p style={{ color: T.textLight, fontSize: 13, marginBottom: 28 }}>Order <strong>#HM-2026-0893</strong> will arrive in 3–5 business days.</p>
        <div style={{ background: T.goldPale, borderRadius: T.r, padding: 18, marginBottom: 28, textAlign: "left" }}>
          {CART_ITEMS.map(i => <div key={i.name} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: T.textMid, marginBottom: 4 }}><span>{i.emoji} {i.name} ×{i.qty}</span><strong>₹{(i.price * i.qty).toLocaleString()}</strong></div>)}
          <div style={{ borderTop: "1px dashed rgba(192,127,36,.25)", marginTop: 8, paddingTop: 8, display: "flex", justifyContent: "space-between", fontWeight: 700, color: T.brown }}><span>Total Paid</span><span>₹{total.toLocaleString()}</span></div>
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <BtnP onClick={() => navigate("orders")} style={{ padding: "12px 24px", fontSize: 14 }}>Track Order</BtnP>
          <BtnO onClick={() => navigate("shop")} style={{ padding: "12px 24px", fontSize: 14 }}>Continue Shopping</BtnO>
        </div>
      </SectionCard>
    </div>
  );

  const payOptions = [
    { id: "razorpay", icon: "💳", title: "Razorpay", sub: "UPI, Cards, Net Banking, Wallets", badge: "Recommended" },
    { id: "cod", icon: "💵", title: "Cash on Delivery", sub: "Pay when you receive the order" },
    { id: "upi", icon: "📱", title: "UPI Direct", sub: "GPay, PhonePe, BHIM UPI" },
  ];

  return (
    <div style={{ paddingTop: 90, minHeight: "100vh", background: T.cream }}>
      <div style={{ background: `linear-gradient(135deg,${T.ivory},${T.goldPale})`, padding: "40px 3% 32px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: T.green, display: "block", marginBottom: 12 }}>Secure Checkout</span>
          <h1 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: "clamp(24px,4vw,42px)", fontWeight: 700, color: T.brown, lineHeight: 1.1 }}>Finalize Your Order</h1>
        </div>
      </div>
      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "60px 3% 100px", display: "grid", gridTemplateColumns: "1fr 400px", gap: 40, alignItems: "start" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          {/* Address */}
          <SectionCard>
            <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: T.brown, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg,${T.gold},${T.brownMid})`, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>1</span>
              Delivery Address
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <FormInput label="Full Name *" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
              <FormInput label="Phone *" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              <div style={{ gridColumn: "1/-1" }}><FormInput label="Email *" type="email" placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /></div>
              <div style={{ gridColumn: "1/-1" }}><FormInput label="Address *" placeholder="House No., Street, Area" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} /></div>
              <FormInput label="City *" placeholder="Ahmedabad" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
              <FormInput label="Pincode *" placeholder="380015" value={form.pincode} onChange={e => setForm({ ...form, pincode: e.target.value })} />
            </div>
          </SectionCard>
          {/* Payment */}
          <SectionCard>
            <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: T.brown, marginBottom: 20, display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 28, height: 28, borderRadius: "50%", background: `linear-gradient(135deg,${T.gold},${T.brownMid})`, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700 }}>2</span>
              Payment Method
            </h3>
            {payOptions.map(opt => (
              <div key={opt.id} onClick={() => setPayMethod(opt.id)}
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: T.r, border: `2px solid ${payMethod === opt.id ? T.gold : T.border}`, background: payMethod === opt.id ? T.goldPale : T.white, cursor: "pointer", marginBottom: 10, transition: "all .25s" }}>
                <input type="radio" name="pay" checked={payMethod === opt.id} readOnly style={{ accentColor: T.gold, width: 18, height: 18 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: T.textDark }}>{opt.icon} {opt.title}</div>
                  <div style={{ fontSize: 12, color: T.textLight }}>{opt.sub}</div>
                </div>
                {opt.badge && <span style={{ background: T.green, color: "#fff", borderRadius: 6, padding: "3px 8px", fontSize: 10, fontWeight: 700 }}>{opt.badge}</span>}
              </div>
            ))}
            {payMethod === "razorpay" && (
              <div style={{ marginTop: 14, padding: 16, background: T.goldPale, borderRadius: T.r, border: `1px solid rgba(192,127,36,.2)` }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={{ gridColumn: "1/-1" }}><FormInput label="Card Number" placeholder="4242 4242 4242 4242" /></div>
                  <FormInput label="Expiry (MM/YY)" placeholder="12/27" />
                  <FormInput label="CVV" type="password" placeholder="•••" />
                  <div style={{ gridColumn: "1/-1" }}><FormInput label="Name on Card" placeholder="PRIYA SHARMA" /></div>
                </div>
              </div>
            )}
          </SectionCard>
        </div>
        {/* Summary */}
        <SectionCard style={{ position: "sticky", top: 140, boxShadow: T.shL }}>
          <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: T.brown, marginBottom: 18 }}>Order Summary</h3>
          {CART_ITEMS.map(i => (
            <div key={i.name} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: `1px solid rgba(192,127,36,.08)` }}>
              <div style={{ background: i.bg, borderRadius: 10, padding: "8px 6px", fontSize: 28, flexShrink: 0 }}>{i.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.textDark }}>{i.name}</div>
                <div style={{ fontSize: 11, color: T.textLight }}>{i.weight} · Qty: {i.qty}</div>
              </div>
              <div style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 14, fontWeight: 700, color: T.brown }}>₹{(i.price * i.qty).toLocaleString()}</div>
            </div>
          ))}
          <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 10 }}>
            {[["Subtotal", `₹${sub.toLocaleString()}`], ["Delivery", del === 0 ? "FREE 🎉" : `₹${del}`, del === 0 ? T.green : null]].map(([l, v, c]) => (
              <div key={l} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: c || T.textMid }}><span>{l}</span><span style={{ fontWeight: 600, color: c || T.textMid }}>{v}</span></div>
            ))}
            <div style={{ borderTop: "1.5px dashed rgba(192,127,36,.25)", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 16, fontWeight: 700, color: T.brown }}>Total</span>
              <span style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, fontWeight: 700, color: T.brown }}>₹{total.toLocaleString()}</span>
            </div>
          </div>
          <BtnP onClick={() => setOrder(true)} style={{ width: "100%", padding: "15px", fontSize: 15, marginTop: 20, textAlign: "center" }}>🔒 Place Order →</BtnP>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, marginTop: 12 }}>
            {["🔒 SSL Secure", "✅ Verified", "📦 Free Returns"].map(x => <span key={x} style={{ fontSize: 11, color: T.textLight }}>{x}</span>)}
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
