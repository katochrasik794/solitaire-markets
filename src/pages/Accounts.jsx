import React from 'react'

export default function Accounts() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 p-6 border-r bg-white">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold mr-3">A</div>
          <span className="text-xl font-semibold">Hey, User</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-2 rounded mb-6 font-medium">🚀 BUY CHALLENGE</button>
        <div className="flex gap-2 mb-6">
          <select className="border rounded px-2 py-1 text-sm">
            <option>All Types</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>All States</option>
          </select>
          <select className="border rounded px-2 py-1 text-sm">
            <option>All Phases</option>
          </select>
        </div>
        <div className="flex flex-col items-center mt-20">
          <span className="text-2xl mb-2">📄</span>
          <span className="text-gray-500 mb-2">No accounts match your filters</span>
          <span className="text-xs text-gray-400 text-center">Try selecting different filters to find your accounts.</span>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow p-10 w-96 flex flex-col items-center">
          <span className="text-4xl mb-4">🎁</span>
          <h2 className="font-semibold text-lg mb-2 text-center">Select an Account to View Details</h2>
          <p className="text-gray-500 text-center mb-6">
            Choose a trading account from the list to see its detailed information and performance metrics.
          </p>
          <div className="bg-gray-100 rounded p-4 w-full text-center mb-4">
            <p className="text-sm text-gray-600 mb-2">Don't have an account yet?</p>
            <p className="text-xs text-gray-400 mb-4">Trade up to $300,000 in simulated capital.</p>
            <button className="w-full bg-blue-600 text-white py-2 rounded font-medium">🚀 BUY CHALLENGE</button>
          </div>
        </div>
      </div>
    </div>
  )
}