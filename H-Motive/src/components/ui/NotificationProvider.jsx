import React, { createContext, useContext, useState, useCallback } from "react";

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback(({ title = "", message = "", ttl = 5000 }) => {
    const id = Date.now() + Math.random();
    const notif = { id, title, message };

    // show system notification when allowed
    try {
      if ("Notification" in window) {
        if (Notification.permission === "granted") {
          new Notification(title || "Notification", { body: message });
        } else if (Notification.permission !== "denied") {
          Notification.requestPermission().then((perm) => {
            if (perm === "granted") new Notification(title || "Notification", { body: message });
          });
        }
      }
    } catch (e) {
      // ignore
      console.warn("System notification failed", e);
    }

    setNotifications((s) => [notif, ...s]);

    // auto-remove after ttl
    if (ttl > 0) {
      setTimeout(() => {
        setNotifications((s) => s.filter((n) => n.id !== id));
      }, ttl);
    }

    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications((s) => s.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error("useNotification must be used within NotificationProvider");
  return ctx;
};

export default NotificationProvider;
