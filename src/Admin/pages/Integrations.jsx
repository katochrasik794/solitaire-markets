import { useState } from 'react'
import { Settings, Save, Key, Mail, BarChart, Facebook, Webhook, Send } from 'lucide-react'

export default function Integrations() {
  const [integrations, setIntegrations] = useState({
    mt5: { enabled: true, apiKey: 'MT5-API-KEY-12345', server: 'OxoFunded-Demo' },
    email: { enabled: true, smtpHost: 'smtp.gmail.com', smtpPort: '587', smtpUser: 'noreply@OxoFunded.com' },
    analytics: { enabled: true, trackingId: 'GA-123456789' },
    pixel: { enabled: false, pixelId: 'FB-123456789' },
    webhooks: { enabled: true, url: 'https://api.OxoFunded.com/webhook' },
    telegram: { enabled: false, botToken: 'TELEGRAM-BOT-TOKEN', chatId: 'CHAT-ID' },
  })

  const integrationConfigs = [
    {
      id: 'mt5',
      name: 'MetaTrader 5 / MT4',
      icon: Settings,
      description: 'Connect to MT5/MT4 trading servers',
      fields: [
        { label: 'API Key', key: 'apiKey', type: 'text' },
        { label: 'Server', key: 'server', type: 'text' },
      ],
    },
    {
      id: 'email',
      name: 'Email SMTP',
      icon: Mail,
      description: 'Configure email server settings',
      fields: [
        { label: 'SMTP Host', key: 'smtpHost', type: 'text' },
        { label: 'SMTP Port', key: 'smtpPort', type: 'text' },
        { label: 'SMTP User', key: 'smtpUser', type: 'text' },
      ],
    },
    {
      id: 'analytics',
      name: 'Google Analytics',
      icon: BarChart,
      description: 'Track website analytics',
      fields: [
        { label: 'Tracking ID', key: 'trackingId', type: 'text' },
      ],
    },
    {
      id: 'pixel',
      name: 'Facebook Pixel',
      icon: Facebook,
      description: 'Track conversions and events',
      fields: [
        { label: 'Pixel ID', key: 'pixelId', type: 'text' },
      ],
    },
    {
      id: 'webhooks',
      name: 'Webhooks',
      icon: Webhook,
      description: 'Configure webhook endpoints',
      fields: [
        { label: 'Webhook URL', key: 'url', type: 'url' },
      ],
    },
    {
      id: 'telegram',
      name: 'Telegram Alerts',
      icon: Send,
      description: 'Send alerts via Telegram bot',
      fields: [
        { label: 'Bot Token', key: 'botToken', type: 'text' },
        { label: 'Chat ID', key: 'chatId', type: 'text' },
      ],
    },
  ]

  const toggleIntegration = (id) => {
    setIntegrations((prev) => ({
      ...prev,
      [id]: { ...prev[id], enabled: !prev[id].enabled },
    }))
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white">Integrations</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {integrationConfigs.map((config) => {
          const IconComponent = config.icon
          const integration = integrations[config.id]
          
          return (
            <div
              key={config.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    integration.enabled ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-slate-100 dark:bg-slate-800'
                  }`}>
                    <IconComponent className={`h-5 w-5 ${
                      integration.enabled ? 'text-blue-600 dark:text-blue-400' : 'text-slate-400'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{config.name}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{config.description}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={integration.enabled}
                    onChange={() => toggleIntegration(config.id)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-slate-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
              
              {integration.enabled && (
                <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-700">
                  {config.fields.map((field) => (
                    <div key={field.key}>
                      <label className="mb-1 block text-xs font-medium text-slate-700 dark:text-slate-300">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        value={integration[field.key] || ''}
                        onChange={(e) => {
                          setIntegrations((prev) => ({
                            ...prev,
                            [config.id]: { ...prev[config.id], [field.key]: e.target.value },
                          }))
                        }}
                        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                      />
                    </div>
                  ))}
                  <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700">
                    <Save className="h-4 w-4" />
                    Save Configuration
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

