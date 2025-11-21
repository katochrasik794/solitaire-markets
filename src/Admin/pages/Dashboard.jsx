import { Users, Briefcase, TrendingUp, TrendingDown, DollarSign, Clock, CheckCircle, XCircle, Activity, Tag, Bell } from 'lucide-react'

export default function Dashboard() {
  const stats = [
    {
      title: 'Total Users',
      value: '12,458',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'bg-blue-500',
    },
    {
      title: 'Total Challenges Purchased',
      value: '8,942',
      change: '+8.2%',
      trend: 'up',
      icon: Briefcase,
      color: 'bg-purple-500',
    },
    {
      title: 'Active Challenges',
      value: '3,245',
      change: '+5.1%',
      trend: 'up',
      icon: Activity,
      color: 'bg-green-500',
    },
    {
      title: 'Failed Challenges',
      value: '1,892',
      change: '-2.3%',
      trend: 'down',
      icon: XCircle,
      color: 'bg-red-500',
    },
    {
      title: 'Passed Challenges',
      value: '2,805',
      change: '+15.7%',
      trend: 'up',
      icon: CheckCircle,
      color: 'bg-emerald-500',
    },
    {
      title: 'Total Revenue',
      value: '$2,458,920',
      change: '+18.4%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-amber-500',
    },
    {
      title: 'Daily Revenue',
      value: '$12,450',
      change: '+3.2%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-indigo-500',
    },
    {
      title: 'Withdrawals Pending',
      value: '127',
      change: '+8',
      trend: 'up',
      icon: Clock,
      color: 'bg-orange-500',
    },
    {
      title: 'Payouts Completed',
      value: '1,245',
      change: '+24',
      trend: 'up',
      icon: CheckCircle,
      color: 'bg-teal-500',
    },
  ]

  const recentActivity = [
    { type: 'signup', user: 'John Doe', email: 'john@example.com', time: '2 minutes ago' },
    { type: 'purchase', user: 'Jane Smith', email: 'jane@example.com', amount: '$10,000', time: '5 minutes ago' },
    { type: 'signup', user: 'Mike Johnson', email: 'mike@example.com', time: '12 minutes ago' },
    { type: 'purchase', user: 'Sarah Williams', email: 'sarah@example.com', amount: '$25,000', time: '18 minutes ago' },
    { type: 'signup', user: 'David Brown', email: 'david@example.com', time: '25 minutes ago' },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${stat.color} bg-opacity-10`}>
                  <IconComponent className={`h-6 w-6 ${stat.color.replace('bg-', 'text-')}`} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-semibold ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3" />
                  ) : (
                    <TrendingDown className="h-3 w-3" />
                  )}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{stat.title}</p>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Recent User Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <div className="flex items-center gap-3">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    activity.type === 'signup' ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-green-100 dark:bg-green-900/30'
                  }`}>
                    {activity.type === 'signup' ? (
                      <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <Briefcase className="h-4 w-4 text-green-600 dark:text-green-400" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 dark:text-white">{activity.user}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{activity.email}</p>
                    {activity.amount && (
                      <p className="text-xs font-semibold text-green-600">{activity.amount}</p>
                    )}
                  </div>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 transition">
              <Users className="h-6 w-6 text-blue-600" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Add User</span>
            </button>
            <button className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 transition">
              <Briefcase className="h-6 w-6 text-purple-600" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Create Challenge</span>
            </button>
            <button className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 transition">
              <Tag className="h-6 w-6 text-green-600" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Create Coupon</span>
            </button>
            <button className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 transition">
              <Bell className="h-6 w-6 text-orange-600" />
              <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Send Announcement</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

