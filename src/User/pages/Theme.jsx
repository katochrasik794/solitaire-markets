import PageShell from '../components/PageShell'
import { useTheme } from '../../context/ThemeContext.jsx'

export default function Theme() {
  const { theme, toggleTheme } = useTheme()

  return (
    <PageShell title="Light / Dark Mode">
      <p className="text-sm">
        Current theme:{' '}
        <span className="font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-300">{theme}</span>
      </p>
      <button
        type="button"
        onClick={toggleTheme}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:border-slate-400 hover:bg-slate-50 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/20"
      >
        Toggle theme
      </button>
    </PageShell>
  )
}

