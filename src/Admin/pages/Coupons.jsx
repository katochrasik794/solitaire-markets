import { useState } from 'react'
import { Plus, Edit, Trash2, ToggleLeft, ToggleRight } from 'lucide-react'

export default function Coupons() {
  const coupons = [
    {
      id: 1,
      code: 'HELLO',
      type: 'Percentage',
      discount: '20%',
      limit: 1000,
      used: 450,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'Active',
      applicableTo: 'All Challenges',
    },
    {
      id: 2,
      code: 'WELCOME50',
      type: 'Fixed',
      discount: '$50',
      limit: 500,
      used: 320,
      startDate: '2024-01-15',
      endDate: '2024-06-30',
      status: 'Active',
      applicableTo: '10K Challenge',
    },
    {
      id: 3,
      code: 'SUMMER2024',
      type: 'Percentage',
      discount: '15%',
      limit: 2000,
      used: 2000,
      startDate: '2024-06-01',
      endDate: '2024-08-31',
      status: 'Inactive',
      applicableTo: 'All Challenges',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Coupon Codes</h2>
        <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
          <Plus className="h-4 w-4" />
          Create Coupon
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{coupon.code}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{coupon.type} Discount</p>
              </div>
              <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                coupon.status === 'Active' 
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}>
                {coupon.status}
              </span>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Discount:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{coupon.discount}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Usage:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{coupon.used} / {coupon.limit}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Valid From:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{coupon.startDate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Valid Until:</span>
                <span className="font-semibold text-slate-900 dark:text-white">{coupon.endDate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">Applicable To:</span>
                <span className="font-semibold text-slate-900 dark:text-white text-right">{coupon.applicableTo}</span>
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
    </div>
  )
}

