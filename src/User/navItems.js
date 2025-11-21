import {
  Home,
  Plus,
  Briefcase,
  Gift,
  Trophy,
  ListOrdered,
  BadgeCheck,
  CalendarDays,
  Users,
  Settings,
  MoonStar,
  LogOut,
} from 'lucide-react'

export const userNavItems = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'New Challenge', path: '/new-challenge', icon: Plus },
  { label: 'Accounts', path: '/accounts', icon: Briefcase },
  { label: 'Rewards', path: '/rewards', icon: Gift },
  { label: 'Competition', path: '/competition', icon: Trophy },
  { label: 'Leaderboards', path: '/leaderboards', icon: ListOrdered },
  { label: 'Certificates', path: '/certificates', icon: BadgeCheck },
  { label: 'Economic Calendar', path: '/economic-calendar', icon: CalendarDays },
  { label: 'Affiliate', path: '/affiliate', icon: Users },
  { label: 'Settings', path: '/settings', icon: Settings },
  { label: 'Light / Dark', path: '/theme', icon: MoonStar, action: 'toggleTheme' },
  { label: 'Logout', path: '/logout', icon: LogOut },
]

