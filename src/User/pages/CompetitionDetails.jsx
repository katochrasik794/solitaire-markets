import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Clock, Tag, Users, Trophy, Check, TrendingUp, AlertCircle } from 'lucide-react'

export default function CompetitionDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [countdown, setCountdown] = useState({
    days: 9,
    hours: 4,
    minutes: 46,
    seconds: 0,
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

  const leaderboardData = [
    {
      rank: 1,
      name: 'duo d',
      country: '🇵🇰',
      trades: 247,
      winRatio: 64,
      profit: '$909,219.10',
      gain: '909.22%',
    },
    {
      rank: 2,
      name: 'Rameel ud din A',
      country: '-',
      trades: 125,
      winRatio: 62,
      profit: '$582,977.00',
      gain: '582.98%',
    },
    {
      rank: 3,
      name: 'sc s',
      country: '-',
      trades: 153,
      winRatio: 58,
      profit: '$501,928.27',
      gain: '501.93%',
    },
    {
      rank: 4,
      name: 'Shahzad S',
      country: '-',
      trades: 22,
      winRatio: 50,
      profit: '$393,162.85',
      gain: '393.16%',
    },
    {
      rank: 5,
      name: 'Anuradha R',
      country: '-',
      trades: 60,
      winRatio: 73,
      profit: '$331,700.82',
      gain: '331.7%',
    },
  ]

  const getRankIcon = (rank) => {
    if (rank === 1) return '🥇'
    if (rank === 2) return '🥈'
    if (rank === 3) return '🥉'
    return '🏅'
  }

  const getRankColor = (rank) => {
    if (rank === 1) return 'text-yellow-500'
    if (rank === 2) return 'text-slate-400'
    if (rank === 3) return 'text-amber-600'
    return 'text-slate-500'
  }

  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] w-full max-w-full flex-col gap-6 overflow-x-hidden px-6 pl-10 pt-4 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10 sm:pl-14 sm:pt-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr,350px] gap-6">
        {/* ================= MAIN CONTENT ================= */}
        <div className="space-y-6">
          {/* Competition Overview */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              November 2025 Monthly Competition
            </h2>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-slate-600 dark:text-slate-300">Ongoing</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <Tag className="h-4 w-4" />
                <span>matchtrader</span>
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Ends In {countdown.days} Day {countdown.hours} Hr {countdown.minutes} Min
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => alert('You have successfully joined the competition! Good luck!')}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
              >
                Join
              </button>
              <button 
                onClick={() => alert('Prizepool: $50,000 total prize pool distributed among top 100 participants!')}
                className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium"
              >
                Show Prizepool
              </button>
              <button 
                onClick={() => alert('This is a monthly trading competition open to all participants. Top performers win cash prizes and recognition!')}
                className="text-sm text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white font-medium"
              >
                More Info
              </button>
            </div>
          </div>

          {/* Top 3 Leaderboard Visualization */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-end justify-center gap-4 mb-6">
              {/* Rank 2 */}
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-2">🥈</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Rameel ud din A</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">2</div>
              </div>
              {/* Rank 1 */}
              <div className="flex flex-col items-center">
                <div className="text-5xl mb-2">🥇</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">duo d</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">1</div>
                <div className="text-lg mt-1">🇵🇰</div>
              </div>
              {/* Rank 3 */}
              <div className="flex flex-col items-center">
                <div className="text-4xl mb-2">🥉</div>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">sc s</div>
                <div className="text-xs text-slate-600 dark:text-slate-400">3</div>
              </div>
            </div>
          </div>

          {/* Detailed Leaderboard Table */}
          <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Rank
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Country
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Trades
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Win Ratio
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Profit
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                      Gain
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboardData.map((row) => (
                    <tr
                      key={row.rank}
                      className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{getRankIcon(row.rank)}</span>
                          <span className={`text-sm font-semibold ${getRankColor(row.rank)}`}>
                            {row.rank}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-medium text-slate-900 dark:text-white">{row.name}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-slate-600 dark:text-slate-400">{row.country}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm text-slate-900 dark:text-white">{row.trades}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-medium text-slate-900 dark:text-white">{row.winRatio}%</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-semibold text-green-600">{row.profit}</span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-semibold text-green-600">{row.gain}</span>
                          <TrendingUp className="h-4 w-4 text-blue-500" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDEBAR ================= */}
        <div className="space-y-6">
          {/* Current Rank */}
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-500/30 dark:bg-blue-900/20">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-sm font-semibold text-blue-900 dark:text-blue-300">? Current Rank</h3>
            </div>
            <p className="text-xs text-blue-700 dark:text-blue-400 mb-3">
              Your current rank in the competition.
            </p>
            <button 
              onClick={() => alert('Your Stats:\nCurrent Rank: Not ranked yet\nTrades: 0\nWin Ratio: 0%\nProfit: $0.00\nGain: 0%')}
              className="flex items-center gap-2 w-full rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              <Clock className="h-4 w-4" />
              My Stats
            </button>
          </div>

          {/* Competition Information */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Competition Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-slate-400" />
                <div>
                  <span className="text-slate-600 dark:text-slate-400">Starts: </span>
                  <span className="font-medium text-slate-900 dark:text-white">Nov 1, 2025 5:30 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="h-4 w-4 text-slate-400" />
                <div>
                  <span className="text-slate-600 dark:text-slate-400">Ends: </span>
                  <span className="font-medium text-slate-900 dark:text-white">Nov 30, 2025 8:30 PM</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Tag className="h-4 w-4 text-slate-400" />
                <div>
                  <span className="text-slate-600 dark:text-slate-400">Entry: </span>
                  <span className="font-medium text-slate-900 dark:text-white">Free</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users className="h-4 w-4 text-slate-400" />
                <div>
                  <span className="text-slate-600 dark:text-slate-400">Participants: </span>
                  <span className="font-medium text-slate-900 dark:text-white">50000</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Trophy className="h-4 w-4 text-slate-400" />
                <div>
                  <span className="text-slate-600 dark:text-slate-400">Organizer: </span>
                  <span className="font-medium text-slate-900 dark:text-white">OxoFunded</span>
                </div>
              </div>
            </div>
          </div>

          {/* Trading Rules */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Trading Rules</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">10% Max Overall Loss</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">5% Max Daily Loss</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Check className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <span className="text-slate-700 dark:text-slate-300">EA execution is prohibited</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

