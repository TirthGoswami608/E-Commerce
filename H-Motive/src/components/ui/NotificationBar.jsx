import React from "react";
import { useNotification } from "./NotificationProvider";
import { COLORS as T } from "../../constants/theme";

export default function NotificationBar() {
  const { notifications, removeNotification } = useNotification();

  if (!notifications || notifications.length === 0) return null;

  return (
    <div style={{ position: "fixed", top: 16, right: 16, zIndex: 12000, display: "flex", flexDirection: "column", gap: 12 }}>
      {notifications.map((n) => (
        <div key={n.id} style={{ minWidth: 280, maxWidth: 420, background: "#fff", borderRadius: 12, padding: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.12)", display: "flex", alignItems: "flex-start", gap: 12 }}>
          <div style={{ flex: 1 }}>
            {n.title && <div style={{ fontWeight: 700, color: T.brown, marginBottom: 6 }}>{n.title}</div>}
            <div style={{ color: T.textMid, fontSize: 14 }}>{n.message}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <button onClick={() => removeNotification(n.id)} style={{ background: "transparent", border: "none", cursor: "pointer", color: T.textLight, fontSize: 18 }}>✕</button>
          </div>
        </div>
      ))}
    </div>
  );
}
