import { COLORS as T } from '../constants/theme';

export default function SectionCard({ children, style = {} }) {
  return (
    <div
      style={{
        background: T.white,
        borderRadius: T.r,
        padding: "28px 24px",
        boxShadow: T.sh,
        border: `1px solid ${T.border}`,
        ...style
      }}
    >
      {children}
    </div>
  );
}
