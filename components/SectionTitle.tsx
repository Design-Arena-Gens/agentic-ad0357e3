interface SectionTitleProps {
  id?: string;
  label: string;
  subtitle?: string;
}

export function SectionTitle({ id, label, subtitle }: SectionTitleProps) {
  return (
    <div id={id} className="mb-6">
      <h2 className="text-2xl font-semibold tracking-tight text-white">
        {label}
      </h2>
      {subtitle ? (
        <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
      ) : null}
    </div>
  );
}
