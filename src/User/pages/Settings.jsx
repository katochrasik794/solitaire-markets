import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Calendar, ChevronDown, Shield, Check, Lock, Wallet, CreditCard, Rocket, MessageCircle, FlaskConical } from 'lucide-react'

export default function Settings() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState('Profile')
  const [formData, setFormData] = useState({
    title: '',
    firstName: 'User',
    lastName: 'Kumar',
    email: 'luckyjay159@gmail.com',
    dateOfBirth: '',
    timezone: '',
    streetAddress: '123 Main Street',
    city: '',
    country: '',
    postalCode: '12345',
  })

  const configSections = [
    'Profile',
    'Account Verification',
    'Security',
    'Bank Accounts',
    'Credit Cards',
    'Crypto Wallets',
    'Payment History',
    'Discord',
    'Early Access',
    'Preferences',
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] w-full max-w-full flex-col lg:flex-row gap-4 md:gap-6 overflow-x-hidden px-4 md:px-6 pt-4 md:pt-6 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10 lg:pt-8">
      {/* Configuration Navigation - Mobile: Grid Wrap, Desktop: Vertical Sidebar */}
      <div className="w-full lg:w-64 lg:flex-shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-3 md:p-4 dark:border-slate-700 dark:bg-slate-900">
        <h3 className="mb-3 md:mb-4 text-xs md:text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
          Configuration
        </h3>
        <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2 lg:gap-1">
          {configSections.map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`w-full rounded-lg px-3 py-2 text-left text-xs md:text-sm font-medium transition ${
                activeSection === section
                  ? 'bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-slate-100'
                  : 'text-slate-600 hover:bg-white/50 dark:text-slate-400 dark:hover:bg-slate-800/50'
              }`}
            >
              {section}
            </button>
          ))}
        </nav>
      </div>

      {/* Right Content Area */}
      <div className="flex-1 w-full lg:w-auto">
        {activeSection === 'Profile' && (
          <div className="space-y-4 md:space-y-6">
            {/* Personal Information */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-4">
                <h2 className="mb-1 text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Personal Information
                </h2>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  Update your personal details and contact information.
                </p>
              </div>

              <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2">
                {/* Left Column */}
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                      Title
                    </label>
                    <div className="relative">
                      <select
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                      >
                        <option value="">Select title...</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                        <option value="Dr">Dr</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className="w-full rounded-lg border border-slate-300 bg-slate-100 px-3 py-2 text-xs md:text-sm text-slate-500 dark:border-white/20 dark:bg-slate-700 dark:text-slate-400"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        placeholder="dd-mm-yyyy"
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 pr-10 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                      />
                      <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                      Preferred Time Zone
                    </label>
                    <div className="relative">
                      <select
                        value={formData.timezone}
                        onChange={(e) => handleInputChange('timezone', e.target.value)}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                      >
                        <option value="">Select timezone...</option>
                        <option value="UTC">UTC</option>
                        <option value="EST">EST</option>
                        <option value="PST">PST</option>
                        <option value="GMT">GMT</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Address Information */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-4">
                <h2 className="mb-1 text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Address Information
                </h2>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  Your residential address for verification and billing purposes.
                </p>
              </div>

              <div className="grid gap-3 md:gap-4 grid-cols-1 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                    Street Address
                  </label>
                  <input
                    type="text"
                    value={formData.streetAddress}
                    onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Enter your city"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                    >
                      <option value="">Select country...</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="IN">India</option>
                      <option value="CA">Canada</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    value={formData.postalCode}
                    onChange={(e) => handleInputChange('postalCode', e.target.value)}
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <button 
                onClick={() => {
                  alert('Profile changes saved successfully!')
                  // In a real app, this would save to backend
                }}
                className="rounded-lg bg-blue-600 px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                Save Profile Changes
              </button>
            </div>
          </div>
        )}

        {/* Account Verification */}
        {activeSection === 'Account Verification' && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 md:p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-slate-600 dark:text-slate-400 mt-1" />
                <div>
                  <h2 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100">
                    Identity Verification Available
                  </h2>
                  <p className="mt-1 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                    You can now verify your identity
                  </p>
                </div>
              </div>
              <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                Not Verified
              </span>
            </div>

            <div className="flex flex-col items-center justify-center py-6 md:py-8">
              <h3 className="mb-2 text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">Start Verification</h3>
              <p className="mb-6 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                Verify your identity to unlock additional features
              </p>
              <button className="rounded-lg bg-blue-600 px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                Start Verification
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-1 text-xs text-slate-500 dark:text-slate-500">
              <Check className="h-3 w-3" />
              <span>Powered by KYCAID</span>
            </div>
          </div>
        )}

        {/* Security */}
        {activeSection === 'Security' && (
          <div className="space-y-4 md:space-y-6">
            {/* Change Password */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h2 className="mb-4 text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">Change Password</h2>
              <div className="flex flex-col md:flex-row md:flex-wrap md:items-end gap-4">
                <div className="flex-1 w-full md:min-w-[200px]">
                  <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your current password"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>
                <div className="flex-1 w-full md:min-w-[200px]">
                  <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                    New Password
                  </label>
          <input
                    type="password"
                    placeholder="New Password"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>
                <div className="flex-1 w-full md:min-w-[200px]">
                  <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                    Confirm Password
        </label>
          <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100"
                  />
                </div>
                <button className="w-full md:w-auto rounded-lg bg-blue-600 px-4 md:px-6 py-2 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                  Change Password
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <h2 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Two-Factor Authentication
                </h2>
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-100 dark:text-red-700">
                  Disabled
                </span>
              </div>
              <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 p-6 md:p-12 dark:border-slate-400 dark:bg-slate-800">
                <button 
                  onClick={() => alert('2FA setup will be initiated. Please follow the instructions to enable two-factor authentication.')}
                  className="rounded-lg bg-blue-600 px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Enable 2FA
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bank Accounts */}
        {activeSection === 'Bank Accounts' && (
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-12 shadow-sm dark:border-white/10 dark:bg-slate-900">
            <h2 className="mb-6 md:mb-8 text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Bank Accounts</h2>
            <div className="flex flex-col items-center justify-center py-8 md:py-12">
              <Wallet className="mb-4 h-12 w-12 md:h-16 md:w-16 text-slate-400" />
              <h3 className="mb-2 text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">
                Wire Transfers Not Available
              </h3>
              <p className="mb-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                You&apos;re not currently eligible for wire transfers.
              </p>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                Please contact support if you believe this is an error.
              </p>
            </div>
          </div>
        )}

        {/* Credit Cards */}
        {activeSection === 'Credit Cards' && (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Credit Cards</h2>
            <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white p-6 md:p-12 shadow-sm dark:border-slate-600 dark:bg-slate-900">
              <div className="text-center">
                <CreditCard className="mx-auto mb-4 h-12 w-12 md:h-16 md:w-16 text-slate-400" />
                <h3 className="mb-2 text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">No Credit Cards</h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  Your credit cards will appear here after you complete a payment.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Crypto Wallets */}
        {activeSection === 'Crypto Wallets' && (
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Crypto Wallets</h2>
              <button 
                onClick={() => alert('Add Wallet: Please enter your crypto wallet address to receive payouts.')}
                className="w-full sm:w-auto rounded-lg bg-blue-600 px-4 py-2 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                + Add Wallet
              </button>
            </div>
            <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-12 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="text-center">
                <Wallet className="mx-auto mb-4 h-12 w-12 md:h-16 md:w-16 text-slate-400" />
                <h3 className="mb-2 text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">No Crypto Wallets</h3>
                <p className="mb-1 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                  Add your first crypto wallet to start receiving payouts via cryptocurrency.
                </p>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">You can add up to 5 wallets.</p>
              </div>
            </div>
          </div>
        )}

        {/* Payment History */}
        {activeSection === 'Payment History' && (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Payment History</h2>
            <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 md:p-12 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <Rocket className="mb-4 h-12 w-12 md:h-16 md:w-16 text-slate-400" />
              <h3 className="mb-2 text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100">No payment history</h3>
              <p className="mb-6 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                Purchase your first challenge to get started
              </p>
              <button 
                onClick={() => navigate('/new-challenge')}
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
              >
                <Rocket className="h-4 w-4" />
                Buy Challenge
              </button>
            </div>
          </div>
        )}

        {/* Discord */}
        {activeSection === 'Discord' && (
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Connect to Discord</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100">Discord Not Connected</h3>
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                      Connect your Discord account to receive trade alerts and community updates
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID', '_blank')}
                  className="w-full sm:w-auto rounded-lg bg-blue-600 px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Connect Discord
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Early Access */}
        {activeSection === 'Early Access' && (
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Early Access</h2>
            <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 md:p-12 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <FlaskConical className="mb-4 h-12 w-12 md:h-16 md:w-16 text-slate-400" />
              <h3 className="mb-2 text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100">No Beta Features Available</h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400">
                There are no beta features currently available. Check back later for exciting new features in
                development!
              </p>
            </div>
          </div>
        )}

        {/* Preferences */}
        {activeSection === 'Preferences' && (
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100">Preferences</h2>
            <div className="rounded-xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="mb-1 text-base md:text-lg font-semibold text-slate-900 dark:text-slate-100">Preferences</h3>
              <p className="mb-4 text-xs md:text-sm text-slate-600 dark:text-slate-400">Select your preferred language.</p>
              <div>
                <label className="mb-1.5 block text-xs md:text-sm font-medium text-slate-700 dark:text-slate-300">
                  Language
        </label>
                <div className="relative">
                  <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs md:text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-white/20 dark:bg-slate-800 dark:text-slate-100">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
