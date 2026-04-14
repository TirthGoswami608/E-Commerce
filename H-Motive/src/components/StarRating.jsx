import { COLORS } from '../constants/theme';

export default function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map(s => (
        <span key={s} style={{ color: s <= rating ? COLORS.gold : "#DDD", fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}
