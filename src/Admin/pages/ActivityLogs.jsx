import { useState } from 'react'
import { Search, Filter, User, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react'

export default function ActivityLogs() {
  const [typeFilter, setTypeFilter] = useState('All')

  const logs = [
    {
      id: 1,
      admin: 'Admin User',
      action: 'User Updated',
      target: 'John Doe',
      details: 'Updated user profile information',
      time: '2024-01-15 10:30 AM',
      type: 'User Management',
    },
    {
      id: 2,
      admin: 'Support Team',
      action: 'Payout Approved',
      target: 'PAY-001',
      details: 'Approved payout of $1,250 for Jane Smith',
      time: '2024-01-15 09:15 AM',
      type: 'Payouts',
    },
    {
      id: 3,
      admin: 'Manager',
      action: 'Challenge Created',
      target: '50K Challenge',
      details: 'Created new challenge template',
      time: '2024-01-14 02:45 PM',
      type: 'Challenges',
    },
    {
      id: 4,
      admin: 'Admin User',
      action: 'KYC Rejected',
      target: 'Mike Johnson',
      details: 'Rejected KYC documents - Document quality too low',
      time: '2024-01-14 11:20 AM',
      type: 'KYC',
    },
    {
      id: 5,
      admin: 'Support Team',
      action: 'Order Activated',
      target: 'ORD-002',
      details: 'Manually activated pending order',
      time: '2024-01-13 03:30 PM',
      type: 'Orders',
    },
  ]

  const getTypeBadge = (type) => {
    const colors = {
      'User Management': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
      'Payouts': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      'Challenges': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
      'KYC': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
      'Orders': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    }
    return colors[type] || 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search activity logs..."
              className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option>All Types</option>
            <option>User Management</option>
            <option>Payouts</option>
            <option>Challenges</option>
            <option>KYC</option>
            <option>Orders</option>
          </select>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Admin
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Action
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Target
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Details
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Time
                </th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log) => (
                <tr
                  key={log.id}
                  className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-slate-900 dark:text-white">{log.admin}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-slate-900 dark:text-white">{log.action}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{log.target}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{log.details}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getTypeBadge(log.type)}`}>
                      {log.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{log.time}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

