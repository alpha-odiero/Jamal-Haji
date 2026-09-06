interface SkillGroupProps {
  title: string
  items: string[]
}

export default function SkillGroup({ title, items }: SkillGroupProps) {
  return (
    <div className="rounded-2xl border border-line bg-card p-6">
      <h3 className="flex items-center gap-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-ink">
        <span className="h-px w-5 bg-accent" aria-hidden="true" />
        {title}
      </h3>
      <ul className="mt-6 space-y-2.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 text-[15px] font-medium text-ink-soft"
          >
            <span className="h-1 w-1 rounded-full bg-ink-faint" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
