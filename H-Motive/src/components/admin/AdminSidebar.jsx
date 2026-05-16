import { COLORS as T } from "../../constants/theme";

export default function AdminSidebar({ activeTab, setActiveTab, navigate }) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "products", label: "Products", icon: "🛍️" },
    { id: "orders", label: "Orders", icon: "📦" },
    { id: "customers", label: "Customers", icon: "👥" },
    { id: "events", label: "Event Manager", icon: "📅" },
    { id: "rewards", label: "Reward Systems", icon: "✨" },

    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <aside style={{
      width: 280,
      background: T.brown,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      padding: "40px 20px",
      position: "fixed",
      left: 0,
      top: 0,
      zIndex: 100
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 60, padding: "0 10px" }}>
        <div style={{ 
          width: 36, height: 36, borderRadius: "10px", 
          background: `linear-gradient(135deg, ${T.gold}, ${T.brownLight})`, 
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 
        }}>🍯</div>
        <span style={{ 
          fontFamily: "'Libre Baskerville', serif", fontSize: 20, fontWeight: 700, 
          color: "#fff", letterSpacing: "-0.5px" 
        }}>Admin Panel</span>
      </div>

      <nav style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            style={{
              display: "flex", alignItems: "center", gap: 14, padding: "14px 18px",
              borderRadius: "14px", border: "none", cursor: "pointer", fontSize: 15,
              fontWeight: activeTab === item.id ? 700 : 500,
              background: activeTab === item.id ? "rgba(255,255,255,0.1)" : "transparent",
              color: activeTab === item.id ? T.goldLight : "rgba(255,255,255,0.6)",
              transition: "all 0.3s",
              textAlign: "left"
            }}
            onMouseEnter={e => { if(activeTab !== item.id) e.target.style.background = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={e => { if(activeTab !== item.id) e.target.style.background = "transparent"; }}>
            <span style={{ fontSize: 20 }}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>

      <div style={{ marginTop: "auto", padding: "0 10px" }}>
        <button 
          onClick={() => navigate("home")}
          style={{
            width: "100%", display: "flex", alignItems: "center", gap: 14, padding: "14px 18px",
            borderRadius: "14px", border: `1px solid rgba(255,255,255,0.1)`, 
            background: "transparent", color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: 600
          }}>
          <span>🏠</span> View Storefront
        </button>
      </div>
    </aside>
  );
}
