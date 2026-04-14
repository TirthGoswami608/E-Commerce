import { useState } from "react";
import { COLORS as T } from "../constants/theme";
import SectionCard from "../components/SectionCard";
import FormInput from "../components/FormInput";
import BtnP from "../components/BtnP";

export default function SignupPage({ navigate, onLogin }) {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", pass: "", confirm: "" });
  const [showP, setShowP] = useState(false);

  const handleSignup = () => {
    if (!form.firstName || !form.email || !form.pass) return;
    if (form.pass !== form.confirm) return;
    onLogin({ name: `${form.firstName} ${form.lastName}`, email: form.email });
    navigate("dashboard");
  };

  const f = (k) => ({ value: form[k], onChange: e => setForm({ ...form, [k]: e.target.value }) });

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, background: `linear-gradient(145deg,#EAF5EE 0%,#FDF5E0 50%,#F0F8FF 100%)`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", top: "-8%", left: "-6%", background: "rgba(58,107,69,.09)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", bottom: "-4%", right: "-3%", background: "rgba(192,127,36,.08)", pointerEvents: "none" }} />
      <SectionCard style={{ maxWidth: 440, width: "100%", padding: "44px 40px", boxShadow: T.shXl, position: "relative", zIndex: 1, borderRadius: T.rXl }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: `linear-gradient(135deg,${T.gold},${T.brownMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🍯</div>
          <span style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 24, fontWeight: 700, color: T.brown }}>H-Motive</span>
        </div>
        <h2 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 24, fontWeight: 700, color: T.brown, textAlign: "center", marginBottom: 6 }}>Join H-Motive</h2>
        <p style={{ textAlign: "center", fontSize: 14, color: T.textLight, marginBottom: 26 }}>Start your organic wellness journey today</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <FormInput label="First Name *" placeholder="Priya" {...f("firstName")} />
          <FormInput label="Last Name *" placeholder="Sharma" {...f("lastName")} />
        </div>
        <FormInput label="Email Address *" type="email" placeholder="priya@example.com" {...f("email")} />
        <FormInput label="Phone Number" placeholder="+91 98765 43210" {...f("phone")} />
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textMid, marginBottom: 6 }}>Password *</label>
          <div style={{ position: "relative" }}>
            <input type={showP ? "text" : "password"} placeholder="Min 8 characters" {...f("pass")}
              style={{ width: "100%", padding: "11px 44px 11px 16px", borderRadius: T.rSm, border: `1.5px solid ${T.border}`, fontSize: 14, fontFamily: "inherit", outline: "none" }}
              onFocus={e => e.target.style.borderColor = T.gold}
              onBlur={e => e.target.style.borderColor = T.border} />
            <button onClick={() => setShowP(!showP)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: 16, color: T.textLight, cursor: "pointer" }}>{showP ? "🙈" : "👁"}</button>
          </div>
        </div>
        <FormInput label="Confirm Password *" type="password" placeholder="Repeat password" {...f("confirm")} />
        <label style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: T.textMid, cursor: "pointer", marginBottom: 18 }}>
          <input type="checkbox" defaultChecked style={{ accentColor: T.gold, marginTop: 2, flexShrink: 0 }} />
          I agree to the <button style={{ background: "none", border: "none", color: T.gold, fontWeight: 600, fontSize: 13, cursor: "pointer", padding: 0 }}>Terms</button> and <button style={{ background: "none", border: "none", color: T.gold, fontWeight: 600, fontSize: 13, cursor: "pointer", padding: 0 }}>Privacy Policy</button>
        </label>
        <BtnP onClick={handleSignup} style={{ width: "100%", padding: "14px", fontSize: 15 }}>Create Account →</BtnP>
        <div style={{ background: T.greenPale, borderRadius: T.rSm, padding: "12px 14px", marginTop: 16, display: "flex", alignItems: "flex-start", gap: 10 }}>
          <span style={{ fontSize: 18 }}>🎁</span>
          <span style={{ fontSize: 12, color: T.green, fontWeight: 500, lineHeight: 1.5 }}>Get <strong>₹200 off</strong> your first order! Code: <strong>WELCOME200</strong></span>
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: T.textLight, marginTop: 18 }}>
          Already have an account?{" "}
          <button onClick={() => navigate("login")} style={{ background: "none", border: "none", color: T.gold, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Sign In</button>
        </p>
      </SectionCard>
    </div>
  );
}
