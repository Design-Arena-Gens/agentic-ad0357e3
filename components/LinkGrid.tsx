import type { LinkSkill } from "@/data/card";

interface LinkGridProps {
  links: LinkSkill[];
}

export function LinkGrid({ links }: LinkGridProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link) => (
        <li
          key={link.url}
          className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-sm"
        >
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-dokkan-accent hover:text-white"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
