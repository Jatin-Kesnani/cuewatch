import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import TopBar from './TopBar'

export default function DashboardLayout() {
  return (
    <div className="bg-background text-on-surface min-h-screen">
      <Sidebar />
      <TopBar />
      <main className="pt-24 pb-12 px-6 md:px-10 ml-0 md:ml-72 transition-all">
        <Outlet />
      </main>
    </div>
  )
}
