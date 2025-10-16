import Image from "next/image";
import type { PartnerCard } from "@/data/card";

interface PartnerGridProps {
  partners: PartnerCard[];
}

export function PartnerGrid({ partners }: PartnerGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {partners.map((partner) => (
        <li
          key={partner.url}
          className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-5"
        >
          <div className="flex items-center gap-3">
            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-950/50">
              <Image
                src={partner.imageUrl}
                alt={partner.name}
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
            <div>
              <a
                href={partner.url}
                target="_blank"
                rel="noreferrer"
                className="text-base font-semibold text-dokkan-accent hover:text-white"
              >
                {partner.name}
              </a>
              <p className="text-xs text-slate-400">
                {partner.sharedLinks} shared links · {partner.sharedTeams} shared teams
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
