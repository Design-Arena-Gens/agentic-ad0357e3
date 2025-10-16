import Image from "next/image";
import type { SuperAttack } from "@/data/card";

interface SuperAttackCardProps {
  attack: SuperAttack;
}

export function SuperAttackCard({ attack }: SuperAttackCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
      <header className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-800/80 p-3">
          <Image src={attack.iconUrl} alt="Attack icon" width={48} height={48} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{attack.name}</h3>
          <p className="text-sm text-dokkan-accent">{attack.kiRequirement}</p>
        </div>
      </header>
      <p className="text-sm leading-relaxed text-slate-200">{attack.description}</p>
      <p className="text-xs text-slate-400">{attack.levelBonus}</p>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          Damage Multipliers
        </p>
        <dl className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-200 sm:grid-cols-4">
          {attack.damageMultipliers.map((entry) => (
            <div
              key={`${attack.name}-${entry.label}`}
              className="rounded-lg border border-slate-800 bg-slate-950/50 p-3"
            >
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                {entry.label}
              </dt>
              <dd className="mt-1 text-base font-semibold text-white">
                {entry.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {attack.animations.length ? (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
            Animations
          </p>
          <ul className="mt-2 grid gap-2 text-sm text-dokkan-accent sm:grid-cols-2">
            {attack.animations.map((animation) => (
              <li key={animation.url}>
                <a
                  href={animation.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {animation.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
