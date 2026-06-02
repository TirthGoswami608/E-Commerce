import { useState, useEffect } from "react";
import { COLORS as T } from "../../constants/theme";

export default function ProductForm({ initial = null, categories = [], onSave, onCancel }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(categories[0]?.name || "");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);

  useEffect(() => {
    if (initial) {
      setName(initial.name || "");
      setCategory(initial.category || (categories[0]?.name || ""));
      setPrice(initial.price ? String(initial.price).replace(/[^0-9.]/g, "") : "");
      setStock(initial.stock || 0);
    }
  }, [initial, categories]);

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter a product name");
    const payload = { ...(initial || {}), name: name.trim(), category, price: `₹${price}`, stock: Number(stock) };
    onSave(payload);
  };

  return (
    <form onSubmit={submit} style={{ minWidth: 520 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 160px", gap: 12 }}>
        <div>
          <label style={{ display: "block", fontSize: 13, color: T.textLight, marginBottom: 6 }}>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${T.border}` }} />
        </div>
        <div>
          <label style={{ display: "block", fontSize: 13, color: T.textLight, marginBottom: 6 }}>Price (₹)</label>
          <input value={price} onChange={e => setPrice(e.target.value.replace(/[^0-9.]/g, ""))} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${T.border}` }} />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
        <div>
          <label style={{ display: "block", fontSize: 13, color: T.textLight, marginBottom: 6 }}>Category</label>
          <select value={category} onChange={e => setCategory(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${T.border}` }}>
            {categories.map(c => <option key={c.id} value={c.name}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label style={{ display: "block", fontSize: 13, color: T.textLight, marginBottom: 6 }}>Stock</label>
          <input type="number" value={stock} onChange={e => setStock(e.target.value)} style={{ width: "100%", padding: "12px 14px", borderRadius: 10, border: `1px solid ${T.border}` }} />
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", marginTop: 16 }}>
        <button type="button" onClick={onCancel} style={{ background: "transparent", border: `1px solid ${T.border}`, padding: "10px 14px", borderRadius: 10, cursor: "pointer" }}>Cancel</button>
        <button type="submit" style={{ background: T.brown, color: "#fff", border: "none", padding: "10px 14px", borderRadius: 10, cursor: "pointer" }}>{initial ? "Save Product" : "Add Product"}</button>
      </div>
    </form>
  );
}
