import { Link } from 'react-router-dom'

const USAGE_BARS = ['40%', '60%', '55%', '80%', '45%', '30%', '75%', '90%', '40%', '25%']

const BILLING_HISTORY = [
  { date: 'Jun 12, 2024', desc: 'Monthly Premium Ultra HD', amount: '$15.99', status: 'PAID' },
  { date: 'May 12, 2024', desc: 'Monthly Premium Ultra HD', amount: '$15.99', status: 'PAID' },
  { date: 'Apr 12, 2024', desc: 'Monthly Premium Ultra HD', amount: '$15.99', status: 'PAID' },
  { date: 'Mar 12, 2024', desc: 'Monthly Premium Ultra HD', amount: '$15.99', status: 'PAID' },
  { date: 'Feb 12, 2024', desc: 'Monthly Premium Ultra HD', amount: '$15.99', status: 'PAID' },
]

export default function SubscriptionDetail() {
  return (
    <>
      {/* Header */}
      <section className="mb-12">
        <nav className="flex items-center gap-2 text-xs font-medium text-slate-400 mb-6 tracking-wide uppercase">
          <Link to="/dashboard" className="hover:text-primary">Subscriptions</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-on-surface">Netflix</span>
        </nav>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-[#E50914] flex items-center justify-center shadow-lg shadow-error/10">
              <span className="text-white font-extrabold text-4xl tracking-tighter">N</span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-4xl font-extrabold tracking-tighter text-on-surface">Netflix</h1>
                <span className="bg-[#e8f5e9] text-[#2e7d32] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                  Active
                </span>
              </div>
              <p className="text-slate-500 font-medium">Premium Ultra HD • Multiple Profiles</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-6 py-3 rounded-xl border-2 border-outline-variant/30 text-on-surface font-semibold hover:bg-surface-container transition-colors active:scale-95">
              Edit Plan
            </button>
            <button className="px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all active:scale-95">
              Manage Subscription
            </button>
          </div>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-surface-container-low p-8 rounded-3xl group hover:bg-surface-container-high transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Monthly Cost</p>
          <div className="flex items-end gap-1">
            <h2 className="text-5xl font-extrabold tracking-tighter text-on-surface">$15.99</h2>
            <span className="text-slate-400 font-medium mb-1.5">/mo</span>
          </div>
          <div className="mt-6 flex items-center gap-2 text-error text-xs font-bold">
            <span className="material-symbols-outlined text-sm">trending_up</span>
            <span>No changes since 2023</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-3xl group hover:bg-surface-container-high transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Next Renewal</p>
          <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">July 12, 2024</h2>
          <div className="mt-6 flex items-center gap-2 text-primary text-xs font-bold">
            <span className="material-symbols-outlined text-sm">schedule</span>
            <span>In 14 days</span>
          </div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-3xl group hover:bg-surface-container-high transition-colors">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Total Spent YTD</p>
          <h2 className="text-4xl font-extrabold tracking-tighter text-on-surface">$95.94</h2>
          <div className="mt-6 flex items-center gap-2 text-on-secondary-fixed-variant text-xs font-bold">
            <span className="material-symbols-outlined text-sm">show_chart</span>
            <span>Across 6 cycles</span>
          </div>
        </div>
      </section>

      {/* Plan Details + Usage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <div className="lg:col-span-4 bg-surface-container-low rounded-3xl p-8">
          <h3 className="text-xl font-bold tracking-tight mb-8">Plan Details</h3>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Plan Type</span>
              <span className="text-on-surface font-semibold">Premium Ultra HD (4K + HDR)</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Payment Method</span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-surface-container-highest rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-sm text-primary">credit_card</span>
                </div>
                <span className="text-on-surface font-semibold">Visa ending in 4242</span>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Billing Cycle</span>
              <span className="text-on-surface font-semibold">Monthly (12th of each month)</span>
            </div>
            <div className="pt-6">
              <button className="text-primary text-sm font-bold flex items-center gap-2 hover:underline">
                Update Payment Information
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 glass-pane rounded-3xl p-8 overflow-hidden relative">
          <div className="flex justify-between items-center mb-10 relative z-10">
            <div>
              <h3 className="text-xl font-bold tracking-tight">Usage Analytics</h3>
              <p className="text-sm text-slate-500">Screen time across all devices (Last 30 days)</p>
            </div>
            <div className="bg-white/50 px-4 py-2 rounded-xl text-xs font-bold text-on-surface shadow-sm">
              Total: 142 Hours
            </div>
          </div>
          <div className="h-48 flex items-end justify-between gap-2 relative z-10">
            {USAGE_BARS.map((h, i) => (
              <div
                key={i}
                className={`flex-1 rounded-t-lg group transition-all ${
                  i === 6 ? 'bg-primary/20 hover:bg-primary' : 'bg-primary/10 hover:bg-primary/30'
                }`}
                style={{ height: h }}
              ></div>
            ))}
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Billing History + Upsell */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-8 bg-surface-container-low rounded-3xl p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold tracking-tight">Billing History</h3>
            <button className="text-sm font-bold text-primary flex items-center gap-1">
              Download All
              <span className="material-symbols-outlined text-lg">download</span>
            </button>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-outline-variant/10">
                  <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Date</th>
                  <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Description</th>
                  <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
                  <th className="pb-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
                  <th className="pb-4"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {BILLING_HISTORY.map((row) => (
                  <tr key={row.date} className="hover:bg-white/40 transition-colors">
                    <td className="py-5 font-semibold text-sm">{row.date}</td>
                    <td className="py-5 text-sm text-slate-600">{row.desc}</td>
                    <td className="py-5 text-sm font-bold text-right">{row.amount}</td>
                    <td className="py-5 text-center">
                      <span className="bg-[#e8f5e9] text-[#2e7d32] text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {row.status}
                      </span>
                    </td>
                    <td className="py-5 text-right">
                      <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">
                        more_vert
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-primary p-8 rounded-3xl text-white relative overflow-hidden shadow-2xl shadow-primary/30">
            <div className="relative z-10">
              <span
                className="material-symbols-outlined text-4xl mb-4"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_awesome
              </span>
              <h3 className="text-2xl font-bold tracking-tight mb-4 leading-tight">Switch to Annual and Save 15%</h3>
              <p className="text-on-primary-container font-medium mb-8 leading-relaxed">
                Paying yearly reduces your subscription costs to $163.00/year. That's nearly 2 months free.
              </p>
              <button className="w-full py-4 bg-white text-primary font-bold rounded-2xl hover:bg-inverse-on-surface transition-all active:scale-95">
                Upgrade & Save
              </button>
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-3xl">
            <h4 className="text-sm font-bold text-on-surface mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">tips_and_updates</span>
              Smart Insights
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              You haven't used Netflix on your <strong>iPad Pro</strong> in over 20 days. Consider de-authorizing unused devices for better security.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
