import { useState } from 'react'
import { Key, CreditCard, Save, Eye, EyeOff } from 'lucide-react'

export default function PaymentGateway() {
  const [showKeys, setShowKeys] = useState(false)
  const [gateway, setGateway] = useState('Razorpay')
  const [mode, setMode] = useState('Live')

  const gateways = ['Razorpay', 'Stripe', 'PayPal']

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Payment Gateway Configuration</h2>
        
        <div className="space-y-6">
          {/* Gateway Selection */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Payment Gateway
            </label>
            <select
              value={gateway}
              onChange={(e) => setGateway(e.target.value)}
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
            >
              {gateways.map((gw) => (
                <option key={gw} value={gw}>{gw}</option>
              ))}
            </select>
          </div>

          {/* Mode Selection */}
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Mode
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mode"
                  value="Test"
                  checked={mode === 'Test'}
                  onChange={(e) => setMode(e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm text-slate-700 dark:text-slate-300">Test</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="mode"
                  value="Live"
                  checked={mode === 'Live'}
                  onChange={(e) => setMode(e.target.value)}
                  className="h-4 w-4 text-blue-600"
                />
                <span className="text-sm text-slate-700 dark:text-slate-300">Live</span>
              </label>
            </div>
          </div>

          {/* API Keys */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                API Keys
              </label>
              <button
                onClick={() => setShowKeys(!showKeys)}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                {showKeys ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <div>
              <label className="mb-2 block text-xs text-slate-600 dark:text-slate-400">
                Public Key / Key ID
              </label>
              <input
                type={showKeys ? 'text' : 'password'}
                placeholder="Enter public key..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              />
            </div>
            <div>
              <label className="mb-2 block text-xs text-slate-600 dark:text-slate-400">
                Secret Key
              </label>
              <input
                type={showKeys ? 'text' : 'password'}
                placeholder="Enter secret key..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              />
            </div>
          </div>

          {/* Save Button */}
          <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
            <Save className="h-4 w-4" />
            Save Configuration
          </button>
        </div>
      </div>

      {/* Payment Logs */}
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Recent Payment Logs</h3>
        <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
          <p>• Payment ID: PAY-001 - Status: Success - Amount: $49 - Gateway: Razorpay</p>
          <p>• Payment ID: PAY-002 - Status: Failed - Amount: $99 - Gateway: Razorpay</p>
          <p>• Payment ID: PAY-003 - Status: Success - Amount: $189 - Gateway: Razorpay</p>
        </div>
      </div>
    </div>
  )
}

