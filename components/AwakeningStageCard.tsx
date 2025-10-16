import type { AwakeningStage } from "@/data/card";

interface AwakeningStageCardProps {
  stage: AwakeningStage;
}

export function AwakeningStageCard({ stage }: AwakeningStageCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-black/30">
      <header className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{stage.stage}</h3>
          <a
            href={stage.cardUrl}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-dokkan-accent hover:text-white"
          >
            {stage.cardName}
          </a>
        </div>
        <span className="rounded-full bg-dokkan-primary/20 px-3 py-1 text-xs uppercase tracking-wide text-dokkan-primary">
          {stage.rarity} • {stage.type}
        </span>
      </header>
      <dl className="grid gap-2 text-sm text-slate-200">
        <div className="flex justify-between gap-4">
          <dt className="font-medium text-slate-400">Release</dt>
          <dd>{stage.releaseDate}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="font-medium text-slate-400">Zeni Cost</dt>
          <dd>{stage.zeniCost}</dd>
        </div>
      </dl>
      {stage.awakenItems.length ? (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Awakening Items
          </p>
          <ul className="mt-2 space-y-1 text-sm text-slate-200">
            {stage.awakenItems.map((item) => (
              <li key={item.url} className="flex justify-between gap-3">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-dokkan-accent hover:text-white"
                >
                  {item.name}
                </a>
                <span className="text-slate-300">×{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
