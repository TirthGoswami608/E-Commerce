import { useState } from "react";
import { COLORS as T } from "../constants/theme";
import SectionCard from "../components/SectionCard";
import FormInput from "../components/FormInput";
import BtnP from "../components/BtnP";

export default function LoginPage({ navigate, onLogin }) {
  const [email, setEmail] = useState("priya@example.com");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const [err, setErr] = useState("");

  const handleLogin = () => {
    if (!email || !pass) {
      setErr("Please fill in all fields.");
      return;
    }
    onLogin({ name: "Priya Sharma", email });
    navigate("dashboard");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, background: `linear-gradient(145deg,#FDF5E0 0%,#EAF5EE 60%,#FFF0F5 100%)`, position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 350, height: 350, borderRadius: "50%", top: "-10%", right: "-8%", background: "rgba(192,127,36,.1)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", bottom: "-5%", left: "-4%", background: "rgba(58,107,69,.08)", pointerEvents: "none" }} />
      <SectionCard style={{ maxWidth: 440, width: "100%", padding: "44px 40px", boxShadow: T.shXl, position: "relative", zIndex: 1, borderRadius: T.rXl }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 28 }}>
          <div style={{ width: 46, height: 46, borderRadius: "50%", background: `linear-gradient(135deg,${T.gold},${T.brownMid})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🍯</div>
          <span style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 24, fontWeight: 700, color: T.brown }}>H-Motive</span>
        </div>
        <h2 style={{ fontFamily: "'Libre Baskerville',serif", fontSize: 24, fontWeight: 700, color: T.brown, textAlign: "center", marginBottom: 6 }}>Welcome back</h2>
        <p style={{ textAlign: "center", fontSize: 14, color: T.textLight, marginBottom: 28 }}>Sign in to your organic wellness account</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 6 }}>
          {[["🌐", "Google"], ["📘", "Facebook"]].map(([ic, l]) => (
            <button key={l} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: 10, borderRadius: T.rSm, border: `1.5px solid ${T.border}`, background: T.white, fontSize: 13, fontWeight: 500, color: T.textMid, cursor: "pointer", transition: "all .2s", fontFamily: "inherit" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = T.gold; e.currentTarget.style.background = T.goldPale; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = T.white; }}>
              {ic} {l}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0" }}>
          <div style={{ flex: 1, height: 1, background: T.border }} />
          <span style={{ fontSize: 12, color: T.textLight }}>or continue with email</span>
          <div style={{ flex: 1, height: 1, background: T.border }} />
        </div>
        <FormInput label="Email Address" type="email" placeholder="priya@example.com" value={email} onChange={e => setEmail(e.target.value)} />
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textMid, marginBottom: 6 }}>Password</label>
          <div style={{ position: "relative" }}>
            <input type={show ? "text" : "password"} value={pass} onChange={e => setPass(e.target.value)} placeholder="Enter your password"
              style={{ width: "100%", padding: "11px 44px 11px 16px", borderRadius: T.rSm, border: `1.5px solid ${T.border}`, fontSize: 14, fontFamily: "inherit", outline: "none", transition: "border .2s" }}
              onFocus={e => e.target.style.borderColor = T.gold}
              onBlur={e => e.target.style.borderColor = T.border} />
            <button onClick={() => setShow(!show)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", fontSize: 16, color: T.textLight, cursor: "pointer" }}>{show ? "🙈" : "👁"}</button>
          </div>
        </div>
        {err && <p style={{ fontSize: 13, color: "#e74c3c", marginBottom: 12 }}>{err}</p>}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
          <label style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: T.textMid, cursor: "pointer" }}>
            <input type="checkbox" defaultChecked style={{ accentColor: T.gold }} /> Remember me
          </label>
          <button style={{ background: "none", border: "none", fontSize: 13, color: T.gold, fontWeight: 600, cursor: "pointer" }}>Forgot password?</button>
        </div>
        <BtnP onClick={handleLogin} style={{ width: "100%", padding: "14px", fontSize: 15 }}>Sign In →</BtnP>
        <p style={{ textAlign: "center", fontSize: 13, color: T.textLight, marginTop: 20 }}>
          Don't have an account?{" "}
          <button onClick={() => navigate("signup")} style={{ background: "none", border: "none", color: T.gold, fontWeight: 600, fontSize: 13, cursor: "pointer" }}>Create Account</button>
        </p>
      </SectionCard>
    </div>
  );
}
