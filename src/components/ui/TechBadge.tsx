interface TechBadgeProps {
  label: string;
}

export default function TechBadge({ label }: TechBadgeProps) {
  return (
    <span className="rounded-full border border-slate-700/90 bg-slate-900/80 px-3 py-1 text-xs text-slate-200">
      {label}
    </span>
  );
}
