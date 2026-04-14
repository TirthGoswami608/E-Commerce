import { COLORS as T } from '../constants/theme';

export default function BtnO({ children, onClick, style = {} }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: "transparent",
        color: T.brown,
        border: `2px solid ${T.gold}`,
        borderRadius: 50,
        fontWeight: 600,
        fontFamily: "inherit",
        cursor: "pointer",
        transition: "all .25s",
        ...style
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = T.gold;
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.color = T.brown;
      }}
    >
      {children}
    </button>
  );
}
