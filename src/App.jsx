import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './User/UserLayout'
import Home from './User/pages/Home'
import NewChallenge from './User/pages/NewChallenge'
import Accounts from './User/pages/Accounts'
import Rewards from './User/pages/Rewards'
import Competition from './User/pages/Competition'
import CompetitionDetails from './User/pages/CompetitionDetails'
import Leaderboards from './User/pages/Leaderboards'
import Certificates from './User/pages/Certificates'
import EconomicCalendar from './User/pages/EconomicCalendar'
import Affiliate from './User/pages/Affiliate'
import Settings from './User/pages/Settings'
import Theme from './User/pages/Theme'
import Logout from './User/pages/Logout'
import AdminLayout from './Admin/AdminLayout'
import Dashboard from './Admin/pages/Dashboard'
import UserManagement from './Admin/pages/UserManagement'
import ChallengesManagement from './Admin/pages/ChallengesManagement'
import Orders from './Admin/pages/Orders'
import TradingAccounts from './Admin/pages/TradingAccounts'
import KYCVerification from './Admin/pages/KYCVerification'
import Payouts from './Admin/pages/Payouts'
import Coupons from './Admin/pages/Coupons'
import Announcements from './Admin/pages/Announcements'
import SupportTickets from './Admin/pages/SupportTickets'
import CMS from './Admin/pages/CMS'
import PaymentGateway from './Admin/pages/PaymentGateway'
import Integrations from './Admin/pages/Integrations'
import Security from './Admin/pages/Security'
import ActivityLogs from './Admin/pages/ActivityLogs'
import ErrorLogs from './Admin/pages/ErrorLogs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="new-challenge" element={<NewChallenge />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="competition" element={<Competition />} />
          <Route path="competition/:id" element={<CompetitionDetails />} />
          <Route path="leaderboards" element={<Leaderboards />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="economic-calendar" element={<EconomicCalendar />} />
          <Route path="affiliate" element={<Affiliate />} />
          <Route path="settings" element={<Settings />} />
          <Route path="theme" element={<Theme />} />
          <Route path="logout" element={<Logout />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="challenges" element={<ChallengesManagement />} />
          <Route path="orders" element={<Orders />} />
          <Route path="trading-accounts" element={<TradingAccounts />} />
          <Route path="kyc" element={<KYCVerification />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="coupons" element={<Coupons />} />
          <Route path="announcements" element={<Announcements />} />
          <Route path="support" element={<SupportTickets />} />
          <Route path="cms" element={<CMS />} />
          <Route path="payment-settings" element={<PaymentGateway />} />
          <Route path="integrations" element={<Integrations />} />
          <Route path="security" element={<Security />} />
          <Route path="activity-logs" element={<ActivityLogs />} />
          <Route path="error-logs" element={<ErrorLogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
