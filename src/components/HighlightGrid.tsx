import type { FC } from "react";

type HighlightItem = {
  title: string;
  value: string;
};

type HighlightGridProps = {
  items?: HighlightItem[];
  className?: string;
};

const fallbackItems: HighlightItem[] = [
  { title: "Focus", value: "Systems + Web" },
  { title: "Stack", value: "Astro / React" },
  { title: "Availability", value: "Open for internships" },
];

const HighlightGrid: FC<HighlightGridProps> = ({ items = fallbackItems, className }) => {
  const classes = ["grid gap-4 sm:grid-cols-3", className ? className : ""].join(" ").trim();

  return (
    <div className={classes} role="list">
      {items.map((item) => (
        <article
          className="grid gap-2 rounded-2xl border border-line bg-white px-5 py-4 shadow-card"
          role="listitem"
          key={item.title}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">{item.title}</span>
          <span className="text-lg font-semibold text-ink">{item.value}</span>
        </article>
      ))}
    </div>
  );
};

export default HighlightGrid;
