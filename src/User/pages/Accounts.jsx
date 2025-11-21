import { Rocket, FileText, Briefcase, Archive, List, Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Accounts() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-180px)] bg-white">
      {/* Left Sidebar */}
      <div className="w-full lg:w-96 border-r border-slate-200 bg-white p-4 md:p-6 dark:border-slate-700 dark:bg-slate-900">
        {/* Avatar and Greeting */}
        <div className="mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
          <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-slate-200 text-lg md:text-xl font-semibold text-white dark:bg-slate-200 dark:text-white">
            A
          </div>
          <span className="text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">Hey, User</span>
        </div>

        {/* BUY CHALLENGE Button */}
        <button 
          onClick={() => navigate('/new-challenge')}
          className="mb-4 md:mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-700"
        >
          <Rocket className="h-4 w-4" />
          Buy Challenge
        </button>

        {/* Filters */}
        <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
          <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100">
            <option>All Types</option>
          </select>
          <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100">
            <option>All States</option>
          </select>
          <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100">
            <option>All Phases</option>
          </select>
        </div>

        {/* Toggle Buttons */}
        <div className="mb-4 md:mb-6 flex justify-end gap-2">
          <button className="flex items-center gap-2 md:gap-3 rounded-xl border border-purple-300 bg-purple-50 px-2 md:px-3 py-1.5 md:py-2 shadow-sm">
            <Archive className="h-3.5 w-3.5 md:h-4 md:w-4 text-slate-800" />
            <div className="flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-blue-600">
              <Check className="h-2.5 w-2.5 md:h-3 md:w-3 text-white" />
            </div>
          </button>
          <button className="flex items-center gap-2 md:gap-3 rounded-xl border border-slate-300 bg-white px-2 md:px-3 py-1.5 md:py-2 shadow-sm hover:border-slate-400">
            <List className="h-3.5 w-3.5 md:h-4 md:w-4 text-slate-800" />
            <div className="flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-slate-300">
              <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-slate-600"></div>
            </div>
          </button>
        </div>

        {/* No Accounts Message */}
        <div className="mt-8 md:mt-20 flex flex-col items-center text-center">
          <FileText className="mb-2 h-10 w-10 md:h-12 md:w-12 text-slate-400" />
          <p className="mb-2 text-xs md:text-sm font-medium text-slate-500 dark:text-slate-400">
            No accounts match your filters
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            Try selecting different filters to find your accounts.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 items-center justify-center bg-white p-4 md:p-8 dark:bg-slate-950">
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 md:p-12 text-center dark:border-slate-600 dark:bg-slate-900 w-full max-w-2xl">
          <Briefcase className="mb-4 h-12 w-12 md:h-16 md:w-16 text-slate-400" />
          <h2 className="mb-2 text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-900">
            Select an Account to View Details
          </h2>
          <p className="mb-6 max-w-md text-xs md:text-sm text-slate-600 dark:text-slate-600">
            Choose a trading account from the list to see its detailed information and performance metrics.
          </p>
          <div className="mb-6 w-full max-w-md rounded-lg bg-slate-100 p-4 dark:bg-slate-200">
            <p className="mb-1 text-xs md:text-sm text-slate-600 dark:text-slate-600">Don&apos;t have an account yet?</p>
            <p className="mb-4 text-xs text-slate-500 dark:text-slate-500">
              Trade up to $300,000 in simulated capital.
            </p>
            <button 
              onClick={() => navigate('/new-challenge')}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-xs md:text-sm font-semibold uppercase tracking-wide text-white shadow-md hover:bg-blue-700"
            >
              <Rocket className="h-4 w-4" />
              Buy Challenge
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
