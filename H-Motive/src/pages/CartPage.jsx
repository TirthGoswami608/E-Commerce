import { useState } from "react";
import { COLORS as T } from "../constants/theme";
import SectionCard from "../components/SectionCard";
import BtnP from "../components/BtnP";
import { products } from "../constants/data";

export default function CartPage({ navigate }) {
  // Dummy cart state for UI demo
  const [items, setItems] = useState([
    { ...products[0], qty: 2 },
    { ...products[2], qty: 1 }
  ]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const subtotal = items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const total = subtotal - discount + (subtotal > 999 ? 0 : 99);

  const updateQty = (id, delta) => {
    setItems(items.map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "ORGANIC10") {
      setDiscount(subtotal * 0.1);
    }
  };

  return (
    <div style={{ paddingTop: 70 }}>
      <div style={{ background: `linear-gradient(135deg,${T.ivory},${T.goldPale})`, padding: "80px 3% 60px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: "clamp(32px,5vw,48px)", fontWeight: 700, color: T.brown, marginBottom: 12 }}>My Shopping Cart</h1>
          <p style={{ fontSize: 16, color: T.textLight }}>Manage items and proceed to checkout</p>
        </div>
      </div>

      <div style={{ maxWidth: 1600, margin: "0 auto", padding: "60px 3% 100px" }}>
        {items.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 20px" }}>
            <div style={{ fontSize: 72, marginBottom: 24 }}>🛒</div>
            <h2 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 26, color: T.brown, marginBottom: 12 }}>Your Cart is Empty</h2>
            <p style={{ color: T.textMid, marginBottom: 32 }}>Looks like you haven't added anything to your cart yet.</p>
            <BtnP onClick={() => navigate("shop")} style={{ padding: "14px 40px" }}>Start Shopping →</BtnP>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 32, alignItems: "start" }}>
            {/* Items List */}
            <div>
              {items.map(item => (
                <SectionCard key={item.id} style={{ marginBottom: 16, padding: "20px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ width: 100, height: 100, borderRadius: 16, background: item.color || T.goldPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56, flexShrink: 0 }}>
                      {item.emoji}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 12, color: T.green, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 4 }}>{item.category}</div>
                      <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, color: T.brown, marginBottom: 4 }}>{item.name}</h3>
                      <div style={{ fontSize: 17, fontWeight: 700, color: T.brown }}>₹{item.price.toLocaleString()}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", border: `1.5px solid ${T.border}`, borderRadius: 50, overflow: "hidden" }}>
                      <button onClick={() => updateQty(item.id, -1)} style={{ width: 32, height: 32, background: "transparent", border: "none", cursor: "pointer", fontSize: 16 }}>−</button>
                      <span style={{ minWidth: 32, textAlign: "center", fontSize: 14, fontWeight: 700 }}>{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} style={{ width: 32, height: 32, background: "transparent", border: "none", cursor: "pointer", fontSize: 16 }}>+</button>
                    </div>
                    <div style={{ textAlign: "right", minWidth: 100 }}>
                      <div style={{ fontSize: 18, fontWeight: 700, color: T.brown, marginBottom: 8 }}>₹{(item.price * item.qty).toLocaleString()}</div>
                      <button onClick={() => removeItem(item.id)} style={{ background: "none", border: "none", color: "#e74c3c", fontSize: 12, fontWeight: 600, cursor: "pointer", padding: 0 }}>Remove</button>
                    </div>
                  </div>
                </SectionCard>
              ))}
              
              <button onClick={() => navigate("shop")} style={{ background: "none", border: "none", color: T.gold, fontWeight: 700, fontSize: 14, cursor: "pointer", marginTop: 8 }}>← Continue Shopping</button>
            </div>

            {/* Summary */}
            <div style={{ position: "sticky", top: 100 }}>
              <SectionCard style={{ padding: 28 }}>
                <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, color: T.brown, marginBottom: 24 }}>Order Summary</h3>
                
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, fontSize: 14, color: T.textMid }}>
                  <span>Subtotal</span>
                  <span style={{ fontWeight: 600, color: T.textDark }}>₹{subtotal.toLocaleString()}</span>
                </div>
                
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, fontSize: 14, color: T.textMid }}>
                  <span>Shipping</span>
                  <span style={{ fontWeight: 600, color: subtotal > 999 ? T.green : T.textDark }}>
                    {subtotal > 999 ? "FREE" : "₹99"}
                  </span>
                </div>

                {discount > 0 && (
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14, fontSize: 14, color: T.green }}>
                    <span>Coupon Discount</span>
                    <span style={{ fontWeight: 600 }}>−₹{discount.toLocaleString()}</span>
                  </div>
                )}

                <div style={{ borderTop: `1px solid ${T.border}`, marginTop: 20, paddingTop: 20, marginBottom: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: 18, fontWeight: 700, color: T.brown }}>
                    <span>Total</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", gap: 10 }}>
                    <input value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Coupon code"
                      style={{ flex: 1, padding: "10px 14px", borderRadius: 10, border: `1.5px solid ${T.border}`, fontSize: 13, outline: "none" }} />
                    <button onClick={applyCoupon} style={{ background: T.brown, color: "#fff", border: "none", borderRadius: 10, padding: "0 16px", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>Apply</button>
                  </div>
                  <div style={{ fontSize: 11, color: T.textLight, marginTop: 6 }}>Try "ORGANIC10" for 10% off</div>
                </div>

                <BtnP onClick={() => navigate("checkout")} style={{ width: "100%", padding: "14px", fontSize: 15 }}>Proceed to Checkout →</BtnP>
                
                <div style={{ textAlign: "center", marginTop: 20 }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Razorpay_logo.svg/1200px-Razorpay_logo.svg.png" alt="Razorpay" style={{ height: 18, opacity: 0.6 }} />
                </div>
              </SectionCard>
              
              <div style={{ marginTop: 16, background: T.greenPale, borderRadius: 12, padding: 16, border: `1px solid ${T.border}`, display: "flex", gap: 12, alignItems: "center" }}>
                <span style={{ fontSize: 24 }}>🎁</span>
                <span style={{ fontSize: 12, color: T.green, fontWeight: 500 }}>You are ₹{Math.max(0, 999 - subtotal)} away from <strong>FREE delivery</strong>!</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
