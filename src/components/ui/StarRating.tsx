interface StarRatingProps {
  rating: number;
  max?: number;
  showValue?: boolean;
}

export function StarRating({ rating, max = 5, showValue = true }: StarRatingProps) {
  const stars = Array.from({ length: max }, (_, i) => {
    const filled = i < Math.floor(rating);
    const half = !filled && i < rating;
    return { filled, half };
  });

  return (
    <span className="inline-flex items-center gap-1">
      <span className="flex">
        {stars.map(({ filled, half }, i) => (
          <span
            key={i}
            className={`text-sm ${filled ? 'text-amber-400' : half ? 'text-amber-300' : 'text-slate-200'}`}
          >
            ★
          </span>
        ))}
      </span>
      {showValue && (
        <span className="text-sm font-medium text-slate-600">{rating.toFixed(1)}</span>
      )}
    </span>
  );
}
