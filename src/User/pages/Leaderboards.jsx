import { useState } from 'react'
import { Trophy, Calendar, Coins, Shield, Leaf, Check } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function Leaderboards() {
  const [accountSize, setAccountSize] = useState('10k')
  const { theme } = useTheme()

  const summaryCards = [
    {
      title: 'HIGHEST TOTAL REWARDS',
      icon: Trophy,
      value: '$9,280.00',
      trader: 'Nino B',
      flag: '🇳🇱',
    },
    {
      title: 'LONGEST MASTER ACC DURATION',
      icon: Calendar,
      value: '725 days',
      trader: 'Chauhan H',
      flag: '🇮🇳',
    },
    {
      title: 'HIGHEST SINGLE REWARD',
      icon: Coins,
      value: '$8,240.00',
      trader: 'Suraj W',
      flag: '🇮🇳',
    },
    {
      title: 'HIGHEST TOTAL REWARDS COUNT',
      icon: Coins,
      value: '19',
      trader: 'Layla Z',
      flag: '🇯🇵',
    },
  ]

  const leaderboardData = [
    {
      rank: 1,
      trader: 'Jeel P',
      profit: '+$7,674.78',
      profitPercent: '+76.75%',
      winRatio: '44.3%',
      winRatioColor: 'red',
      pair: 'XAUUSD',
      avgWin: '$367.13',
      avgLoss: '-$135.58',
      avgDuration: '28m',
      trades: '88',
      losingStreak: '7',
      winningStreak: '6',
    },
    {
      rank: 2,
      trader: 'Agbanyo E',
      profit: '+$4,652.78',
      profitPercent: '+46.53%',
      winRatio: '52.0%',
      winRatioColor: 'orange',
      pair: 'XAUUSD',
      avgWin: '$326.39',
      avgLoss: '-$117.87',
      avgDuration: '1h 58m',
      trades: '50',
      losingStreak: '7',
      winningStreak: '5',
    },
    {
      rank: 3,
      trader: 'Muhammed A',
      profit: '+$4,171.39',
      profitPercent: '+41.71%',
      winRatio: '91.3%',
      winRatioColor: 'green',
      pair: 'XAUUSD',
      avgWin: '$202.76',
      avgLoss: '-$43.32',
      avgDuration: '24m',
      trades: '23',
      losingStreak: '2',
      winningStreak: '16',
    },
    {
      rank: 4,
      trader: 'Pravin B',
      profit: '+$3,141.95',
      profitPercent: '+31.42%',
      winRatio: '30.3%',
      winRatioColor: 'red',
      pair: 'XAUUSD',
      avgWin: '$472.64',
      avgLoss: '-$123.54',
      avgDuration: '14m',
      trades: '76',
      losingStreak: '12',
      winningStreak: '3',
    },
    {
      rank: 5,
      trader: 'abdifatah o',
      profit: '+$2,513.30',
      profitPercent: '+25.13%',
      winRatio: '100.0%',
      winRatioColor: 'green',
      pair: 'XAUUSD',
      avgWin: '$418.88',
      avgLoss: '$0.00',
      avgDuration: '2h 42m',
      trades: '6',
      losingStreak: '0',
      winningStreak: '6',
    },
    {
      rank: 6,
      trader: 'Uladzislau K',
      profit: '+$2,424.56',
      profitPercent: '+24.25%',
      winRatio: '29.6%',
      winRatioColor: 'red',
      pair: 'NDX100',
      avgWin: '$225.13',
      avgLoss: '-$52.25',
      avgDuration: '1h 51m',
      trades: '81',
      losingStreak: '8',
      winningStreak: '3',
    },
  ]

  const getRankIcon = (rank) => {
    if (rank === 1) return <Shield className="h-5 w-5 text-yellow-500" />
    if (rank === 2) return <Shield className="h-5 w-5 text-slate-400" />
    if (rank === 3) return <Shield className="h-5 w-5 text-amber-600" />
    return null
  }

  const getWinRatioColor = (color) => {
    if (color === 'green') return 'text-green-600'
    if (color === 'orange') return 'text-orange-600'
    return 'text-red-600'
  }

  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] w-full max-w-full flex-col gap-6 overflow-x-hidden px-6 pl-10 pt-6 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10 sm:pl-14 sm:pt-8">
      {/* ================= HEADER ================= */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img
            src={theme === 'dark' ? '/logo.svg' : '/logo.svg'}
            alt="OXO"
            className="h-8 w-auto object-contain"
            draggable="false"
          />
          <span className="h-8 w-px bg-slate-300 dark:bg-slate-600" />
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl font-semibold text-slate-700 dark:bg-white/10 dark:text-white">
              A
            </div>
            <p className="text-xl font-semibold text-slate-900 dark:text-white">Hey, User</p>
          </div>
        </div>

        {/* Account Size Selector */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-700">Account Size:</span>
          <div className="flex gap-1">
            {['5k', '10k', '25k', '50k', '100k', 'All'].map((size) => (
              <button
                key={size}
                onClick={() => setAccountSize(size)}
                className={`rounded px-3 py-1 text-xs font-semibold transition ${
                  accountSize === size
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-100 dark:text-slate-700'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SUMMARY CARDS ================= */}
      <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {summaryCards.map((card, index) => {
          const IconComponent = card.icon
          return (
            <div
              key={index}
              className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">{card.title}</p>
                <IconComponent className="h-6 w-6 text-yellow-300" />
              </div>
              <p className="mb-2 text-2xl font-bold">{card.value}</p>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-lg">{card.flag}</span>
                <span className="font-medium">{card.trader}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* ================= LEADERBOARD ================= */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="border-b border-slate-200 px-4 md:px-6 py-3 md:py-4 dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
            <h2 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">Leaderboard</h2>
          </div>
        </div>

        <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 whitespace-nowrap">
                  RANK
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  TRADER
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  PROFIT
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  PROFIT %
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  WIN RATIO
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  PAIR
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  AVG. WIN
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  AVG. LOSS
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  AVG. DURATION
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  TRADES
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  LOSING STREAK
                </th>
                <th className="px-2 md:px-4 py-2 md:py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-600 whitespace-nowrap">
                  WINNING STREAK
                </th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((row) => (
                <tr
                  key={row.rank}
                  className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {getRankIcon(row.rank)}
                      <span className="text-xs md:text-sm font-semibold text-slate-900 dark:text-white">
                        #{row.rank}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <span className="text-xs md:text-sm font-medium text-slate-900 dark:text-white">{row.trader}</span>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <span className="text-xs md:text-sm font-semibold text-green-600">{row.profit}</span>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <span className="text-xs md:text-sm font-semibold text-green-600">{row.profitPercent}</span>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span className={`h-2 w-2 rounded-full ${
                        row.winRatioColor === 'green' ? 'bg-green-500' : 
                        row.winRatioColor === 'orange' ? 'bg-orange-500' : 
                        'bg-red-500'
                      }`}></span>
                      <span className={`text-xs md:text-sm font-medium ${getWinRatioColor(row.winRatioColor)}`}>
                        {row.winRatio}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <span className="inline-flex items-center rounded-full bg-blue-100 px-2 md:px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-100 dark:text-blue-800">
                      {row.pair}
                    </span>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <span className="text-xs md:text-sm font-medium text-green-600">{row.avgWin}</span>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <span className={`text-xs md:text-sm font-medium ${
                      row.avgLoss.startsWith('-') || row.avgLoss === '$0.00' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {row.avgLoss}
                    </span>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4 text-slate-400" />
                      <span className="text-xs md:text-sm text-slate-600 dark:text-slate-300">{row.avgDuration}</span>
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <span className="text-xs md:text-sm text-slate-900 dark:text-white">{row.trades}</span>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <span className="text-xs md:text-sm font-medium text-red-600">{row.losingStreak}</span>
                  </td>
                  <td className="px-2 md:px-4 py-2 md:py-3 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      {row.losingStreak === '0' ? (
                        <Check className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                      ) : (
                        <Leaf className="h-3 w-3 md:h-4 md:w-4 text-green-600" />
                      )}
                      <span className="text-xs md:text-sm font-medium text-green-600">{row.winningStreak}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}
