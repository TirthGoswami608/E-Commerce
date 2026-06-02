import { COLORS as T } from "../../constants/theme";

export default function AdminHeader({ title, user = "Admin" }) {
  return (
    <header style={{
      height: 80,
      background: "#fff",
      borderBottom: `1px solid ${T.border}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 40px",
      position: "sticky",
      top: 0,
      zIndex: 90
    }}>
      <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 24, color: T.brown, margin: 0 }}>{title}</h2>

      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <div style={{ position: "relative" }}>
          <input 
            type="text" 
            placeholder="Search orders, products..." 
            style={{
              padding: "10px 16px 10px 40px", borderRadius: "100px", border: `1px solid ${T.border}`,
              background: "#F9F6F2", width: 300, fontSize: 14, color: T.brown
            }} 
          />
          <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", opacity: 0.5 }}>🔍</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.brown }}>{user}</div>
            <div style={{ fontSize: 12, color: T.textLight, fontWeight: 600 }}>Super Admin</div>
          </div>
          <div style={{ 
            width: 44, height: 44, borderRadius: "14px", background: T.goldPale, 
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 
          }}>👑</div>
        </div>
      </div>
    </header>
  );
}
