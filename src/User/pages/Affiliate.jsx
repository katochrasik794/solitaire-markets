import { useState } from 'react'
import { Copy, AlertCircle, Calendar, TrendingUp } from 'lucide-react'

export default function Affiliate() {
  const [activeTab, setActiveTab] = useState('Overview')
  const [activeView, setActiveView] = useState('Cumulative')
  const referralLink = 'https://app.OxoFunded.com/register?ref=8CC65116'
  const referralCode = '8CC65116'

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    // You can add a toast notification here
  }

  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] w-full max-w-full flex-col gap-4 md:gap-6 overflow-x-hidden px-4 md:px-6 pt-4 md:pt-6 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10 lg:pt-8">
      <div className="grid gap-4 md:gap-6 grid-cols-1 lg:grid-cols-[1fr,300px]">
        {/* Main Content */}
        <div className="space-y-6">
          {/* Referral Code Section */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">Referral Code</h3>
            <p className="mb-4 text-sm text-slate-600 dark:text-slate-600">
              Share your referral link or code to earn commissions.
            </p>

            <div className="mb-4 flex flex-wrap items-center gap-3">
              {/* Referral Link */}
              <div className="flex-1 min-w-[300px]">
                <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-600 dark:bg-slate-800">
                  <input
                    type="text"
                    value={referralLink}
                    readOnly
                    className="flex-1 text-xs text-slate-900 outline-none dark:text-slate-100"
                  />
                  <button
                    onClick={() => handleCopy(referralLink)}
                    className="text-slate-500 hover:text-slate-700"
                  >
                    <Copy className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Referral Code */}
              <button
                onClick={() => handleCopy(referralCode)}
                className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              >
                <Copy className="h-3 w-3" />
                {referralCode}
                <Copy className="h-3 w-3" />
              </button>
            </div>

            {/* Info Box */}
            <div className="flex items-start justify-between gap-4 rounded-lg border border-blue-200 bg-blue-50 p-3 dark:border-blue-300 dark:bg-blue-50">
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                <p className="text-xs text-blue-800 dark:text-blue-800">
                  Commissions are credited when referred users complete qualifying purchases.
                </p>
              </div>
              <button 
                onClick={() => window.open('https://OxoFunded.com/affiliate', '_blank')}
                className="whitespace-nowrap rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
              >
                Visit Affiliate Page
              </button>
            </div>
          </div>

          {/* Earnings Section */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            {/* Tabs */}
            <div className="mb-4 flex gap-2 border-b border-slate-200 dark:border-slate-700">
              {['Overview', 'Daily'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-semibold transition ${
                    activeTab === tab
                      ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-600 dark:text-blue-600'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-600 dark:hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content based on active tab */}
            {activeTab === 'Overview' ? (
              <>
                {/* Earnings Header */}
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Earnings</h3>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
                      <Calendar className="h-3 w-3" />
                      Pick date range
                    </button>
                    <div className="flex gap-1">
                      {['Cumulative', 'Daily'].map((view) => (
                        <button
                          key={view}
                          onClick={() => setActiveView(view)}
                          className={`rounded px-3 py-1.5 text-xs font-semibold transition ${
                            activeView === view
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-100 dark:text-slate-700'
                          }`}
                        >
                          {view}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Earnings Chart Area */}
                <div className="mb-4 flex h-64 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 dark:border-slate-400 dark:bg-slate-100">
                  <div className="text-center">
                    <TrendingUp className="mx-auto mb-2 h-12 w-12 text-slate-400" />
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-600">
                      No referral data available.
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      Start referring users to see your earnings history.
                    </p>
                  </div>
                </div>

                {/* Bottom Message */}
                <p className="text-center text-xs text-slate-500 dark:text-slate-500">
                  No referrals found. Try adjusting the date range.
                </p>
              </>
            ) : (
              <>
                {/* Daily Breakdown */}
                <h3 className="mb-4 text-lg font-bold text-slate-900 dark:text-white">Daily Breakdown</h3>
                <div className="flex h-64 items-center justify-center rounded-lg border border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-800">
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    No daily data available for this period.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Right Sidebar - Summary Cards */}
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white">
            <h4 className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-600">Total Referrals</h4>
            <p className="text-2xl font-bold text-slate-900 dark:text-slate-900">0</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h4 className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-300">Total Paid Out</h4>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">$0.00</p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h4 className="mb-2 text-sm font-semibold text-slate-600 dark:text-slate-300">Available Balance</h4>
            <p className="text-2xl font-bold text-slate-900 dark:text-white">$0.00</p>
          </div>
        </div>
      </div>
    </div>
  )
}
