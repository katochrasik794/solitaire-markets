import { useState } from 'react'
import { Plus, Edit, Trash2, ToggleLeft, ToggleRight, Settings } from 'lucide-react'

export default function ChallengesManagement() {
  const [activeTab, setActiveTab] = useState('Templates')
  const [showRulesModal, setShowRulesModal] = useState(false)

  const challengeTemplates = [
    {
      id: 1,
      name: '10K Challenge',
      accountSize: '$10,000',
      price: '$49',
      profitTarget: '8%',
      dailyDrawdown: '5%',
      maxDrawdown: '10%',
      timeLimit: '30 days',
      status: 'Active',
    },
    {
      id: 2,
      name: '25K Challenge',
      accountSize: '$25,000',
      price: '$99',
      profitTarget: '8%',
      dailyDrawdown: '5%',
      maxDrawdown: '10%',
      timeLimit: '30 days',
      status: 'Active',
    },
    {
      id: 3,
      name: '50K Challenge',
      accountSize: '$50,000',
      price: '$189',
      profitTarget: '8%',
      dailyDrawdown: '5%',
      maxDrawdown: '10%',
      timeLimit: '30 days',
      status: 'Active',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-700">
        {['Templates', 'Rules'].map((tab) => (
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

      {activeTab === 'Templates' && (
        <>
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Challenge Templates</h2>
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
              <Plus className="h-4 w-4" />
              Create Template
            </button>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {challengeTemplates.map((template) => (
              <div
                key={template.id}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{template.name}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Account: {template.accountSize}</p>
                  </div>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    template.status === 'Active' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}>
                    {template.status}
                  </span>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Price:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{template.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Profit Target:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{template.profitTarget}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Daily Drawdown:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{template.dailyDrawdown}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Max Drawdown:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{template.maxDrawdown}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 dark:text-slate-400">Time Limit:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{template.timeLimit}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                  <button className="p-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    <ToggleRight className="h-4 w-4" />
                  </button>
                  <button className="p-2 rounded-lg border border-red-300 bg-white hover:bg-red-50 dark:border-red-600 dark:bg-slate-800 text-red-700 dark:text-red-400">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {activeTab === 'Rules' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Trading Rules Configuration</h2>
            <button
              onClick={() => setShowRulesModal(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              <Settings className="h-4 w-4" />
              Configure Rules
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phase 1 Rules */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Phase 1 Rules</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Profit Target:</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Daily Drawdown:</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Max Drawdown:</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Time Limit:</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">30 days</span>
                </div>
              </div>
            </div>

            {/* Phase 2 Rules */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Phase 2 Rules</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Profit Target:</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Daily Drawdown:</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Max Drawdown:</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-600 dark:text-slate-400">Time Limit:</span>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white">60 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Scaling Plan */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Scaling Plan</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">Initial Account:</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">$10,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">After 3 Payouts:</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">$25,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">After 6 Payouts:</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">$50,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-600 dark:text-slate-400">After 10 Payouts:</span>
                <span className="text-sm font-semibold text-slate-900 dark:text-white">$100,000</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

