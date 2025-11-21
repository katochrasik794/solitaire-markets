import { Award, FileText } from 'lucide-react'
import { useState } from 'react'

export default function Rewards() {
  const [showRequestModal, setShowRequestModal] = useState(false)

  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] flex-col gap-4 md:gap-6 px-4 md:px-6 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10">
      {/* Two Cards Section */}
      <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2">
        {/* Left Card - No Certificate Available */}
        <div className="rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="mb-6 flex justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-500 dark:bg-blue-600">
              <Award className="h-12 w-12 text-white" />
            </div>
          </div>
          <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
            No Certificate Available
          </h3>
          <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">
            You&apos;ll earn your payout certificate once you start receiving rewards.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Keep trading to unlock your achievements!
          </p>
        </div>

        {/* Right Card - Request Reward */}
        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
            Ready to request your reward?
          </h3>
          <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
            Please click on the request button then proceed to fill out the required information, our team
            will reach out to you for further advancements.
          </p>
          <button 
            onClick={() => setShowRequestModal(true)}
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700"
          >
            Request Reward
          </button>
          {showRequestModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setShowRequestModal(false)}>
              <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-slate-900 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Request Reward</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                  Please fill out the required information to request your reward. Our team will reach out to you for further advancements.
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowRequestModal(false)}
                    className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      alert('Reward request submitted! Our team will contact you soon.')
                      setShowRequestModal(false)
                    }}
                    className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                  >
                    Submit Request
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table Section */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 dark:bg-slate-800">
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-300">
                  Reference ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Reward Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Requested On
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Method
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Certificate
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  Invoice
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Empty state - no rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
