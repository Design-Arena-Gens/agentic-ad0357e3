import type { StatEntry } from "@/data/card";

interface StatTableProps {
  stats: StatEntry[];
}

export function StatTable({ stats }: StatTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
      <table className="min-w-full divide-y divide-slate-800 text-sm">
        <thead className="bg-slate-900/80 text-slate-300">
          <tr>
            <th scope="col" className="px-4 py-3 text-left font-semibold">
              Stat
            </th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">
              Base
            </th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">
              Max Lv
            </th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">
              55%
            </th>
            <th scope="col" className="px-4 py-3 text-right font-semibold">
              100%
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800 text-slate-100">
          {stats.map((row) => (
            <tr key={row.label}>
              <th scope="row" className="px-4 py-3 text-left font-medium">
                {row.label}
              </th>
              <td className="px-4 py-3 text-right tabular-nums">{row.base.toLocaleString()}</td>
              <td className="px-4 py-3 text-right tabular-nums">{row.max.toLocaleString()}</td>
              <td className="px-4 py-3 text-right tabular-nums">{row.percent55.toLocaleString()}</td>
              <td className="px-4 py-3 text-right tabular-nums">{row.percent100.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
