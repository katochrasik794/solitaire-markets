import { useState } from 'react'
import { Search, Filter, AlertCircle, XCircle, RefreshCw, Server } from 'lucide-react'

export default function ErrorLogs() {
  const [severityFilter, setSeverityFilter] = useState('All')

  const errors = [
    {
      id: 1,
      type: 'API Failure',
      message: 'Payment gateway API timeout',
      severity: 'High',
      source: 'Payment Gateway',
      time: '2024-01-15 10:30 AM',
      resolved: false,
    },
    {
      id: 2,
      type: 'MT5 Connection Error',
      message: 'Failed to connect to MT5 server',
      severity: 'High',
      source: 'MT5 Integration',
      time: '2024-01-15 09:15 AM',
      resolved: true,
    },
    {
      id: 3,
      type: 'Server Error',
      message: '500 Internal Server Error on /api/users',
      severity: 'Critical',
      source: 'Backend API',
      time: '2024-01-14 02:45 PM',
      resolved: false,
    },
    {
      id: 4,
      type: 'Payment Failure',
      message: 'Razorpay payment failed - Insufficient funds',
      severity: 'Medium',
      source: 'Payment Gateway',
      time: '2024-01-14 11:20 AM',
      resolved: true,
    },
    {
      id: 5,
      type: 'Database Error',
      message: 'Connection pool exhausted',
      severity: 'Critical',
      source: 'Database',
      time: '2024-01-13 03:30 PM',
      resolved: true,
    },
  ]

  const getSeverityBadge = (severity) => {
    if (severity === 'Critical') return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    if (severity === 'High') return 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400'
    if (severity === 'Medium') return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
  }

  const getSourceIcon = (source) => {
    if (source.includes('MT5') || source.includes('API')) return <Server className="h-4 w-4" />
    return <AlertCircle className="h-4 w-4" />
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search error logs..."
              className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
          <select
            value={severityFilter}
            onChange={(e) => setSeverityFilter(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option>All Severity</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {errors.map((error) => (
          <div
            key={error.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3 flex-1">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  error.severity === 'Critical' ? 'bg-red-100 dark:bg-red-900/30' :
                  error.severity === 'High' ? 'bg-orange-100 dark:bg-orange-900/30' :
                  'bg-yellow-100 dark:bg-yellow-900/30'
                }`}>
                  {getSourceIcon(error.source)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{error.type}</h3>
                    <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getSeverityBadge(error.severity)}`}>
                      {error.severity}
                    </span>
                    {error.resolved && (
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
                        Resolved
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{error.message}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span>Source: {error.source}</span>
                    <span>•</span>
                    <span>{error.time}</span>
                  </div>
                </div>
              </div>
              {!error.resolved && (
                <button className="p-2 rounded-lg border border-green-300 bg-white hover:bg-green-50 dark:border-green-600 dark:bg-slate-800 text-green-700 dark:text-green-400">
                  <RefreshCw className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

