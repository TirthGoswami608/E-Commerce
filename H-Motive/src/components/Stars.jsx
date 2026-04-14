import { COLORS as T } from '../constants/theme';

export default function Stars({ n, size = 13 }) {
  return (
    <span style={{ display: "inline-flex", gap: 1 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ color: i <= n ? T.gold : "#DDD", fontSize: size }}>★</span>
      ))}
    </span>
  );
}
