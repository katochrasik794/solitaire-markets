import { useTheme } from '../../context/ThemeContext';
import { MoonStar } from 'lucide-react';

export default function SidebarThemeButton({ isExpanded }) {
  const { toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`flex items-center justify-center rounded-2xl p-2 text-slate-600 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 w-full`}
    >
      <MoonStar className="h-5 w-5" />
    </button>
  );
}
