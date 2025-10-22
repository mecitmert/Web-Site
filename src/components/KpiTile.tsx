export default function KpiTile({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-white">
      <div className="text-xs text-white/70">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}
