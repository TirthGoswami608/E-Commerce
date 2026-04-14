import { COLORS as T } from '../constants/theme';

export default function BtnP({ children, onClick, style = {}, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        background: disabled ? "#CCC" : `linear-gradient(135deg,${T.gold},${T.brownMid})`,
        color: "#fff",
        border: "none",
        borderRadius: 50,
        fontWeight: 600,
        fontFamily: "inherit",
        cursor: disabled ? "not-allowed" : "pointer",
        boxShadow: disabled ? "none" : `0 4px 16px rgba(192,127,36,.32)`,
        transition: "all .25s",
        ...style
      }}
      onMouseEnter={e => {
        if (!disabled) {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = `0 8px 28px rgba(192,127,36,.48)`;
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = disabled ? "none" : `0 4px 16px rgba(192,127,36,.32)`;
      }}
    >
      {children}
    </button>
  );
}
