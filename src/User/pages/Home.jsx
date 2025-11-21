import { Activity, Rocket, Share2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'

export default function Home() {
  const navigate = useNavigate()
  const { theme } = useTheme()

  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] w-full max-w-full flex-col gap-6 overflow-x-hidden px-6 pl-10 pt-6 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10 sm:pl-14 sm:pt-8">
      {/* ================= HEADER ================= */}
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800 text-2xl font-semibold text-white dark:bg-slate-700">
          A
        </div>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Hey, User</h1>
      </div>

      {/* ================= TRADER SUMMARY ================= */}
      <section className="flex flex-wrap items-center gap-3 md:gap-4 rounded-xl border border-slate-200 bg-white px-4 md:px-6 py-3 md:py-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <img
          src={theme === 'dark' ? '/logo.svg' : '/logo.svg'}
          alt="Solitaire Markets"
          className="h-6 md:h-8 w-auto object-contain"
          draggable="false"
        />
        <span className="hidden sm:block h-8 w-px bg-slate-300 dark:bg-slate-600" />
        <p className="text-base md:text-lg font-semibold text-slate-900 dark:text-white">Trader Summary</p>
        <span className="rounded-full bg-slate-100 px-3 md:px-4 py-1 md:py-1.5 text-xs md:text-sm font-medium text-slate-700 dark:bg-white/10 dark:text-white">
          Total Allocation: $0.00
        </span>
        <div className="flex gap-2 md:gap-3 w-full sm:w-auto sm:ml-auto">
          <button 
            onClick={() => navigate('/new-challenge')}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 md:px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-700"
          >
            <Rocket className="h-4 w-4" />
            Buy Challenge
          </button>
          <button 
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Solitaire Markets',
                  text: 'Check out Solitaire Markets trading platform!',
                  url: window.location.href,
                }).catch(() => {})
              } else {
                navigator.clipboard.writeText(window.location.href)
                alert('Link copied to clipboard!')
              }
            }}
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-4 md:px-5 py-2 text-xs font-semibold text-slate-700 shadow-sm hover:border-slate-400 dark:border-white/20 dark:text-white"
          >
            <Share2 className="h-4 w-4" />
            Share
          </button>
        </div>
      </section>

      {/* ================= FIRST ROW ================= */}
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Blue Gradient Overview */}
        <article className="rounded-xl bg-gradient-to-br from-indigo-600 via-blue-500 to-blue-400 p-4 text-white shadow-lg flex items-center justify-center min-h-[120px]">
          <p className="text-sm text-white/90">No data available</p>
        </article>

        {/* Behavioral Bias */}
        <article className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-start justify-between mb-3">
            <p id="behavioral-bias-label" className="text-xs font-medium text-slate-600 dark:text-slate-300">
              Behavioral Bias
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Total Trades: <span className="font-semibold text-slate-700 dark:text-slate-200">0</span>
            </p>
          </div>

          {/* Bear, Neutral, Bull */}
          <div className="flex items-center justify-between mb-3">
            <img src="/bear-base.webp" alt="Bear" className="h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32" />
            <p className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Neutral</p>
            <img src="/bull-base.webp" alt="Bull" className="h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32" />
          </div>

          {/* Meter */}
          <div>
            <div
              role="progressbar"
              aria-labelledby="behavioral-bias-label"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={50}
              className="relative h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-white/10"
            >
              <div className="absolute inset-y-0 left-1/2 w-0.5 bg-white/80 dark:bg-white/40" />
              <div className="h-full w-1/2 rounded-full bg-slate-400/70 dark:bg-white/30" />
            </div>

            <div className="mt-1.5 flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-300">
              <span>0 (50.0%)</span>
              <span>0 (50.0%)</span>
            </div>
          </div>
        </article>

        {/* Trading Day Performance */}
        <article className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-300 mb-3">
            <span>Trading Day Performance</span>
            <span>
              Best Day: <strong className="text-slate-900 dark:text-white">Thu</strong>
            </span>
          </div>

          <div className="flex h-16 items-center justify-center rounded-lg border border-dashed border-slate-200 text-xs text-slate-400 dark:border-white/10">
            No data available
          </div>
        </article>
      </section>

      {/* ================= SECOND ROW ================= */}
      <section className="grid gap-4 lg:grid-cols-[1.5fr,1fr]">
        {/* Bronze Level */}
        <article className="relative rounded-xl bg-gradient-to-br from-amber-900 via-zinc-900 to-black p-5 text-white shadow-lg overflow-hidden">
          <p className="text-xs text-white/70 mb-1">Your Level</p>
          <p className="text-2xl font-bold mb-4">Bronze</p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-xs text-white/60 mb-1">Total Reward</p>
              <p className="text-2xl font-semibold">$0.00</p>
            </div>

            <div>
              <p className="text-xs text-white/60 mb-1">Highest Reward</p>
              <p className="text-2xl font-semibold">$0.00</p>
            </div>

            <div>
              <p className="text-xs text-white/60 mb-1">Count</p>
              <p className="text-2xl font-semibold">0</p>
            </div>
          </div>
        </article>

        {/* Profitability */}
        <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-300 mb-4">
            <span>Profitability</span>
            <span>
              Avg Holding Period: <strong className="text-slate-900 dark:text-white">0s</strong>
            </span>
          </div>

          {/* Won, Trades Taken, Lost */}
          <div className="grid grid-cols-3 gap-3 text-center">
            {/* Won */}
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-300 mb-1">Won</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">0.0%</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">0</p>
            </div>

            {/* Trades Taken */}
            <div className="flex flex-col items-center justify-center">
              <Activity className="h-6 w-6 text-slate-400 dark:text-slate-500 mb-1" />
              <p className="text-xs text-slate-500 dark:text-slate-300">Trades Taken</p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Start trading to see analysis</p>
            </div>

            {/* Lost */}
            <div>
              <p className="text-xs text-slate-500 dark:text-slate-300 mb-1">Lost</p>
              <p className="text-2xl font-semibold text-slate-900 dark:text-white">0.0%</p>
              <p className="text-xs text-slate-500 dark:text-slate-300">0</p>
            </div>
          </div>
        </article>
      </section>

      {/* ================= THIRD ROW ================= */}
      <section className="grid gap-4 md:grid-cols-2">
        {/* Most Traded 3 Instruments */}
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Most Traded 3 Instruments</h2>
          <div className="h-36 rounded-lg bg-slate-50 dark:bg-white/5"></div>
        </div>

        {/* Session Win Rates */}
        <div className="w-full rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">Session Win Rates</h2>

          {/* New York */}
          <div className="mb-4">
            <div className="flex justify-between mb-2 text-xs">
              <span id="label-ny" className="font-medium text-slate-700 dark:text-slate-200">New York</span>
              <span className="font-medium text-slate-600 dark:text-slate-300">0.0%</span>
            </div>
            <div
              role="progressbar"
              aria-labelledby="label-ny"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={0}
              className="w-full h-3 bg-slate-200 rounded-full overflow-hidden dark:bg-white/10"
            >
              <div className="h-full bg-slate-300/60 bg-[repeating-linear-gradient(45deg,#cbd5e1_0px,#cbd5e1_10px,#e2e8f0_10px,#e2e8f0_20px)] w-0" />
            </div>
          </div>

          {/* London */}
          <div className="mb-4">
            <div className="flex justify-between mb-2 text-xs">
              <span id="label-london" className="font-medium text-slate-700 dark:text-slate-200">London</span>
              <span className="font-medium text-slate-600 dark:text-slate-300">0.0%</span>
            </div>
            <div
              role="progressbar"
              aria-labelledby="label-london"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={0}
              className="w-full h-3 bg-slate-200 rounded-full overflow-hidden dark:bg-white/10"
            >
              <div className="h-full bg-slate-300/60 bg-[repeating-linear-gradient(45deg,#cbd5e1_0px,#cbd5e1_10px,#e2e8f0_10px,#e2e8f0_20px)] w-0" />
            </div>
          </div>

          {/* Asia */}
          <div>
            <div className="flex justify-between mb-2 text-xs">
              <span id="label-asia" className="font-medium text-slate-700 dark:text-slate-200">Asia</span>
              <span className="font-medium text-slate-600 dark:text-slate-300">0.0%</span>
            </div>
            <div
              role="progressbar"
              aria-labelledby="label-asia"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={0}
              className="w-full h-3 bg-slate-200 rounded-full overflow-hidden dark:bg-white/10"
            >
              <div className="h-full bg-slate-300/60 bg-[repeating-linear-gradient(45deg,#cbd5e1_0px,#cbd5e1_10px,#e2e8f0_10px,#e2e8f0_20px)] w-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
