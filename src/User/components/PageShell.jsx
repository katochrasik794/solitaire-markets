export default function PageShell({ title, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 text-slate-900 shadow-2xl shadow-black/10 dark:border-white/10 dark:bg-white dark:text-slate-900 dark:shadow-black/30">
      <div className="mb-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-500 dark:text-emerald-300">
          OxoFunded
        </p>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="text-slate-600 dark:text-slate-300">{children}</div>
    </section>
  )
}

