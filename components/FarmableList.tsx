import Image from "next/image";
import type { FarmableSuperAttack } from "@/data/card";

interface FarmableListProps {
  options: FarmableSuperAttack[];
}

export function FarmableList({ options }: FarmableListProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {options.map((option) => (
        <li
          key={option.url}
          className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
        >
          <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-950/50">
            <Image
              src={option.imageUrl}
              alt={option.name}
              fill
              sizes="64px"
              className="object-contain"
            />
          </div>
          <div>
            <a
              href={option.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-dokkan-accent hover:text-white"
            >
              {option.name}
            </a>
            <p className="text-xs text-slate-400">Lv. Chance: {option.levelChance}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
