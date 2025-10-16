import Image from "next/image";
import type { CategoryTag } from "@/data/card";

interface CategoryGridProps {
  categories: CategoryTag[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {categories.map((category) => (
        <li
          key={category.url}
          className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-4"
        >
          <div className="relative h-10 w-24 overflow-hidden rounded-lg bg-slate-950/60">
            <Image
              src={category.imageUrl}
              alt={category.name}
              fill
              sizes="96px"
              className="object-contain p-1"
            />
          </div>
          <a
            href={category.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-dokkan-accent hover:text-white"
          >
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
