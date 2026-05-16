import { useState } from "react";
import AdminHeader from "../components/admin/AdminHeader";
import AdminSidebar from "../components/admin/AdminSidebar";
import AdminStatCard from "../components/admin/AdminStatCard";
import { COLORS as T } from "../constants/theme";

export default function AdminPage({ navigate }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const stats = [
    { label: "Total Revenue", value: "₹4,25,800", icon: "💰", change: 12.5, isPositive: true },
    { label: "Total Orders", value: "1,284", icon: "📦", change: 8.2, isPositive: true },
    { label: "Active Customers", value: "842", icon: "👥", change: 3.1, isPositive: false },
    { label: "Avg. Order Value", value: "₹3,420", icon: "💎", change: 5.4, isPositive: true },
  ];

  const products = [
    { id: 1, name: "Wild Forest Honey", stock: 42, price: "₹850", category: "Honey" },
    { id: 2, name: "Herbal Glow Kit", stock: 15, price: "₹1,200", category: "Wellness" },
    { id: 3, name: "Organic Neem Oil", stock: 0, price: "₹450", category: "Personal Care" },
    { id: 4, name: "Raw Honeycomb", stock: 8, price: "₹1,500", category: "Honey" },
  ];

  const customers = [
    { id: 1, name: "Rahul Mehta", email: "rahul@example.com", points: 1250, orders: 12, status: "Active" },
    { id: 2, name: "Sita Sharma", email: "sita@example.com", points: 450, orders: 3, status: "Active" },
    { id: 3, name: "Amit Patel", email: "amit.p@example.com", points: 80, orders: 1, status: "Inactive" },
    { id: 4, name: "Priya Das", email: "priya@example.com", points: 3400, orders: 28, status: "VIP" },
  ];

  const events = [
    { id: 1, title: "Grand Harvest Sale", category: "Honey", discount: "20%", status: "Active", end: "April 25" },
    { id: 2, name: "Wellness Week", category: "Wellness", discount: "15%", status: "Scheduled", end: "May 02" },
  ];

  const ordersData = [
    { 
      id: "#HM-2025-001", customer: "Rahul Mehta", email: "rahul@example.com", amount: "₹2,450", items: 3, status: "Delivered", date: "May 12, 2026", trackingId: "HM2025001TRACK",
      orderItems: [{ name: "Wild Forest Honey", qty: 1, price: "₹1,596" }, { name: "Ashwagandha Root", qty: 2, price: "₹1,890" }],
      address: "42, Rajpath Street, Ahmedabad, Gujarat 380015", paymentMethod: "Card", notes: "", refundStatus: "None", refundAmount: "₹0"
    },
    { 
      id: "#HM-2025-002", customer: "Sita Sharma", email: "sita@example.com", amount: "₹1,890", items: 2, status: "Shipped", date: "May 11, 2026", trackingId: "HM2025002TRACK",
      orderItems: [{ name: "Manuka Honey 400+", qty: 1, price: "₹3,779" }, { name: "Black Seed Oil", qty: 1, price: "₹2,099" }],
      address: "123, Vesu Road, Surat, Gujarat 395007", paymentMethod: "UPI", notes: "Urgent delivery", refundStatus: "None", refundAmount: "₹0"
    },
    { 
      id: "#HM-2025-003", customer: "Amit Patel", email: "amit.p@example.com", amount: "₹3,420", items: 5, status: "Processing", date: "May 10, 2026", trackingId: "HM2025003TRACK",
      orderItems: [{ name: "Cold-Press Coconut Oil", qty: 2, price: "₹1,343" }, { name: "Turmeric + Black Pepper", qty: 2, price: "₹1,386" }, { name: "Raw Cacao Powder", qty: 1, price: "₹1,091" }],
      address: "56, Commerce Avenue, Mumbai, Maharashtra 400001", paymentMethod: "COD", notes: "Gift wrapping requested", refundStatus: "None", refundAmount: "₹0"
    },
    { 
      id: "#HM-2025-004", customer: "Priya Das", email: "priya@example.com", amount: "₹890", items: 1, status: "Pending Payment", date: "May 10, 2026", trackingId: "HM2025004TRACK",
      orderItems: [{ name: "Moringa Leaf Powder", qty: 1, price: "₹1,679" }],
      address: "789, Park Lane, Bangalore, Karnataka 560001", paymentMethod: "Card Pending", notes: "", refundStatus: "None", refundAmount: "₹0"
    },
    { 
      id: "#HM-2025-005", customer: "Raj Kumar", email: "raj@example.com", amount: "₹5,670", items: 8, status: "Delivered", date: "May 09, 2026", trackingId: "HM2025005TRACK",
      orderItems: [{ name: "Sidr Honey", qty: 1, price: "₹4,368" }, { name: "Herbal Blend", qty: 3, price: "₹890" }, { name: "Organic Tea", qty: 4, price: "₹450" }],
      address: "321, Green Street, Delhi, Delhi 110001", paymentMethod: "Net Banking", notes: "", refundStatus: "None", refundAmount: "₹0"
    },
  ];

  const [orderFilter, setOrderFilter] = useState("All");
  const [searchOrder, setSearchOrder] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [orders, setOrders] = useState(ordersData);
  const [orderNotes, setOrderNotes] = useState("");
  const [showRefundForm, setShowRefundForm] = useState(false);
  const [refundAmount, setRefundAmount] = useState("0");
  const [refundReason, setRefundReason] = useState("Customer Request");

  const filteredOrders = orders.filter(o => {
    const matchFilter = orderFilter === "All" || o.status === orderFilter;
    const matchSearch = o.id.toLowerCase().includes(searchOrder.toLowerCase()) || 
                       o.customer.toLowerCase().includes(searchOrder.toLowerCase());
    return matchFilter && matchSearch;
  });

  const openOrderModal = (order) => {
    setSelectedOrder(order);
    setOrderNotes(order.notes);
    setShowModal(true);
  };

  const closeOrderModal = () => {
    setShowModal(false);
    setSelectedOrder(null);
    setShowRefundForm(false);
  };

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    if (selectedOrder?.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
    alert(`Order ${orderId} status updated to ${newStatus}`);
  };

  const saveOrderNotes = (orderId) => {
    setOrders(orders.map(o => o.id === orderId ? { ...o, notes: orderNotes } : o));
    alert("Notes saved successfully!");
  };

  const processRefund = (orderId) => {
    const updatedOrders = orders.map(o => {
      if (o.id === orderId) {
        return { 
          ...o, 
          refundStatus: "Processed", 
          refundAmount: refundAmount,
          status: "Refunded"
        };
      }
      return o;
    });
    setOrders(updatedOrders);
    alert(`Refund of ${refundAmount} processed for order ${orderId}`);
    setShowRefundForm(false);
    setRefundAmount("0");
  };

  const sendEmailNotification = (orderId, orderCustomer, orderEmail) => {
    alert(`Email notification sent to ${orderEmail} about order ${orderId}`);
  };

  const printInvoice = (order) => {
    const printContent = `
      H-MOTIVE INVOICE
      Order ID: ${order.id}
      Customer: ${order.customer}
      Email: ${order.email}
      Date: ${order.date}
      
      Items:
      ${order.orderItems.map(item => `${item.name} x${item.qty} - ${item.price}`).join('\n')}
      
      Total: ${order.amount}
      Address: ${order.address}
      Status: ${order.status}
      Tracking ID: ${order.trackingId}
    `;
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<pre>" + printContent + "</pre>");
    printWindow.document.close();
    printWindow.print();
  };

  const exportToCSV = () => {
    const headers = ["Order ID", "Customer", "Email", "Amount", "Items", "Status", "Date"];
    const rows = orders.map(o => [o.id, o.customer, o.email, o.amount, o.items, o.status, o.date]);
    
    let csv = headers.join(",") + "\n";
    rows.forEach(row => {
      csv += row.map(cell => `"${cell}"`).join(",") + "\n";
    });
    
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `orders_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "products":
        return (
          <div className="fade-in">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
              <h3 style={{ fontSize: 20, color: T.brown, fontWeight: 700 }}>Inventors & Products</h3>
              <button style={{ 
                background: T.brown, color: "#fff", border: "none", borderRadius: "100px", 
                padding: "12px 24px", fontWeight: 700, cursor: "pointer" 
              }}>+ Add New Product</button>
            </div>
            <div style={{ background: "#fff", borderRadius: "24px", border: `1px solid ${T.border}`, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "#F9F6F2", borderBottom: `1px solid ${T.border}` }}>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Product Name</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Category</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Price</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Stock Status</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(p => (
                    <tr key={p.id} style={{ borderBottom: `1px solid ${T.border}`, transition: "all 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "#FEFAF3"} onMouseLeave={e => e.currentTarget.style.background = "none"}>
                      <td style={{ padding: "20px 24px", fontWeight: 700, color: T.brown }}>{p.name}</td>
                      <td style={{ padding: "20px 24px", color: T.textMid }}>{p.category}</td>
                      <td style={{ padding: "20px 24px", fontWeight: 800 }}>{p.price}</td>
                      <td style={{ padding: "20px 24px" }}>
                        <span style={{ 
                          padding: "6px 12px", borderRadius: "100px", fontSize: 12, fontWeight: 700,
                          background: p.stock > 10 ? `${T.green}15` : p.stock > 0 ? `${T.gold}15` : "#E74C3C15",
                          color: p.stock > 10 ? T.green : p.stock > 0 ? T.gold : "#E74C3C"
                        }}>
                          {p.stock > 10 ? `In Stock (${p.stock})` : p.stock > 0 ? `Low Stock (${p.stock})` : "Out of Stock"}
                        </span>
                      </td>
                      <td style={{ padding: "20px 24px" }}>
                        <div style={{ display: "flex", gap: 12 }}>
                          <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 18 }}>✏️</button>
                          <button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 18 }}>🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "orders":
        return (
          <div className="fade-in">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, gap: 16, flexWrap: "wrap" }}>
              <h3 style={{ fontSize: 20, color: T.brown, fontWeight: 700 }}>Orders Management</h3>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <input 
                  type="text" 
                  placeholder="Search Order ID or Customer..." 
                  value={searchOrder}
                  onChange={(e) => setSearchOrder(e.target.value)}
                  style={{ padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#F9F6F2", width: 280 }} 
                />
                <select 
                  value={orderFilter}
                  onChange={(e) => setOrderFilter(e.target.value)}
                  style={{ padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#F9F6F2" }}>
                  <option>All</option>
                  <option>Pending Payment</option>
                  <option>Processing</option>
                  <option>Shipped</option>
                  <option>Delivered</option>
                </select>
              </div>
            </div>

            <div style={{ background: "#fff", borderRadius: "24px", border: `1px solid ${T.border}`, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "#F9F6F2", borderBottom: `1px solid ${T.border}` }}>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Order ID</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Customer</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Amount</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Items</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Status</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Date</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.length > 0 ? (
                    filteredOrders.map(ord => (
                      <tr key={ord.id} onClick={() => openOrderModal(ord)} style={{ borderBottom: `1px solid ${T.border}`, transition: "all 0.2s", cursor: "pointer" }} onMouseEnter={e => e.currentTarget.style.background = "#FEFAF3"} onMouseLeave={e => e.currentTarget.style.background = "none"}>
                        <td style={{ padding: "20px 24px", fontWeight: 700, color: T.brown }}>{ord.id}</td>
                        <td style={{ padding: "20px 24px", color: T.textMid }}>{ord.customer}</td>
                        <td style={{ padding: "20px 24px", fontWeight: 800 }}>{ord.amount}</td>
                        <td style={{ padding: "20px 24px", fontWeight: 600 }}>{ord.items}</td>
                        <td style={{ padding: "20px 24px" }}>
                          <span style={{ 
                            padding: "6px 12px", borderRadius: "100px", fontSize: 12, fontWeight: 700,
                            background: ord.status === "Delivered" ? `${T.green}15` : ord.status === "Shipped" ? `${T.gold}15` : ord.status === "Processing" ? "#e3f2fd15" : ord.status === "Pending Payment" ? "#FF980015" : "#E74C3C15",
                            color: ord.status === "Delivered" ? T.green : ord.status === "Shipped" ? T.gold : ord.status === "Processing" ? "#1976d2" : ord.status === "Pending Payment" ? "#ff6f00" : "#E74C3C"
                          }}>
                            {ord.status}
                          </span>
                        </td>
                        <td style={{ padding: "20px 24px", fontSize: 13, color: T.textLight }}>{ord.date}</td>
                        <td style={{ padding: "20px 24px" }}>
                          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                            <button onClick={(e) => { e.stopPropagation(); openOrderModal(ord); }} style={{ border: "none", background: "none", cursor: "pointer", fontSize: 18, padding: 4 }} title="View Details">👁️</button>
                            <button onClick={(e) => { e.stopPropagation(); openOrderModal(ord); }} style={{ border: "none", background: "none", cursor: "pointer", fontSize: 18, padding: 4 }} title="Edit">✏️</button>
                            <button onClick={(e) => { e.stopPropagation(); alert("Delete order " + ord.id + "?"); }} style={{ border: "none", background: "none", cursor: "pointer", fontSize: 18, padding: 4 }} title="Delete">🗑️</button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" style={{ padding: "40px", textAlign: "center", color: T.textLight }}>
                        No orders found matching your filters.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div style={{ display: "flex", gap: 12, marginTop: 32, marginBottom: 32 }}>
              <button 
                onClick={exportToCSV}
                style={{ padding: "12px 20px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#fff", color: T.brown, fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
                📥 Export to CSV
              </button>
              <button 
                style={{ padding: "12px 20px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#fff", color: T.brown, fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
                🔔 Email Notifications
              </button>
              <button 
                style={{ padding: "12px 20px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#fff", color: T.brown, fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
                📊 Generate Report
              </button>
            </div>

            {/* Order Summary Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 32 }}>
              {[
                { label: "Total Orders", value: "1,284", icon: "📦", color: T.gold },
                { label: "Delivered", value: "1,126", icon: "✅", color: T.green },
                { label: "In Transit", value: "98", icon: "🚚", color: "#FF9800" },
                { label: "Pending", value: "60", icon: "⏳", color: "#1976D2" },
              ].map((stat, i) => (
                <div key={i} style={{ background: "#fff", borderRadius: "20px", padding: "24px", border: `1px solid ${T.border}`, textAlign: "center" }}>
                  <div style={{ fontSize: 32, marginBottom: 12 }}>{stat.icon}</div>
                  <div style={{ fontSize: 13, color: T.textLight, fontWeight: 600, marginBottom: 8 }}>{stat.label}</div>
                  <div style={{ fontSize: 24, fontWeight: 800, color: stat.color }}>{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Order Details Modal */}
            {showModal && selectedOrder && (
              <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}>
                <div style={{ background: "#fff", borderRadius: "24px", padding: "40px", maxWidth: 800, maxHeight: "90vh", overflowY: "auto", boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, borderBottom: `1px solid ${T.border}`, paddingBottom: 20 }}>
                    <h2 style={{ fontSize: 24, color: T.brown, fontWeight: 700 }}>Order Details</h2>
                    <button onClick={closeOrderModal} style={{ background: "none", border: "none", fontSize: 28, cursor: "pointer" }}>✕</button>
                  </div>

                  {/* Order Header Info */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 30 }}>
                    <div>
                      <div style={{ fontSize: 12, color: T.textLight, fontWeight: 600, marginBottom: 4 }}>ORDER ID</div>
                      <div style={{ fontSize: 18, color: T.brown, fontWeight: 800 }}>{selectedOrder.id}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: T.textLight, fontWeight: 600, marginBottom: 4 }}>TRACKING ID</div>
                      <div style={{ fontSize: 18, color: T.brown, fontWeight: 800 }}>{selectedOrder.trackingId}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: T.textLight, fontWeight: 600, marginBottom: 4 }}>CUSTOMER</div>
                      <div style={{ fontSize: 16, color: T.brown, fontWeight: 700 }}>{selectedOrder.customer}</div>
                      <div style={{ fontSize: 13, color: T.textLight }}>{selectedOrder.email}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 12, color: T.textLight, fontWeight: 600, marginBottom: 4 }}>DATE</div>
                      <div style={{ fontSize: 16, color: T.brown, fontWeight: 700 }}>{selectedOrder.date}</div>
                    </div>
                  </div>

                  {/* Quick Status Update */}
                  <div style={{ background: T.ivory, borderRadius: "16px", padding: "20px", marginBottom: 30 }}>
                    <div style={{ fontSize: 14, color: T.textLight, fontWeight: 600, marginBottom: 12 }}>🚀 QUICK STATUS UPDATE</div>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      {["Pending Payment", "Processing", "Shipped", "Delivered"].map(status => (
                        <button
                          key={status}
                          onClick={() => updateOrderStatus(selectedOrder.id, status)}
                          style={{
                            padding: "8px 16px", borderRadius: "8px", border: selectedOrder.status === status ? `2px solid ${T.gold}` : `1px solid ${T.border}`,
                            background: selectedOrder.status === status ? `${T.gold}15` : "#fff",
                            color: T.brown, fontWeight: 600, cursor: "pointer", fontSize: 12
                          }}>
                          {status === "Pending Payment" ? "⏳ Pending" : status === "Processing" ? "⚙️ Processing" : status === "Shipped" ? "🚚 Shipped" : "✅ Delivered"}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div style={{ marginBottom: 30 }}>
                    <div style={{ fontSize: 16, color: T.brown, fontWeight: 700, marginBottom: 16 }}>📦 Order Items</div>
                    <div style={{ background: T.ivory, borderRadius: "16px", overflow: "hidden" }}>
                      {selectedOrder.orderItems.map((item, i) => (
                        <div key={i} style={{ padding: "16px", borderBottom: i < selectedOrder.orderItems.length - 1 ? `1px solid ${T.border}` : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div>
                            <div style={{ fontSize: 14, fontWeight: 700, color: T.brown }}>{item.name}</div>
                            <div style={{ fontSize: 12, color: T.textLight }}>Qty: {item.qty}</div>
                          </div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: T.gold }}>{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div style={{ marginBottom: 30 }}>
                    <div style={{ fontSize: 16, color: T.brown, fontWeight: 700, marginBottom: 12 }}>📍 Delivery Address</div>
                    <div style={{ background: T.ivory, borderRadius: "12px", padding: "16px", fontSize: 14, color: T.textMid, lineHeight: "1.6" }}>
                      {selectedOrder.address}
                    </div>
                  </div>

                  {/* Payment & Total */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 30 }}>
                    <div>
                      <div style={{ fontSize: 12, color: T.textLight, fontWeight: 600, marginBottom: 4 }}>PAYMENT METHOD</div>
                      <div style={{ fontSize: 16, color: T.brown, fontWeight: 700 }}>{selectedOrder.paymentMethod}</div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 12, color: T.textLight, fontWeight: 600, marginBottom: 4 }}>ORDER TOTAL</div>
                      <div style={{ fontSize: 28, color: T.gold, fontWeight: 800 }}>{selectedOrder.amount}</div>
                    </div>
                  </div>

                  {/* Internal Notes */}
                  <div style={{ marginBottom: 30 }}>
                    <div style={{ fontSize: 14, color: T.brown, fontWeight: 700, marginBottom: 12 }}>📝 Internal Notes</div>
                    <textarea
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      placeholder="Add order notes here..."
                      style={{ width: "100%", padding: "12px", borderRadius: "8px", border: `1px solid ${T.border}`, fontSize: 14, fontFamily: "inherit", height: 80, resize: "vertical" }}
                    />
                    <button 
                      onClick={() => saveOrderNotes(selectedOrder.id)}
                      style={{ marginTop: 12, padding: "10px 20px", borderRadius: "8px", background: T.gold, color: "#fff", border: "none", fontWeight: 700, cursor: "pointer" }}>
                      💾 Save Notes
                    </button>
                  </div>

                  {/* Refund Management */}
                  <div style={{ background: "#FFE5E5", borderRadius: "16px", padding: "20px", marginBottom: 30 }}>
                    <div style={{ fontSize: 14, color: "#C92A2A", fontWeight: 700, marginBottom: 12 }}>💰 Refund Management</div>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: "block", fontSize: 12, color: "#C92A2A", fontWeight: 600, marginBottom: 6 }}>Refund Amount</label>
                        <input 
                          type="text" 
                          value={refundAmount}
                          onChange={(e) => setRefundAmount(e.target.value)}
                          placeholder="₹0"
                          style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #E8A0A0", fontSize: 14 }}
                        />
                      </div>
                      <button 
                        onClick={() => processRefund(selectedOrder.id)}
                        style={{ alignSelf: "flex-end", padding: "10px 20px", borderRadius: "8px", background: "#C92A2A", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer" }}>
                        Process Refund
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: "flex", gap: 12, justifyContent: "space-between", borderTop: `1px solid ${T.border}`, paddingTop: 20 }}>
                    <div style={{ display: "flex", gap: 10 }}>
                      <button 
                        onClick={() => printInvoice(selectedOrder)}
                        style={{ padding: "12px 20px", borderRadius: "8px", background: T.brownLight, color: "#fff", border: "none", fontWeight: 700, cursor: "pointer" }}>
                        🖨️ Print Invoice
                      </button>
                      <button 
                        onClick={() => sendEmailNotification(selectedOrder.id, selectedOrder.customer, selectedOrder.email)}
                        style={{ padding: "12px 20px", borderRadius: "8px", background: T.gold, color: "#fff", border: "none", fontWeight: 700, cursor: "pointer" }}>
                        📧 Send Email
                      </button>
                    </div>
                    <button 
                      onClick={closeOrderModal}
                      style={{ padding: "12px 20px", borderRadius: "8px", border: `1px solid ${T.border}`, background: "#fff", color: T.brown, fontWeight: 700, cursor: "pointer" }}>
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      case "events":
        return (
          <div className="fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 32 }}>
            {/* Create Event Form */}
            <div style={{ background: "#fff", borderRadius: "32px", padding: "32px", border: `1px solid ${T.border}`, height: "fit-content" }}>
              <h3 style={{ fontSize: 18, color: T.brown, fontWeight: 700, marginBottom: 24 }}>Schedule New Event</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textLight, marginBottom: 8 }}>Event Title</label>
                  <input type="text" placeholder="e.g. Summer Honey Fest" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#F9F6F2" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textLight, marginBottom: 8 }}>Target Category</label>
                    <select style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#F9F6F2" }}>
                      <option>All Categories</option>
                      <option>Honey</option>
                      <option>Wellness</option>
                      <option>Personal Care</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textLight, marginBottom: 8 }}>Discount %</label>
                    <input type="number" placeholder="10" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#F9F6F2" }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textLight, marginBottom: 8 }}>End Date</label>
                  <input type="date" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#F9F6F2" }} />
                </div>
                <button style={{ background: T.gold, color: "#fff", border: "none", borderRadius: "100px", padding: "14px", fontWeight: 700, marginTop: 10 }}>Launch Event</button>
              </div>
            </div>

            {/* Existing Events List */}
            <div style={{ background: "#fff", borderRadius: "32px", padding: "32px", border: `1px solid ${T.border}` }}>
              <h3 style={{ fontSize: 18, color: T.brown, fontWeight: 700, marginBottom: 24 }}>Active & Upcoming</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {events.map(e => (
                  <div key={e.id} style={{ padding: "24px", borderRadius: "24px", background: "#FDFCFB", border: `1px solid ${T.border}`, position: "relative" }}>
                    <div style={{ position: "absolute", top: 20, right: 24, fontSize: 11, fontWeight: 800, textTransform: "uppercase", padding: "4px 10px", borderRadius: "100px", background: e.status === "Active" ? `${T.green}15` : "#eee", color: e.status === "Active" ? T.green : "#888" }}>
                      {e.status}
                    </div>
                    <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
                      <div style={{ width: 60, height: 60, borderRadius: "16px", background: T.goldPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🎉</div>
                      <div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: T.brown, marginBottom: 4 }}>{e.title || e.name}</div>
                        <div style={{ fontSize: 13, color: T.textLight }}>
                          <strong>{e.discount} OFF</strong> on {e.category} till {e.end}
                        </div>
                      </div>
                    </div>
                    <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
                      <button style={{ padding: "8px 16px", borderRadius: "100px", border: `1px solid ${T.border}`, background: "#fff", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Edit Details</button>
                      <button style={{ padding: "8px 16px", borderRadius: "100px", border: "none", background: "#E74C3C15", color: "#E74C3C", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Stop Event</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "customers":

        return (
          <div className="fade-in">
            <h3 style={{ fontSize: 20, color: T.brown, fontWeight: 700, marginBottom: 32 }}>Customer Directory</h3>
            <div style={{ background: "#fff", borderRadius: "24px", border: `1px solid ${T.border}`, overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                <thead>
                  <tr style={{ background: "#F9F6F2", borderBottom: `1px solid ${T.border}` }}>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Customer</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Points</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Orders</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Status</th>
                    <th style={{ padding: "20px 24px", fontSize: 13, fontWeight: 700, color: T.textLight, textTransform: "uppercase" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(c => (
                    <tr key={c.id} style={{ borderBottom: `1px solid ${T.border}` }}>
                      <td style={{ padding: "20px 24px" }}>
                        <div style={{ fontWeight: 700, color: T.brown }}>{c.name}</div>
                        <div style={{ fontSize: 13, color: T.textLight }}>{c.email}</div>
                      </td>
                      <td style={{ padding: "20px 24px", fontWeight: 800, color: T.gold }}>{c.points} PTS</td>
                      <td style={{ padding: "20px 24px", fontWeight: 700 }}>{c.orders}</td>
                      <td style={{ padding: "20px 24px" }}>
                        <span style={{ 
                          padding: "6px 12px", borderRadius: "100px", fontSize: 11, fontWeight: 800, textTransform: "uppercase",
                          background: c.status === "VIP" ? `${T.gold}15` : c.status === "Active" ? `${T.green}15` : "#eee",
                          color: c.status === "VIP" ? T.gold : c.status === "Active" ? T.green : "#888"
                        }}>
                          {c.status}
                        </span>
                      </td>
                      <td style={{ padding: "20px 24px" }}><button style={{ border: "none", background: "none", cursor: "pointer", fontSize: 18 }}>👁️</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      case "rewards":
        return (
          <div className="fade-in" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            <div style={{ background: "#fff", borderRadius: "32px", padding: "32px", border: `1px solid ${T.border}` }}>
              <h3 style={{ fontSize: 18, color: T.brown, fontWeight: 700, marginBottom: 24 }}>Point Configuration</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { label: "Points per ₹1 Spent", value: "0.1" },
                  { label: "Signup Bonus Points", value: "100" },
                  { label: "Review Reward Points", value: "50" },
                  { label: "Referral Bonus (Referrer)", value: "500" },
                ].map((s, i) => (
                  <div key={i}>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textLight, marginBottom: 8 }}>{s.label}</label>
                    <input type="text" defaultValue={s.value} style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}`, background: "#F9F6F2" }} />
                  </div>
                ))}
                <button style={{ background: T.brown, color: "#fff", border: "none", borderRadius: "100px", padding: "14px", fontWeight: 700, marginTop: 10 }}>Save Changes</button>
              </div>
            </div>
            <div style={{ background: "#fff", borderRadius: "32px", padding: "32px", border: `2px dashed ${T.border}`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
              <div style={{ fontSize: 48, marginBottom: 16 }}>🎁</div>
              <h4 style={{ fontSize: 18, color: T.brown, fontWeight: 700, marginBottom: 12 }}>New Reward Scheme</h4>
              <p style={{ fontSize: 14, color: T.textMid, marginBottom: 24 }}>Create seasonal reward campaigns to boost sales.</p>
              <button style={{ border: `2px solid ${T.brown}`, background: "none", color: T.brown, fontWeight: 700, padding: "12px 24px", borderRadius: "100px" }}>+ Create Campaign</button>
            </div>
          </div>
        );
      case "settings":
        return (
          <div className="fade-in" style={{ maxWidth: 800 }}>
            <div style={{ background: "#fff", borderRadius: "32px", padding: "40px", border: `1px solid ${T.border}` }}>
              <h3 style={{ fontSize: 20, color: T.brown, fontWeight: 700, marginBottom: 32 }}>Store Settings</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: T.textLight, marginBottom: 8 }}>Store Name</label>
                    <input type="text" defaultValue="H-Motive Organic" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}` }} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: T.textLight, marginBottom: 8 }}>Support Email</label>
                    <input type="text" defaultValue="hello@hmotive.org" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}` }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13, fontWeight: 700, color: T.textLight, marginBottom: 8 }}>Store Address</label>
                  <textarea defaultValue="📍 Ahmedabad, India" style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: `1px solid ${T.border}`, height: 80 }} />
                </div>
                <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontWeight: 700, color: T.brown }}>Maintenance Mode</div>
                    <div style={{ fontSize: 13, color: T.textLight }}>Hide storefront from customers</div>
                  </div>
                  <div style={{ width: 44, height: 24, borderRadius: 12, background: "#ddd", position: "relative" }}>
                    <div style={{ position: "absolute", top: 2, left: 2, width: 20, height: 20, borderRadius: "50%", background: "#fff" }} />
                  </div>
                </div>
                <button style={{ background: T.gold, color: "#fff", border: "none", borderRadius: "100px", padding: "16px", fontWeight: 800, fontSize: 15, marginTop: 20 }}>Update Storefront</button>
              </div>
            </div>
          </div>
        );
      case "dashboard":
      default:

        return (
          <div className="fade-in">
            <div style={{ display: "flex", gap: 24, marginBottom: 40 }}>
              {stats.map((s, i) => <AdminStatCard key={i} {...s} />)}
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 32 }}>
              <div style={{ background: "#fff", borderRadius: "32px", padding: "32px", border: `1px solid ${T.border}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
                  <h3 style={{ fontSize: 18, color: T.brown, fontWeight: 700 }}>Sales Analytics</h3>
                  <select style={{ padding: "8px 16px", borderRadius: "10px", border: `1px solid ${T.border}`, outline: "none" }}>
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                  </select>
                </div>
                {/* Mock Chart Placeholder */}
                <div style={{ height: 300, background: T.ivory, borderRadius: "20px", display: "flex", alignItems: "flex-end", gap: 12, padding: "0 20px 20px" }}>
                  {[40, 60, 35, 80, 55, 90, 70].map((h, i) => (
                    <div key={i} style={{ flex: 1, height: `${h}%`, background: h > 70 ? T.gold : T.brownLight, borderRadius: "6px 6px 0 0", opacity: 0.8 }} />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, padding: "0 10px", fontSize: 12, color: T.textLight, fontWeight: 600 }}>
                  <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: "32px", padding: "32px", border: `1px solid ${T.border}` }}>
                <h3 style={{ fontSize: 18, color: T.brown, fontWeight: 700, marginBottom: 24 }}>Recent Activity</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  {[
                    { t: "New order placed by Rahul M.", d: "₹2,450 • 2 mins ago", icon: "🛒" },
                    { t: "Stock Alert: Wild Honey", d: "Only 5 units remaining • 45 mins ago", icon: "⚠️" },
                    { t: "New customer registered", d: "Sita Sharma • 2 hours ago", icon: "👤" },
                    { t: "Refund processed #HM-2026-09", d: "₹890 • 5 hours ago", icon: "🔄" },
                  ].map((a, i) => (
                    <div key={i} style={{ display: "flex", gap: 16 }}>
                      <div style={{ width: 44, height: 44, borderRadius: "12px", background: T.goldPale, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{a.icon}</div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: T.brown }}>{a.t}</div>
                        <div style={{ fontSize: 12, color: T.textLight }}>{a.d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#FDFCFB", paddingLeft: 280 }}>
      {/* Sidebar - Fixed */}
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} navigate={navigate} />

      {/* Main Container */}
      <div style={{ minHeight: "100vh" }}>
        <AdminHeader title={activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} />
        
        <main style={{ padding: "40px", maxWidth: 1400, margin: "0 auto" }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
