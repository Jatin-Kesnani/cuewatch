import { NavLink } from 'react-router-dom'

type NavItem = {
  to: string
  icon: string
  label: string
  end?: boolean
}

const NAV_ITEMS: NavItem[] = [
  { to: '/dashboard', icon: 'dashboard', label: 'Dashboard', end: true },
  { to: '/subscriptions', icon: 'receipt_long', label: 'Subscriptions' },
  { to: '/renewals', icon: 'calendar_month', label: 'Renewals' },
  { to: '/analytics', icon: 'bar_chart', label: 'Analytics' },
  { to: '/settings', icon: 'settings', label: 'Settings' },
]

export default function Sidebar() {
  return (
    <aside className="h-full w-72 flex-col fixed left-0 top-0 bg-[#faf8ff] dark:bg-[#0f172a] shadow-[0_32px_64px_rgba(19,27,46,0.04)] z-50 md:flex hidden">
      <div className="flex flex-col gap-2 p-6 h-full font-['Plus_Jakarta_Sans'] text-sm tracking-tight">
        <div className="mb-10 px-2">
          <span className="text-2xl font-bold tracking-tighter text-[#2a14b4] dark:text-white">
            CUEWATCH
          </span>
          <p className="text-[10px] uppercase tracking-[0.2em] text-outline mt-1 font-semibold">
            Premium Concierge
          </p>
        </div>
        <nav className="flex flex-col gap-1 flex-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive
                  ? 'bg-[#dae2fd] dark:bg-[#334155] text-[#2a14b4] dark:text-white font-semibold rounded-xl flex items-center gap-3 px-4 py-3 active:scale-[0.98] transition-all duration-300'
                  : 'text-slate-500 dark:text-slate-400 font-medium hover:bg-[#f2f3ff] dark:hover:bg-[#1e293b] flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 active:scale-[0.98]'
              }
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-outline-variant/10">
          <button className="w-full bg-primary text-white font-bold py-4 rounded-3xl flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined text-lg">add</span>
            Add Subscription
          </button>
        </div>
      </div>
    </aside>
  )
}
