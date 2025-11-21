import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
})

const THEME_KEY = 'Solitaire Markets:theme'

export function ThemeProvider({ children }) {
  const [theme] = useState('light')

  useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    // Always remove dark class to ensure light mode
    root.classList.remove('dark')
    localStorage.setItem(THEME_KEY, 'light')
  }, [])

  const toggleTheme = () => {
    // Disabled - theme is always light
  }

  const value = useMemo(() => ({ theme, toggleTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

