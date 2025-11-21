import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Tag } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

// Competition card component
function CompetitionCard({ competition, countdown, onViewClick }) {
  const formatTime = (time) => {
    if (!time) return '00:00:00'
    return `${String(time.days || 0).padStart(2, '0')}:${String(time.hours || 0).padStart(2, '0')}:${String(time.minutes || 0).padStart(2, '0')}:${String(time.seconds || 0).padStart(2, '0')}`
  }

  const isOngoing = competition.status === 'Ongoing'
  const displayTime = isOngoing && countdown ? formatTime(countdown) : '00:00:00'

  return (
    <div className="rounded-xl border-2 border-slate-300 bg-white p-3 shadow-sm shadow-black/5 dark:border-slate-600 dark:bg-slate-900">
      <div className="flex flex-col gap-2">
        {/* Time Display */}
        <div className="text-right">
          <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 tabular-nums">
            {displayTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
          {competition.title}
        </h3>

        {/* Status */}
        <div className="flex items-center gap-1.5">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isOngoing ? 'bg-green-500' : 'bg-red-500'
            }`}
          />
          <span className="text-xs text-slate-600 dark:text-slate-300">{competition.status}</span>
        </div>

        {/* Details Row */}
        <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-1">
            <Tag className="h-3 w-3" />
            <span>Free</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{competition.participants.toLocaleString()}</span>
          </div>
        </div>

        {/* Platform Tags */}
        <div className="flex flex-wrap gap-1.5">
          {competition.platforms.map((platform, idx) => (
            <span
              key={idx}
              className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-300"
            >
              {platform}
            </span>
          ))}
        </div>

        {/* View Button */}
        <div className="flex justify-end pt-1">
          <button 
            onClick={onViewClick}
            className="rounded-md bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
          >
            View
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Competition() {
  const navigate = useNavigate()
  const { theme } = useTheme()
  const [countdown, setCountdown] = useState({
    days: 9,
    hours: 8,
    minutes: 40,
    seconds: 56,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev

        seconds -= 1
        if (seconds < 0) {
          seconds = 59
          minutes -= 1
          if (minutes < 0) {
            minutes = 59
            hours -= 1
            if (hours < 0) {
              hours = 23
              days -= 1
              if (days < 0) {
                days = 0
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const [activeTab, setActiveTab] = useState('OxoFunded')

  // Competition data
  const competitions = [
    {
      title: 'November 2025 Monthly Competition',
      status: 'Ongoing',
      participants: 50000,
      platforms: ['OxoFunded', 'matchtrader'],
    },
    {
      title: 'October 2025 Monthly Competition',
      status: 'Ended',
      participants: 50000,
      platforms: ['OxoFunded', 'matchtrader'],
    },
    {
      title: 'September 2025 Monthly Competition',
      status: 'Ended',
      participants: 50000,
      platforms: ['OxoFunded', 'matchtrader'],
    },
    {
      title: 'August 2025 Monthly Competition',
      status: 'Ended',
      participants: 50000,
      platforms: ['OxoFunded', 'matchtrader'],
    },
    {
      title: 'July 2025 Monthly Competition',
      status: 'Ended',
      participants: 50000,
      platforms: ['OxoFunded', 'matchtrader'],
    },
    {
      title: 'June 2025 Monthly Competition',
      status: 'Ended',
      participants: 46073,
      platforms: ['OxoFunded', 'matchtrader'],
    },
    {
      title: 'May 2025 Monthly Competition',
      status: 'Ended',
      participants: 48520,
      platforms: ['OxoFunded', 'matchtrader'],
    },
    {
      title: 'April 2025 Monthly Competition',
      status: 'Ended',
      participants: 49674,
      platforms: ['OxoFunded', 'matchtrader'],
    },
    {
      title: 'March 2025 Monthly Competition',
      status: 'Ended',
      participants: 43772,
      platforms: ['OxoFunded', 'matchtrader'],
    },
  ]

  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] w-full max-w-full flex-col gap-6 overflow-x-hidden px-6 pl-10 pt-4 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10 sm:pl-14 sm:pt-6">
      {/* ================= HEADER ================= */}
      <div className="flex flex-wrap items-center gap-4">
        <img
          src={theme === 'dark' ? '/logo.svg' : '/logo.svg'}
          alt="OXO"
          className="h-8 w-auto object-contain"
          draggable="false"
        />
        <span className="h-8 w-px bg-slate-300 dark:bg-slate-600" />
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-2xl font-semibold text-slate-700 dark:bg-white/10 dark:text-white">
          A
        </div>
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Hey, User</h1>
      </div>

      {/* ================= MONTHLY COMPETITION CARD ================= */}
      <section className="relative w-full max-w-5xl mx-auto rounded-xl border border-slate-300 bg-white p-4 md:p-6 shadow-md shadow-black/5 dark:border-slate-600 dark:bg-slate-900">
        <div className="flex flex-col lg:flex-row lg:items-start gap-4 md:gap-6 lg:gap-8">
          {/* Left Content */}
          <div className="flex-1 space-y-5">
            <h2 className="text-base font-medium text-slate-600 dark:text-slate-400">Monthly Competition</h2>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              November 2025 Monthly Competition
            </h3>

            {/* Status Line - All in one row */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span>Ongoing</span>
              <Tag className="h-4 w-4 text-slate-400" />
              <span>matchtrader</span>
              <Users className="h-4 w-4 text-slate-400" />
              <span className="font-semibold">50,000</span>
            </div>

            {/* Dates Section */}
            <div className="space-y-2 text-sm">
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">Starts</span>{' '}
                <span className="font-semibold text-slate-900 dark:text-white">Nov 1, 2025</span>
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">Ends</span>{' '}
                <span className="font-semibold text-slate-900 dark:text-white">Nov 30, 2025</span>
              </p>
              <p className="text-slate-600 dark:text-slate-400">
                <span className="font-medium text-slate-700 dark:text-slate-300">Ending in</span>{' '}
                <span className="font-bold text-slate-900 dark:text-white tabular-nums text-base">
                  {String(countdown.days).padStart(2, '0')}:
                  {String(countdown.hours).padStart(2, '0')}:
                  {String(countdown.minutes).padStart(2, '0')}:
                  {String(countdown.seconds).padStart(2, '0')}
                </span>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={() => navigate('/competition/november-2025')}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-400"
              >
                View
              </button>
              <div className="flex items-center gap-4 text-sm">
                <button 
                  onClick={() => alert('Prizepool: $50,000 total prize pool distributed among top 100 participants!')}
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium"
                >
                  Show Prizepool
                </button>
                <button 
                  onClick={() => alert('This is a monthly trading competition open to all participants. Top performers win cash prizes and recognition!')}
                  className="text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>

          {/* Right Trophy Illustration */}
          <div className="flex-shrink-0 lg:w-80 lg:h-full w-full max-w-full h-64 flex items-center justify-center">
            <img
              src="/trophy-pink.webp"
              alt="Trophy"
              className="h-full w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ================= COMPETITION GRID ================= */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
        {competitions.map((competition, index) => (
          <CompetitionCard
            key={index}
            competition={competition}
            countdown={competition.status === 'Ongoing' ? countdown : null}
            onViewClick={() => navigate(`/competition/${competition.title.toLowerCase().replace(/\s+/g, '-')}`)}
          />
        ))}
      </section>

      {/* ================= BOTTOM NAVIGATION TABS ================= */}
      <nav className="flex items-center justify-center gap-8 border-t border-slate-200 pt-6 dark:border-white/10">
        {['Joined', 'OxoFunded', 'Championships', 'Hosted'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative pb-2 text-sm font-semibold transition ${
              activeTab === tab
                ? 'text-blue-600 dark:text-blue-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400" />
            )}
          </button>
        ))}
      </nav>
    </div>
  )
}
