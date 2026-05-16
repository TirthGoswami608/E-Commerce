import { COLORS as T } from "../../constants/theme";

export default function AdminStatCard({ label, value, icon, change, isPositive }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "24px",
      padding: "24px",
      border: `1px solid ${T.border}`,
      boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
      flex: 1
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div style={{ 
          width: 54, height: 54, borderRadius: "16px", 
          background: T.ivory, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 
        }}>{icon}</div>
        <div style={{ 
          fontSize: 13, fontWeight: 700, 
          color: isPositive ? T.green : "#E74C3C",
          background: isPositive ? `${T.green}10` : "#E74C3C10",
          padding: "4px 10px", borderRadius: "100px"
        }}>
          {isPositive ? "↑" : "↓"} {change}%
        </div>
      </div>
      <div style={{ fontSize: 32, fontWeight: 800, color: T.brown, marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 14, color: T.textLight, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px" }}>{label}</div>
    </div>
  );
}
