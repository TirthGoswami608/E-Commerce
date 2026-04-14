import { useState } from "react";
import { COLORS as T } from "../constants/theme";
import SectionCard from "../components/SectionCard";
import FormInput from "../components/FormInput";
import BtnP from "../components/BtnP";
import { FAQS } from "../constants/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "Product Inquiry", message: "" });
  const [sent, setSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  return (
    <div style={{ paddingTop: 70 }}>
      <div style={{ background: `linear-gradient(135deg,${T.ivory},${T.goldPale})`, padding: "64px 5% 52px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: 11, fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: T.green, marginBottom: 8 }}>Get In Touch</span>
          <h1 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: "clamp(28px,5vw,52px)", fontWeight: 700, color: T.brown, lineHeight: 1.15, marginBottom: 12 }}>We'd Love to Hear<br />from You</h1>
          <p style={{ fontSize: 15, color: T.textLight, maxWidth: 440, lineHeight: 1.7 }}>Have a question about our products, sourcing, or your order? Our team responds within 24 hours.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "52px 5% 88px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 32, alignItems: "start" }}>
        {/* Form */}
        <SectionCard>
          <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 20, fontWeight: 700, color: T.brown, marginBottom: 22 }}>Send Us a Message</h3>
          {sent ? (
            <div style={{ textAlign: "center", padding: "40px 20px" }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 22, color: T.brown, marginBottom: 10 }}>Message Sent!</h3>
              <p style={{ color: T.textMid, marginBottom: 24 }}>We'll get back to you within 24 hours.</p>
              <BtnP onClick={() => setSent(false)} style={{ padding: "11px 26px", fontWeight: 600 }}>Send Another</BtnP>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <FormInput label="Full Name *" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                <FormInput label="Email *" type="email" placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                <FormInput label="Phone" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textMid, marginBottom: 6 }}>Subject</label>
                  <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                    style={{ width: "100%", padding: "11px 16px", borderRadius: T.rSm, border: `1.5px solid ${T.border}`, background: T.white, color: T.textDark, fontSize: 14, fontFamily: "inherit", outline: "none" }}>
                    {["Product Inquiry", "Order Issue", "Bulk / B2B", "Partnership", "Feedback"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ gridColumn: "1/-1", marginBottom: 16 }}>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textMid, marginBottom: 6 }}>Message *</label>
                  <textarea rows={5} placeholder="Tell us how we can help..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                    style={{ width: "100%", padding: "11px 16px", borderRadius: T.rSm, border: `1.5px solid ${T.border}`, background: T.white, color: T.textDark, fontSize: 14, fontFamily: "inherit", resize: "vertical", outline: "none", transition: "border .2s" }}
                    onFocus={e => e.target.style.borderColor = T.gold}
                    onBlur={e => e.target.style.borderColor = T.border} />
                </div>
              </div>
              <BtnP onClick={handleSubmit} style={{ padding: "13px 30px", fontSize: 14 }}>Send Message →</BtnP>
            </>
          )}
        </SectionCard>
        {/* Info + FAQ */}
        <div>
          <SectionCard style={{ marginBottom: 20 }}>
            <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 18, fontWeight: 700, color: T.brown, marginBottom: 16 }}>Contact Details</h3>
            {[["📧", "Email Us", "hello@hmotive.in", "support@hmotive.in"], ["📞", "Call Us", "+91 99999 00000", "Mon–Sat, 9AM–7PM IST"], ["📍", "Visit Us", "Ahmedabad, Gujarat", "India – 380015"], ["⏰", "Hours", "Mon–Sat: 9AM–7PM", "Sunday: Closed"]].map(([ic, l, v1, v2]) => (
              <div key={l} style={{ display: "flex", alignItems: "flex-start", gap: 14, padding: "16px 0", borderBottom: `1px solid rgba(192,127,36,.1)` }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: T.goldPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{ic}</div>
                <div>
                  <div style={{ fontSize: 11, color: T.textLight, fontWeight: 600, letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 3 }}>{l}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: T.textDark, marginBottom: 1 }}>{v1}</div>
                  <div style={{ fontSize: 12, color: T.textLight }}>{v2}</div>
                </div>
              </div>
            ))}
          </SectionCard>
          <SectionCard>
            <h3 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 17, fontWeight: 700, color: T.brown, marginBottom: 16 }}>Frequently Asked</h3>
            {FAQS.map((f, i) => (
              <div key={i} style={{ border: `1px solid ${T.border}`, borderRadius: T.r, overflow: "hidden", marginBottom: 10 }}>
                <div onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ padding: "14px 18px", fontSize: 13, fontWeight: 600, color: T.textDark, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", background: openFaq === i ? T.goldPale : T.white, transition: "background .2s" }}>
                  <span>{f.q}</span>
                  <span style={{ color: T.gold, fontSize: 12, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform .25s" }}>▼</span>
                </div>
                {openFaq === i && (
                  <div style={{ padding: "12px 18px", fontSize: 13, color: T.textMid, lineHeight: 1.7, borderTop: `1px solid ${T.border}` }}>{f.a}</div>
                )}
              </div>
            ))}
          </SectionCard>
        </div>
      </div>
    </div>
  );
}
