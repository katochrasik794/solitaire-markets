import { useState } from 'react'
import { Filter, Calendar, ChevronDown, ArrowUp } from 'lucide-react'

export default function EconomicCalendar() {
  const [selectedDays, setSelectedDays] = useState([])
  const [showPassedEvents, setShowPassedEvents] = useState(false)
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null)

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const impactLevels = [
    { label: 'High Impact', color: 'bg-red-500' },
    { label: 'Medium Impact', color: 'bg-orange-500' },
    { label: 'Low Impact', color: 'bg-green-500' },
    { label: 'No Impact', color: 'bg-slate-400' },
  ]

  const events = [
    {
      time: '1:45 PM',
      currency: 'EUR',
      currencyIcon: '🇪🇺',
      arrows: 1,
      eventType: 'French Flash Manufacturing PMI',
      previous: '48.3',
      forecast: '49.0',
      restricted: false,
    },
    {
      time: '1:45 PM',
      currency: 'EUR',
      currencyIcon: '🇪🇺',
      arrows: 1,
      eventType: 'French Flash Services PMI',
      previous: '47.1',
      forecast: '48.4',
      restricted: false,
    },
    {
      time: '2:00 PM',
      currency: 'EUR',
      currencyIcon: '🇪🇺',
      arrows: 2,
      eventType: 'German Flash Manufacturing PMI',
      previous: '49.6',
      forecast: '49.8',
      restricted: true,
    },
    {
      time: '2:00 PM',
      currency: 'EUR',
      currencyIcon: '🇪🇺',
      arrows: 2,
      eventType: 'German Flash Services PMI',
      previous: '54.5',
      forecast: '54.0',
      restricted: true,
    },
    {
      time: '2:00 PM',
      currency: 'EUR',
      currencyIcon: '🇪🇺',
      arrows: 1,
      eventType: 'ECB President Lagarde Speaks',
      previous: '',
      forecast: '',
      restricted: false,
    },
  ]

  const toggleDay = (day) => {
    setSelectedDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]))
  }

  return (
    <div className="-mx-6 flex min-h-[calc(100vh-180px)] w-full max-w-full flex-col gap-4 md:gap-6 overflow-x-hidden px-4 md:px-6 pt-4 md:pt-6 pb-12 text-slate-900 bg-white dark:bg-slate-950 dark:text-slate-100 sm:-mx-10 sm:px-10 lg:pt-8">
      {/* ================= FILTERS SECTION ================= */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 md:p-4 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-3 flex items-center gap-2">
          <Filter className="h-4 w-4 text-slate-600 dark:text-slate-300" />
          <h3 className="text-sm md:text-base font-semibold text-slate-900 dark:text-white">Filters</h3>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-end gap-3 md:gap-6">
          {/* Currency Selector */}
          <div className="w-full sm:w-48">
            <label className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-700">
              Currency
            </label>
            <div className="relative">
              <select className="w-full rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-xs focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100">
                <option>Select currency...</option>
                <option>EUR</option>
                <option>USD</option>
                <option>GBP</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>

          {/* Day Selector */}
          <div className="flex-1 w-full sm:min-w-[280px]">
            <label className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-700">Days</label>
            <div className="flex gap-1.5">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => toggleDay(day)}
                  className={`flex-1 rounded-lg border px-2 py-1 text-xs font-medium transition ${
                    selectedDays.includes(day)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:border-slate-400'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Impact Level Filters */}
          <div className="flex-1 w-full sm:min-w-[280px]">
            <label className="mb-1.5 block text-xs font-medium text-slate-700 dark:text-slate-700">
              Impact Level
            </label>
            <div className="flex flex-wrap gap-1.5">
              {impactLevels.map((impact) => (
                <button
                  key={impact.label}
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold text-white ${impact.color}`}
                >
                  {impact.label}
                </button>
              ))}
            </div>
          </div>

          {/* Show Passed Events Toggle */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="text-xs font-medium text-slate-700 dark:text-slate-700 whitespace-nowrap">
              Show Passed Events
            </label>
            <button
              onClick={() => setShowPassedEvents(!showPassedEvents)}
              className={`relative h-5 w-9 rounded-full transition ${
                showPassedEvents ? 'bg-blue-600' : 'bg-slate-300'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition ${
                  showPassedEvents ? 'translate-x-4' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* ================= EVENTS TABLE ================= */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900 overflow-hidden">
        <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-slate-200 dark:divide-white/10 table-fixed">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                <th className="px-2 md:px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 whitespace-nowrap w-20">
                  Time
                </th>
                <th className="px-2 md:px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 whitespace-nowrap w-24">
                  Currency
                </th>
                <th className="px-2 md:px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 min-w-[200px]">
                  Event Type
                </th>
                <th className="px-2 md:px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 whitespace-nowrap w-20">
                  Previous
                </th>
                <th className="px-2 md:px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 whitespace-nowrap w-20">
                  Forecast
                </th>
                <th className="px-2 md:px-3 py-2 text-left text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 whitespace-nowrap w-32">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr
                  key={index}
                  className="border-b border-slate-100 transition hover:bg-slate-50 dark:border-white/5 dark:hover:bg-slate-50"
                >
                  <td className="px-2 md:px-3 py-2 md:py-2.5 whitespace-nowrap">
                    <span className="text-xs text-slate-900 dark:text-white">{event.time}</span>
                  </td>
                  <td className="px-2 md:px-3 py-2 md:py-2.5 whitespace-nowrap">
                    <div className="flex items-center gap-1 md:gap-1.5">
                      {Array.from({ length: event.arrows }).map((_, i) => (
                        <ArrowUp key={i} className="h-3 w-3 text-slate-400 flex-shrink-0" />
                      ))}
                      <span className="text-sm md:text-base flex-shrink-0">{event.currencyIcon}</span>
                      <span className="text-xs font-medium text-slate-900 dark:text-white">
                        {event.currency}
                      </span>
                    </div>
                  </td>
                  <td className="px-2 md:px-3 py-2 md:py-2.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs text-slate-900 dark:text-white break-words">{event.eventType}</span>
                      {event.restricted && (
                        <span className="rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-semibold text-red-700 dark:bg-red-100 dark:text-red-700 whitespace-nowrap flex-shrink-0">
                          Restricted
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-2 md:px-3 py-2 md:py-2.5 whitespace-nowrap">
                    <span className="text-xs text-slate-900 dark:text-white">{event.previous || '-'}</span>
                  </td>
                  <td className="px-2 md:px-3 py-2 md:py-2.5 whitespace-nowrap">
                    <span className="text-xs text-slate-900 dark:text-white">{event.forecast || '-'}</span>
                  </td>
                  <td className="px-2 md:px-3 py-2 md:py-2.5 whitespace-nowrap">
                    <div className="relative">
                      <button
                        onClick={() => setOpenDropdownIndex(openDropdownIndex === index ? null : index)}
                        className="flex items-center gap-1 rounded-lg border border-slate-300 bg-white px-2 md:px-2.5 py-1 text-xs font-medium text-slate-700 hover:border-slate-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 overflow-hidden"
                      >
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        <span className="hidden sm:inline truncate">Add to Calendar</span>
                        <span className="sm:hidden truncate">Add</span>
                        <ChevronDown className="h-3 w-3 flex-shrink-0" />
                      </button>
                      {openDropdownIndex === index && (
                        <div className="absolute right-0 top-full z-10 mt-1 w-48 rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
                          <div className="py-1">
                            {['Google Calendar', 'Outlook', 'Apple Calendar', 'Yahoo Calendar'].map((calendar) => (
                              <button
                                key={calendar}
                                onClick={() => {
                                  setOpenDropdownIndex(null)
                                  // Handle calendar selection here
                                }}
                                className="w-full px-4 py-2 text-left text-xs text-slate-700 hover:bg-slate-50 dark:text-slate-700 dark:hover:bg-slate-50"
                              >
                                {calendar}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  )
}
