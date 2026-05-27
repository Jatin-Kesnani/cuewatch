import { Link } from 'react-router-dom'

type Row = {
  slug: string
  name: string
  category: string
  cost: string
  date: string
  status: 'Active' | 'Trial' | 'Canceled'
  logo: string
}

const ROWS: Row[] = [
  {
    slug: 'netflix',
    name: 'Netflix',
    category: 'Entertainment',
    cost: '$15.99',
    date: 'Jul 12, 2024',
    status: 'Active',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC2k0W-geiKsElCvfUq6uHx805dl9swQixrdO2RsKwQygpoce1l1jXeE9hj3Wx6BrXU3BhqpnOGWCj4ty9T0dFKBXUeJvtfMVfeAoXU_Wd9de6xUFp8PU_B3Y40G_PS207GDAtt5bhciQd-QQwkdIFcQ8KKOj5L8hjucktVMvUX1bGb5ZRL4c7LmINZLTnZhpWGNq5BjauwZMm6n_498VSYVTLyK4vhLm1O_pgof0BGbAjc_qI_qLowolBxBc2hPkBEQRkeTA5Yqw',
  },
  {
    slug: 'adobe',
    name: 'Adobe CC',
    category: 'Creative',
    cost: '$52.99',
    date: 'Jul 15, 2024',
    status: 'Trial',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC97MycMUATsZ_vcqeKM0OELZvD34rKKTxU8s9XvWHnYoJqETwuXLao48-WiCcoCJ8wGA_qC_8jGrMQEw10dvMP9K01NL6UsuiQ7sNlstORyxQwaJoR0H0C9L40E37_-EMNXQeiBGkPNdUyVNjW4ypZ5LgXGLyl5q3ikUik3N94q4KEBfqgDp8fQoj6yM8H1nxEHAHTETYiSH7QEFRDLIHi8kUmW4EszJ5AdtJ8xNuixcviNvkoYAX08vJik4fKLZ9DNZ5VbLKxPw',
  },
  {
    slug: 'spotify',
    name: 'Spotify',
    category: 'Music',
    cost: '$9.99',
    date: 'Jul 08, 2024',
    status: 'Canceled',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCODnZI-BsL2vdkCPWzyQblEFJfI1enMqOM62I9SrFL78jKPnM-GEkjb4GW3hfIVncn9VbDjQUZetCU7QyNlTm7M9dGE80xxnh4jr7nP6IQX4sdIvJ_K8ralrSc7tbRloTLqNkfo8nl2qNGYKa8WW8xZDKMfLKjbpGSxJGq2ZyVHPBOK22_ev8hkNo-Y_Htk1O6D-hBdJlOEW61jWzogAK9bIOMHS1Qr392qBj_6zA00hbqG-zsb7FNs0zzH1r2q8QMtwsDzRcVqg',
  },
]

const STATUS_BADGE: Record<Row['status'], string> = {
  Active: 'bg-[#e7f6ed] text-[#1e8a44]',
  Trial: 'bg-[#fef7e0] text-[#b48d14]',
  Canceled: 'bg-[#fce8e8] text-[#ba1a1a]',
}

const CHART_BARS = [
  { month: 'Jan', height: '40%', active: false },
  { month: 'Feb', height: '55%', active: false },
  { month: 'Mar', height: '50%', active: false },
  { month: 'Apr', height: '75%', active: true },
  { month: 'May', height: '65%', active: false },
  { month: 'Jun', height: '80%', active: false },
]

export default function Dashboard() {
  return (
    <>
      {/* Hero Alert */}
      <section className="mb-10">
        <div className="glass-pane p-6 rounded-3xl flex flex-col md:flex-row items-center gap-6 border-l-4 border-secondary">
          <div className="bg-secondary-container/20 p-4 rounded-2xl">
            <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              lightbulb
            </span>
          </div>
          <div className="flex-1">
            <p className="text-label-md font-bold text-secondary uppercase tracking-widest text-[10px] mb-1">
              Smart Alert
            </p>
            <h3 className="text-xl font-bold text-on-surface">Unused Subscription Detected</h3>
            <p className="text-on-surface-variant text-sm mt-1">
              You haven't used <span className="font-bold text-on-surface">LinkedIn Premium</span> in 30 days. Would you like to save $29.99 this month?
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="px-6 py-2.5 rounded-xl text-sm font-bold text-primary hover:bg-primary/5 transition-colors border border-primary/20">
              Keep
            </button>
            <button className="px-6 py-2.5 rounded-xl text-sm font-bold bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Cancel & Save
            </button>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-surface-container-low p-6 rounded-3xl group hover:bg-surface-container-high transition-all duration-300">
          <p className="text-outline text-xs font-bold uppercase tracking-widest mb-4">Total Monthly Spend</p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">$142.50</h2>
            <span className="text-error text-xs font-bold flex items-center bg-error-container px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-sm mr-1">trending_up</span> 4%
            </span>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-3xl group hover:bg-surface-container-high transition-all duration-300">
          <p className="text-outline text-xs font-bold uppercase tracking-widest mb-4">Active Subscriptions</p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">12</h2>
            <span className="text-primary text-xs font-bold flex items-center bg-primary-fixed px-2 py-1 rounded-lg">
              Stable
            </span>
          </div>
        </div>
        <div className="bg-primary text-white p-6 rounded-3xl shadow-2xl shadow-primary/20 group hover:scale-[1.02] transition-all duration-300">
          <p className="text-primary-fixed/60 text-xs font-bold uppercase tracking-widest mb-4">Annual Savings</p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-extrabold tracking-tighter text-white">$320</h2>
            <span className="material-symbols-outlined text-3xl opacity-40">auto_awesome</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-3xl group hover:bg-surface-container-high transition-all duration-300">
          <p className="text-outline text-xs font-bold uppercase tracking-widest mb-4">Upcoming Renewals</p>
          <div className="flex items-end justify-between">
            <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">3</h2>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-surface-container-low bg-white flex items-center justify-center p-1.5">
                <img className="w-full h-full object-contain" alt="Netflix" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBspFYTrSBqWONJjNDUR6LRA2s2HGWkT2P4HYKd4670VvqSw4xmibs-FYUnzrpGh85MBjafz_usu8u57sjJRRDqe5U6WEX0dm7n4BymtMbXHnpoUNkD2_fHsVgMYoeC8UobWkDKc1BV6GoSLFzpdRz42p66N070jcdY5e4ho_bAVmw9AP8nz55r_lUWAgxpCQmkcpx53lElPswIA0RiWsuYOmfjhKABbf4iBpYlwjOCRXLxV5gPug_IIhXJ4VJyR7g_0my_22u9lA" />
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-surface-container-low bg-white flex items-center justify-center p-1.5">
                <img className="w-full h-full object-contain" alt="Adobe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALmm3NXJVYPyX-omVugPP7v9DjA9yenUfc-38ofMfQlVg1gs46hI2ndkIYoVmtYgoNUdd_QqrK37XSZso8gLcmWb2-aX1HBl-2RPTZY6ISEKVP7sLn0SjEewyo3e7fMtiP1eO1f3lJGuRiCfyvMX8Mf1DDO6BT28vUCHnRNxQ3bNRxdRgIdwcVtU-L8q9ON0KjpYXjkbeozv89ebX82irINXH4yYSbXuGpyzd-9Es8unFvm6n-ggzs4YVB4-jOx0hQ9gHso-b7GQ" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 flex flex-col gap-10">
          {/* Spending Analytics */}
          <div className="bg-surface-container-low p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-xl font-bold">Spending Analytics</h3>
                <p className="text-on-surface-variant text-sm">Review your costs over the last 6 months</p>
              </div>
              <select className="bg-white border-none text-xs font-bold rounded-xl focus:ring-primary-fixed shadow-sm">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-2">
              {CHART_BARS.map((b) => (
                <div
                  key={b.month}
                  className="flex-1 self-stretch flex flex-col items-center justify-end gap-3 group"
                >
                  <div
                    className={
                      b.active
                        ? 'w-full bg-primary rounded-t-xl shadow-xl shadow-primary/10'
                        : 'w-full bg-surface-container-highest rounded-t-xl group-hover:bg-primary-fixed transition-all duration-500'
                    }
                    style={{ height: b.height }}
                  ></div>
                  <span className={`text-[10px] font-bold uppercase ${b.active ? 'text-on-surface' : 'text-outline'}`}>
                    {b.month}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Subscriptions Table */}
          <div className="bg-surface-container-low p-8 rounded-3xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Manage Subscriptions</h3>
              <button className="text-primary text-sm font-bold hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b border-outline-variant/10">
                    <th className="pb-4 text-[10px] font-bold text-outline uppercase tracking-widest">Service</th>
                    <th className="pb-4 text-[10px] font-bold text-outline uppercase tracking-widest">Category</th>
                    <th className="pb-4 text-[10px] font-bold text-outline uppercase tracking-widest text-right">Cost</th>
                    <th className="pb-4 text-[10px] font-bold text-outline uppercase tracking-widest text-right">Billing Date</th>
                    <th className="pb-4 text-[10px] font-bold text-outline uppercase tracking-widest text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/5">
                  {ROWS.map((row) => (
                    <tr key={row.slug} className="group hover:bg-white transition-all duration-300">
                      <td className="py-5">
                        <Link to={`/subscriptions/${row.slug}`} className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-2 shadow-sm">
                            <img className="w-full h-full object-contain" alt={row.name} src={row.logo} />
                          </div>
                          <span className="font-bold text-on-surface">{row.name}</span>
                        </Link>
                      </td>
                      <td className="py-5 text-sm text-on-surface-variant font-medium">{row.category}</td>
                      <td className="py-5 text-sm font-bold text-on-surface text-right">{row.cost}</td>
                      <td className="py-5 text-sm text-on-surface-variant text-right">{row.date}</td>
                      <td className="py-5 text-center">
                        <span
                          className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${STATUS_BADGE[row.status]}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-10">
          <div className="bg-surface-container-high p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">schedule</span>
              Upcoming Renewals
            </h3>
            <div className="space-y-4">
              <RenewalItem code="NFX" name="Netflix" when="In 2 days" amount="$15.99" />
              <RenewalItem code="ADB" name="Adobe Creative" when="Tomorrow" amount="$52.99" urgent />
              <RenewalItem code="LIN" name="LinkedIn" when="In 5 days" amount="$29.99" />
            </div>
            <button className="w-full mt-8 py-3 rounded-2xl text-primary text-sm font-bold border border-primary/10 hover:bg-primary hover:text-white transition-all duration-300">
              Manage All Renewals
            </button>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary-container p-8 rounded-3xl text-white shadow-2xl shadow-primary/30 relative">
            <span
              className="material-symbols-outlined absolute top-4 right-4 opacity-20 text-6xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <h4 className="text-2xl font-extrabold leading-tight mb-4">Master Your Subscriptions</h4>
            <p className="text-primary-fixed opacity-80 text-sm mb-6 leading-relaxed">
              Let our AI concierge negotiate better rates for you automatically.
            </p>
            <button className="bg-white text-primary px-6 py-3 rounded-2xl font-bold text-sm hover:scale-[1.05] transition-transform active:scale-[0.98]">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

function RenewalItem({
  code,
  name,
  when,
  amount,
  urgent,
}: {
  code: string
  name: string
  when: string
  amount: string
  urgent?: boolean
}) {
  return (
    <div
      className={`bg-white/50 p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-white transition-all ${
        urgent ? 'border-l-4 border-error' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center font-bold text-primary text-xs">
          {code}
        </div>
        <div>
          <p className="font-bold text-sm">{name}</p>
          <p className={`text-xs ${urgent ? 'text-error font-semibold' : 'text-on-surface-variant'}`}>{when}</p>
        </div>
      </div>
      <div className="text-right flex items-center gap-1">
        <p className="font-bold text-sm">{amount}</p>
        <span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">
          chevron_right
        </span>
      </div>
    </div>
  )
}
