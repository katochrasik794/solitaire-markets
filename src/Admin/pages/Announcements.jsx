import { useState } from 'react'
import { Plus, Edit, Trash2, Send, Bell } from 'lucide-react'

export default function Announcements() {
  const announcements = [
    {
      id: 1,
      title: 'New Challenge Plans Available',
      message: 'We are excited to announce new challenge plans with better profit targets!',
      type: 'Dashboard',
      status: 'Active',
      createdDate: '2024-01-15',
      sentTo: 'All Users',
    },
    {
      id: 2,
      title: 'Maintenance Scheduled',
      message: 'Scheduled maintenance on January 20th from 2 AM to 4 AM EST.',
      type: 'Email',
      status: 'Active',
      createdDate: '2024-01-14',
      sentTo: 'All Users',
    },
    {
      id: 3,
      title: 'Trading Competition Starting',
      message: 'Join our monthly trading competition and win cash prizes!',
      type: 'SMS',
      status: 'Inactive',
      createdDate: '2024-01-10',
      sentTo: 'Active Traders',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Announcements</h2>
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          Create Announcement
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-600" />
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  announcement.type === 'Dashboard' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                  announcement.type === 'Email' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                  'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                }`}>
                  {announcement.type}
                </span>
              </div>
              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                announcement.status === 'Active' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}>
                {announcement.status}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{announcement.title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">{announcement.message}</p>
            <div className="space-y-2 mb-4 text-xs text-slate-500 dark:text-slate-400">
              <p>Sent To: {announcement.sentTo}</p>
              <p>Created: {announcement.createdDate}</p>
            </div>
            <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                <Edit className="h-4 w-4" />
                Edit
              </button>
              <button className="p-2 rounded-lg border border-blue-300 bg-white hover:bg-blue-50 dark:border-blue-600 dark:bg-slate-800 text-blue-700 dark:text-blue-400">
                <Send className="h-4 w-4" />
              </button>
              <button className="p-2 rounded-lg border border-red-300 bg-white hover:bg-red-50 dark:border-red-600 dark:bg-slate-800 text-red-700 dark:text-red-400">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

