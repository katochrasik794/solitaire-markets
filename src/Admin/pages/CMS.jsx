import { useState } from 'react'
import { Edit, Save, FileText, Globe, BookOpen, HelpCircle, Shield, FileCheck } from 'lucide-react'

export default function CMS() {
  const [activeSection, setActiveSection] = useState('Homepage')

  const cmsSections = [
    { id: 'Homepage', label: 'Homepage', icon: Globe },
    { id: 'About', label: 'About Us', icon: FileText },
    { id: 'Rules', label: 'Rules', icon: BookOpen },
    { id: 'FAQs', label: 'FAQs', icon: HelpCircle },
    { id: 'Terms', label: 'Terms & Conditions', icon: Shield },
    { id: 'Privacy', label: 'Privacy Policy', icon: FileCheck },
  ]

  const sampleContent = {
    Homepage: 'Welcome to OxoFunded - Your gateway to funded trading accounts...',
    About: 'OxoFunded is a leading prop trading firm...',
    Rules: 'Trading Rules and Guidelines...',
    FAQs: 'Frequently Asked Questions...',
    Terms: 'Terms and Conditions of Service...',
    Privacy: 'Privacy Policy and Data Protection...',
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Content Sections
            </h3>
            <nav className="space-y-1">
              {cmsSections.map((section) => {
                const IconComponent = section.icon
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
                    }`}
                  >
                    <IconComponent className="h-4 w-4" />
                    {section.label}
                  </button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Content Editor */}
        <div className="lg:col-span-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                {cmsSections.find((s) => s.id === activeSection)?.label}
              </h2>
              <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Title
                </label>
                <input
                  type="text"
                  defaultValue={`${activeSection} Title`}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Content
                </label>
                <textarea
                  rows={12}
                  defaultValue={sampleContent[activeSection]}
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Meta Description (SEO)
                </label>
                <textarea
                  rows={2}
                  placeholder="Enter meta description for SEO..."
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

