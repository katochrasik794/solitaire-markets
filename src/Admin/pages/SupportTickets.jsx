import { useState } from 'react'
import { Search, MessageSquare, Clock, CheckCircle, XCircle, User, Tag } from 'lucide-react'

export default function SupportTickets() {
  const [statusFilter, setStatusFilter] = useState('Open')

  const tickets = [
    {
      id: 'TKT-001',
      user: 'John Doe',
      email: 'john@example.com',
      subject: 'Payment Issue',
      message: 'I am unable to complete my payment for the challenge.',
      status: 'Open',
      priority: 'High',
      assignedTo: 'Unassigned',
      createdDate: '2024-01-15 10:30 AM',
      lastReply: '2 hours ago',
    },
    {
      id: 'TKT-002',
      user: 'Jane Smith',
      email: 'jane@example.com',
      subject: 'Account Access',
      message: 'I forgot my password and cannot access my account.',
      status: 'In Progress',
      priority: 'Medium',
      assignedTo: 'Support Team A',
      createdDate: '2024-01-14 02:15 PM',
      lastReply: '1 day ago',
    },
    {
      id: 'TKT-003',
      user: 'Mike Johnson',
      email: 'mike@example.com',
      subject: 'KYC Verification',
      message: 'My KYC documents were rejected. Can you review again?',
      status: 'Closed',
      priority: 'Low',
      assignedTo: 'Support Team B',
      createdDate: '2024-01-13 09:45 AM',
      lastReply: '3 days ago',
    },
  ]

  const getStatusBadge = (status) => {
    if (status === 'Open') return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    if (status === 'In Progress') return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
    if (status === 'Closed') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
  }

  const getPriorityBadge = (priority) => {
    if (priority === 'High') return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
    if (priority === 'Medium') return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'
    if (priority === 'Low') return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
    return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search tickets..."
              className="w-full rounded-lg border border-slate-300 bg-white pl-10 pr-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            <option>All Status</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{ticket.subject}</h3>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusBadge(ticket.status)}`}>
                    {ticket.status}
                  </span>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getPriorityBadge(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{ticket.user}</span>
                  </div>
                  <span>•</span>
                  <span>{ticket.email}</span>
                  <span>•</span>
                  <span>Assigned: {ticket.assignedTo}</span>
                </div>
              </div>
              <div className="text-right text-sm text-slate-500 dark:text-slate-400">
                <p>{ticket.createdDate}</p>
                <p className="text-xs">Last reply: {ticket.lastReply}</p>
              </div>
            </div>
            <p className="text-sm text-slate-700 dark:text-slate-300 mb-4">{ticket.message}</p>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                <MessageSquare className="h-4 w-4" />
                Reply
              </button>
              <button className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                View Thread
              </button>
              {ticket.status !== 'Closed' && (
                <button className="inline-flex items-center gap-2 rounded-lg border border-green-300 bg-white px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50 dark:border-green-600 dark:bg-slate-800 dark:text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  Close Ticket
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

