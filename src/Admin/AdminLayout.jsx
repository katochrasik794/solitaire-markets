import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { PanelRightOpen } from 'lucide-react'
import AdminSidebar from './components/AdminSidebar'
import { adminNavItems } from './navItems'
import { useTheme } from '../context/ThemeContext'

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024)
  const location = useLocation()
  const { theme } = useTheme()

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getPageName = () => {
    const currentPath = location.pathname
    const navItem = adminNavItems.find((item) => item.path === currentPath)
    return navItem ? navItem.label : 'Dashboard'
  }

  const pageName = getPageName()

  return (
    <div className="flex min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <div className="relative">
        <AdminSidebar isExpanded={sidebarOpen} onItemClick={() => setSidebarOpen(false)} />
        <button
          type="button"
          aria-label={`${sidebarOpen ? 'Collapse' : 'Expand'} sidebar`}
          onClick={() => setSidebarOpen((prev) => !prev)}
          className={`fixed lg:absolute top-2 z-50 flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-lg shadow-black/20 transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-400 dark:border-white/20 dark:bg-slate-800 dark:text-white dark:shadow-black/40 dark:hover:border-white/40 dark:hover:bg-slate-700 ${
            sidebarOpen
              ? 'right-[240px] lg:right-auto lg:left-[256px] lg:-translate-x-1/2'
              : 'right-2 lg:right-auto lg:left-[80px] lg:-translate-x-1/2'
          }`}
        >
          <PanelRightOpen 
            className={`h-3.5 w-3.5 transition ${
              isLargeScreen
                ? (sidebarOpen ? 'lg:rotate-0' : 'lg:rotate-180')
                : (sidebarOpen ? 'rotate-180' : 'rotate-0')
            }`}
          />
        </button>
      </div>
      <div className="relative z-10 flex-1 w-full lg:w-auto">
        <div className="overflow-hidden border-b border-white/10 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 py-2 md:py-2.5 text-center text-xs md:text-sm font-semibold text-white shadow-lg shadow-purple-500/30">
          <div className="marquee-track">
            <span className="whitespace-nowrap">Admin Dashboard - Manage your platform efficiently</span>
            <span className="whitespace-nowrap">Admin Dashboard - Manage your platform efficiently</span>
          </div>
        </div>
        {/* Page Header */}
        <div className="bg-white px-6 py-4 dark:bg-slate-950 sm:px-10">
          <div className="flex items-center gap-4">
            <img
              src={theme === 'dark' ? '/logo.svg' : '/logo.svg'}
              alt="Solitaire Markets"
              className="h-8 w-auto object-contain"
              draggable="false"
            />
            <span className="h-8 w-px bg-slate-300 dark:bg-slate-600" />
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{pageName}</h1>
          </div>
        </div>
        <main className="bg-white dark:bg-slate-950 space-y-10 px-6 pb-16 pt-6 sm:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

