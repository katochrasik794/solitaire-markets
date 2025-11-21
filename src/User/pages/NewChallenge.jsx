import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function NewChallenge() {
  const [challengeType, setChallengeType] = useState('Two Step')
  const [model, setModel] = useState('OxoFunded')
  const [profitTarget, setProfitTarget] = useState('8%')
  const [accountSize, setAccountSize] = useState('$100,000.00')
  const [tradingPlatform, setTradingPlatform] = useState('MetaTrader 5')
  const [showBillingDetails, setShowBillingDetails] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [billingData, setBillingData] = useState({
    firstName: 'User',
    lastName: 'Kumar',
    country: '',
    billingAddress: '123, Billing Street',
    city: 'New York',
    zipCode: '10001',
  })

  const calculatePrice = () => {
    let price = 529.0
    if (profitTarget === '10%') price -= 40.0
    if (tradingPlatform === 'CTrader') price += 20.0
    return price.toFixed(2)
  }

  const totalPrice = calculatePrice()

  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] flex-col gap-6 px-6 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10">
      <div className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
        {/* ================= LEFT COLUMN - CHALLENGE CONFIGURATION ================= */}
        <div className="space-y-6">
          {/* Challenge Type */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Challenge Type</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['One Step', 'Zero', 'Two Step'].map((type) => (
                <label
                  key={type}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 p-3 hover:border-blue-500 dark:border-slate-600 dark:hover:border-blue-500"
                >
                  <input
                    type="radio"
                    name="challengeType"
                    value={type}
                    checked={challengeType === type}
                    onChange={(e) => setChallengeType(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{type}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Model */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Model</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {['OxoFunded', 'OxoFunded Pro'].map((modelOption) => (
                <label
                  key={modelOption}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 p-3 hover:border-blue-500 dark:border-slate-600 dark:hover:border-blue-500"
                >
                  <input
                    type="radio"
                    name="model"
                    value={modelOption}
                    checked={model === modelOption}
                    onChange={(e) => setModel(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{modelOption}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Customise Trading Rules with Profit Target */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-200 dark:border-slate-700">
              <span className="text-xl">⚙️</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Customise Trading Rules</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Adjust your challenge parameters to match your trading style
                </p>
              </div>
            </div>

            {/* Profit Target */}
            <div>
              <div className="mb-4">
                <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Profit Target</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Choose options for profit target</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 p-3 hover:border-blue-500 dark:border-white/10 dark:hover:border-blue-500">
                  <input
                    type="radio"
                    name="profitTarget"
                    value="8%"
                    checked={profitTarget === '8%'}
                    onChange={(e) => setProfitTarget(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">8% Default</span>
                </label>
                <label className="flex cursor-pointer items-center justify-between rounded-lg border border-slate-200 p-3 hover:border-blue-500 dark:border-slate-600 dark:hover:border-blue-500">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="profitTarget"
                      value="10%"
                      checked={profitTarget === '10%'}
                      onChange={(e) => setProfitTarget(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">10%</span>
                  </div>
                  <span className="text-xs text-red-600 dark:text-red-400">-$40.00</span>
                </label>
              </div>
            </div>
          </section>

          {/* Account Size */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4">
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Account Size</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Choose your preferred account size</p>
            </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {['$5,000.00', '$10,000.00', '$25,000.00', '$50,000.00', '$100,000.00'].map((size) => (
                <label
                  key={size}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 p-3 hover:border-blue-500 dark:border-slate-600 dark:hover:border-blue-500"
                >
                  <input
                    type="radio"
                    name="accountSize"
                    value={size}
                    checked={accountSize === size}
                    onChange={(e) => setAccountSize(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{size}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Trading Platform */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4">
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1">Trading Platform</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Choose your preferred trading platform</p>
            </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { name: 'MetaTrader 5', price: '' },
                    { name: 'MatchTrader', price: '' },
                    { name: 'CTrader', price: '+$20.00' },
                  ].map((platform) => (
                <label
                  key={platform.name}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-slate-200 p-3 hover:border-blue-500 dark:border-slate-600 dark:hover:border-blue-500"
                >
                  <input
                    type="radio"
                    name="tradingPlatform"
                    value={platform.name}
                    checked={tradingPlatform === platform.name}
                    onChange={(e) => setTradingPlatform(e.target.value)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                  />
                  <div className="flex flex-col items-center">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200 text-center">
                      {platform.name}
                    </span>
                    {platform.price && (
                      <span className="text-xs text-green-600 dark:text-green-400">{platform.price}</span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </section>
        </div>

        {/* ================= RIGHT COLUMN - BILLING & ORDER SUMMARY ================= */}
        <div className="space-y-6">
          {/* Billing Details */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <button
              onClick={() => setShowBillingDetails(!showBillingDetails)}
              className="flex w-full items-center justify-between mb-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Billing Details</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Enter your billing information for the challenge purchase
                </p>
              </div>
              {showBillingDetails ? (
                <ChevronUp className="h-5 w-5 text-slate-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-slate-500" />
              )}
            </button>
            {showBillingDetails && (
              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={billingData.firstName}
                      onChange={(e) => setBillingData({ ...billingData, firstName: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={billingData.lastName}
                      onChange={(e) => setBillingData({ ...billingData, lastName: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Country
                  </label>
                  <select
                    value={billingData.country}
                    onChange={(e) => setBillingData({ ...billingData, country: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-white/5 dark:text-white"
                  >
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="IN">India</option>
                    <option value="CA">Canada</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Billing Address
                  </label>
                  <input
                    type="text"
                    value={billingData.billingAddress}
                    onChange={(e) => setBillingData({ ...billingData, billingAddress: e.target.value })}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-white/5 dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">City</label>
                    <input
                      type="text"
                      value={billingData.city}
                      onChange={(e) => setBillingData({ ...billingData, city: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                      ZIP / Postal Code
                    </label>
                    <input
                      type="text"
                      value={billingData.zipCode}
                      onChange={(e) => setBillingData({ ...billingData, zipCode: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                    />
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Coupon Code */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-3 text-sm font-semibold text-slate-700 dark:text-slate-200">Coupon Code</h3>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-white/5 dark:text-white"
              />
              <button className="rounded-lg bg-blue-600 px-6 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                Apply
              </button>
            </div>
          </section>

          {/* Order Summary */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">Order Summary</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {accountSize} — {challengeType} {model}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Platform: {tradingPlatform}</p>
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">${totalPrice}</p>
              </div>
              <div className="border-t border-slate-200 pt-3 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-base font-semibold text-slate-900 dark:text-white">Total</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">${totalPrice}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Terms Agreement */}
          <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-900 dark:text-white">
                  I agree with all the following terms:
                </p>
                <ul className="mt-2 space-y-1 text-xs text-slate-600 dark:text-slate-300">
                  <li className="list-disc list-inside">
                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                      Terms of Use
                    </a>
                  </li>
                  <li className="list-disc list-inside">
                    <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
                      Terms & Conditions
                    </a>
                  </li>
                  <li className="list-disc list-inside">
                    I confirm that I am not a U.S. citizen or resident
                  </li>
                  <li className="list-disc list-inside">I understand the challenge rules and requirements</li>
                </ul>
              </div>
            </label>
          </section>

          {/* Continue to Payment Button */}
          <button
            onClick={() => {
              if (!agreeTerms) {
                alert('Please agree to the terms and conditions to continue.')
                return
              }
              alert('Redirecting to payment page...')
              // In a real app, this would navigate to payment page
              // navigate('/payment')
            }}
            disabled={!agreeTerms}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  )
}
