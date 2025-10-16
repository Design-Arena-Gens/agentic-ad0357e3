import type { KiMultiplier } from "@/data/card";

interface KiMultiplierListProps {
  multipliers: KiMultiplier[];
}

export function KiMultiplierList({ multipliers }: KiMultiplierListProps) {
  return (
    <dl className="grid gap-3 sm:grid-cols-2">
      {multipliers.map((entry) => (
        <div
          key={entry.ki}
          className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-black/40"
        >
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            {entry.ki}
          </dt>
          <dd className="mt-1 text-lg font-semibold text-dokkan-accent">
            {entry.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
