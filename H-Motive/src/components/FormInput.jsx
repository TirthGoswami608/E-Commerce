import { COLORS as T } from '../constants/theme';

export default function FormInput({ label, type = "text", placeholder, value, onChange, error = "" }) {
  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: T.textMid, marginBottom: 6, letterSpacing: ".2px" }}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          width: "100%",
          padding: "11px 16px",
          borderRadius: T.rSm,
          border: `1.5px solid ${error ? '#e74c3c' : T.border}`,
          background: T.white,
          color: T.textDark,
          fontSize: 14,
          fontFamily: "inherit",
          outline: "none",
          transition: "all .2s"
        }}
        onFocus={e => e.target.style.borderColor = T.gold}
        onBlur={e => e.target.style.borderColor = error ? "#e74c3c" : T.border}
      />
      {error && <p style={{ fontSize: 12, color: "#e74c3c", marginTop: 4 }}>{error}</p>}
    </div>
  );
}
