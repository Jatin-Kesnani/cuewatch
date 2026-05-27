import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import LandingPage from './pages/LandingPage'
import Dashboard from './pages/Dashboard'
import SubscriptionDetail from './pages/SubscriptionDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscriptions" element={<Navigate to="/subscriptions/netflix" replace />} />
          <Route path="/subscriptions/:slug" element={<SubscriptionDetail />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
