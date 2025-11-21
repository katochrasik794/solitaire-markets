import { useState } from 'react'
import { Shield, Key, Lock, UserCheck, AlertTriangle, Save } from 'lucide-react'

export default function Security() {
  const [activeTab, setActiveTab] = useState('2FA')
  const [twoFAEnabled, setTwoFAEnabled] = useState(false)
  const [ipWhitelist, setIpWhitelist] = useState(['192.168.1.1', '10.0.0.1'])
  const [newIp, setNewIp] = useState('')

  const roles = [
    { id: 1, name: 'Owner', permissions: ['All'], users: 1 },
    { id: 2, name: 'Manager', permissions: ['Users', 'Orders', 'Payouts'], users: 3 },
    { id: 3, name: 'Support Team', permissions: ['Support Tickets', 'KYC'], users: 5 },
  ]

  const loginLogs = [
    { id: 1, user: 'Admin User', ip: '192.168.1.1', location: 'New York, USA', time: '2024-01-15 10:30 AM', status: 'Success' },
    { id: 2, user: 'Admin User', ip: '10.0.0.1', location: 'London, UK', time: '2024-01-14 02:15 PM', status: 'Success' },
    { id: 3, user: 'Support Team', ip: '192.168.1.100', location: 'Unknown', time: '2024-01-13 09:45 AM', status: 'Failed' },
  ]

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Security Settings</h2>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-700">
        {['2FA', 'IP Whitelist', 'Roles', 'Login Logs'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-semibold transition ${
              activeTab === tab
                ? 'border-b-2 border-blue-600 text-blue-600 dark:text-blue-400'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 2FA Section */}
      {activeTab === '2FA' && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Two-Factor Authentication</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Enable 2FA for admin accounts</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={twoFAEnabled}
                onChange={(e) => setTwoFAEnabled(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          {twoFAEnabled && (
            <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Two-Factor Authentication is enabled. All admin users will be required to use 2FA for login.
              </p>
            </div>
          )}
        </div>
      )}

      {/* IP Whitelist Section */}
      {activeTab === 'IP Whitelist' && (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">IP Address Whitelist</h3>
          <div className="space-y-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newIp}
                onChange={(e) => setNewIp(e.target.value)}
                placeholder="Enter IP address..."
                className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              />
              <button
                onClick={() => {
                  if (newIp) {
                    setIpWhitelist([...ipWhitelist, newIp])
                    setNewIp('')
                  }
                }}
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Add IP
              </button>
            </div>
            <div className="space-y-2">
              {ipWhitelist.map((ip, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700">
                  <span className="text-sm text-slate-900 dark:text-white">{ip}</span>
                  <button
                    onClick={() => setIpWhitelist(ipWhitelist.filter((_, i) => i !== index))}
                    className="text-red-600 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Roles Section */}
      {activeTab === 'Roles' && (
        <div className="space-y-4">
          {roles.map((role) => (
            <div
              key={role.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{role.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{role.users} users assigned</p>
                </div>
                <button className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  Edit Role
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {role.permissions.map((permission) => (
                  <span
                    key={permission}
                    className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                  >
                    {permission}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Login Logs Section */}
      {activeTab === 'Login Logs' && (
        <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    IP Address
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Time
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {loginLogs.map((log) => (
                  <tr
                    key={log.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-800"
                  >
                    <td className="px-4 py-3">
                      <span className="text-sm text-slate-900 dark:text-white">{log.user}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{log.ip}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{log.location}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-sm text-slate-600 dark:text-slate-400">{log.time}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        log.status === 'Success'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                          : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

