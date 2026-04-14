import { COLORS } from '../constants/theme';
import StarRating from './StarRating';

export default function ReviewCard({ review }) {
  return (
    <div style={{ background: "#fff", borderRadius: 20, padding: "28px 24px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", border: `1px solid ${COLORS.gold}15`, transition: "all 0.3s" }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 12px 36px ${COLORS.gold}20`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 16px rgba(0,0,0,0.06)"; }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.brownLight})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
          {review.avatar}
        </div>
        <div>
          <div style={{ fontWeight: 700, color: COLORS.textDark, fontSize: 15 }}>{review.name}</div>
          <div style={{ fontSize: 12, color: COLORS.textLight }}>{review.location}</div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <StarRating rating={review.rating} />
        </div>
      </div>
      <div style={{ fontSize: 22, color: COLORS.gold, marginBottom: 8, lineHeight: 1 }}>"</div>
      <p style={{ fontSize: 14, color: COLORS.textMid, lineHeight: 1.7, margin: 0 }}>{review.text}</p>
    </div>
  );
}
