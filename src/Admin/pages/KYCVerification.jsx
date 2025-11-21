import { useState } from 'react'
import { Search, CheckCircle, XCircle, Clock, Eye, FileText } from 'lucide-react'

export default function KYCVerification() {
  const [statusFilter, setStatusFilter] = useState('Pending')

  const kycRequests = [
    {
      id: 1,
      user: 'John Doe',
      email: 'john@example.com',
      status: 'Pending',
      submittedDate: '2024-01-15',
      documentType: 'Passport',
    },
    {
      id: 2,
      user: 'Jane Smith',
      email: 'jane@example.com',
      status: 'Pending',
      submittedDate: '2024-01-16',
      documentType: 'National ID',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      email: 'mike@example.com',
      status: 'Verified',
      submittedDate: '2024-01-10',
      documentType: 'Driver License',
    },
    {
      id: 4,
      user: 'Sarah Williams',
      email: 'sarah@example.com',
      status: 'Rejected',
      submittedDate: '2024-01-12',
      documentType: 'Passport',
      rejectionReason: 'Document quality too low',
    },
  ]

  const getStatusBadge = (status) => {
    if (status === 'Verified') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    if (status === 'Pending') return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    if (status === 'Rejected') return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
  }

  const getStatusIcon = (status) => {
    if (status === 'Verified') return <CheckCircle className="h-4 w-4" />
    if (status === 'Pending') return <Clock className="h-4 w-4" />
    if (status === 'Rejected') return <XCircle className="h-4 w-4" />
    return null
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search KYC requests..."
              className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Verified</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  User
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Document Type
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Submitted Date
                </th>
                <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {kycRequests.map((request) => (
                <tr
                  key={request.id}
                  className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <td className="px-4 py-3">
                    <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">{request.user}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{request.email}</p>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{request.documentType}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${getStatusBadge(request.status)}`}>
                      {getStatusIcon(request.status)}
                      {request.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-sm text-slate-600 dark:text-slate-400">{request.submittedDate}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => alert(`Viewing documents for ${request.user}`)}
                        className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                        title="View Documents"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      {request.status === 'Pending' && (
                        <>
                          <button
                            onClick={() => alert(`Approving KYC for ${request.user}`)}
                            className="p-1.5 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 text-green-600 dark:text-green-400"
                            title="Approve"
                          >
                            <CheckCircle className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => {
                              const reason = prompt('Enter rejection reason:')
                              if (reason) alert(`Rejecting KYC for ${request.user}. Reason: ${reason}`)
                            }}
                            className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400"
                            title="Reject"
                          >
                            <XCircle className="h-4 w-4" />
                          </button>
                        </>
                      )}
                    </div>
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

