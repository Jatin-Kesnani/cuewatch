import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      {/* Top Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 dark:bg-slate-950/60 backdrop-blur-xl shadow-sm shadow-indigo-500/5 transition-all duration-300">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-indigo-700 dark:text-indigo-400 font-headline">
            CUEWATCH
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a className="font-headline font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-all duration-300" href="#features">
              Features
            </a>
            <a className="font-headline font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-all duration-300" href="#how-it-works">
              How It Works
            </a>
            <a className="font-headline font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-all duration-300" href="#pricing">
              Pricing
            </a>
            <Link
              to="/dashboard"
              className="font-headline font-medium tracking-tight text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-all duration-300"
            >
              Dashboard
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/dashboard"
              className="px-5 py-2 text-indigo-700 font-medium hover:bg-slate-50 rounded-xl transition-all"
            >
              Login
            </Link>
            <Link
              to="/dashboard"
              className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-container text-white font-semibold rounded-xl ambient-glow scale-95 hover:scale-100 duration-200 ease-out"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest uppercase">
              The Subscription Intelligence
            </span>
            <h1 className="font-headline text-6xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.05] mb-8">
              Track Subscriptions.
              <br />
              <span className="text-primary">Stop Wasting Money.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
              Gain total control over your digital spend. Automate your renewals, spot hidden charges, and save hundreds with AI-powered insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/dashboard"
                className="px-8 py-4 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-xl ambient-glow transition-transform hover:-translate-y-1"
              >
                Get Started Now
              </Link>
              <button className="px-8 py-4 border border-outline-variant text-on-surface font-bold rounded-xl hover:bg-surface-container-low transition-colors inline-flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                View Demo
              </button>
            </div>
          </div>
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-fixed rounded-full blur-[120px] opacity-40"></div>
            <div className="glass-pane w-full h-[480px] rounded-[2rem] p-6 shadow-2xl relative z-10 overflow-hidden transform rotate-2">
              <div className="flex items-center justify-between mb-8">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="h-6 w-32 bg-white/30 rounded-full"></div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white/80 p-4 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Monthly Spend</p>
                  <p className="text-2xl font-extrabold text-primary">$142.50</p>
                </div>
                <div className="bg-white/80 p-4 rounded-2xl">
                  <p className="text-xs text-slate-500 mb-1">Active Trials</p>
                  <p className="text-2xl font-extrabold text-tertiary">3</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold">N</div>
                    <div>
                      <p className="text-sm font-bold">Netflix</p>
                      <p className="text-[10px] text-slate-500">Renews in 3 days</p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-800">$19.99</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/40 rounded-xl border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">A</div>
                    <div>
                      <p className="text-sm font-bold">Adobe CC</p>
                      <p className="text-[10px] text-slate-500">Renews in 12 days</p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-800">$54.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="py-24 bg-surface-container-low" id="features">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Precision-Engineered Control
            </h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Engineered for the modern financial stack, CUEWATCH gives you insights you didn't know you needed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between hover:bg-surface-container-highest transition-all group">
              <div>
                <div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4">Smart Tracking</h3>
                <p className="text-on-surface-variant max-w-md">
                  Our engine identifies recurring patterns across your linked accounts, automatically categorizing and tracking hidden costs.
                </p>
              </div>
              <div className="mt-12 overflow-hidden rounded-xl">
                <img
                  className="w-full h-48 object-cover"
                  alt="data visualization"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjdFfSjyazHcFer5clRqSMAw9nES0kJPEQqLMwukJ4b_GDx_Xcss5aY2NkMwMft019OqVjtv-ZhHCd_5kbMWYQj56Gh8A3XBcvGySHfyoOaJp-52EQfR23yZqjUnMqfDJNVmJcXxGbhEn736Dx7TtzkdTE1wY6lb2mY0BfnLqUvx7su8U9aOWI16bx3Vhf_btE7J7uWxkK6iBzN6PPUvALWfKxv3x7O5J-muMA4rFJ-pluLE6PFcwdo55UBVFJ2Rn87Di9M144-w"
                />
              </div>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-[2rem] hover:bg-surface-container-highest transition-all group">
              <div className="w-12 h-12 bg-tertiary-fixed rounded-xl flex items-center justify-center mb-6 text-tertiary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">notifications_active</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Renewal Reminders</h3>
              <p className="text-on-surface-variant">
                Never get surprised by an auto-renewal again. Get notified before the charge hits your bank.
              </p>
            </div>

            <div className="bg-surface-container-lowest p-10 rounded-[2rem] hover:bg-surface-container-highest transition-all group">
              <div className="w-12 h-12 bg-secondary-fixed rounded-xl flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">insights</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Monthly Insights</h3>
              <p className="text-on-surface-variant">
                Deep dive into your spending habits. Identify which services are essential and which are waste.
              </p>
            </div>

            <div className="md:col-span-2 bg-primary-container p-10 rounded-[2rem] text-on-primary-container relative overflow-hidden">
              <div className="z-10 relative">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    speed
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-bold mb-4 text-white">Usage-Based Alerts</h3>
                <p className="opacity-80 max-w-md">
                  Connect your services and let us tell you if you're actually using what you pay for. Optimization has never been easier.
                </p>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-20 transform -rotate-12">
                <span className="material-symbols-outlined text-[200px]">trending_down</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24" id="how-it-works">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest text-xs uppercase">Process</span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mt-2">
              Effortless Automation
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: '01', title: 'Connect Accounts', body: 'Securely sync your bank or email with read-only access using enterprise-grade encryption.' },
              { step: '02', title: 'Analyze Spend', body: 'Our AI scans your history to build a precise map of every active and ghost subscription.' },
              { step: '03', title: 'Optimize & Save', body: 'Cancel unwanted services in one click and get alerts for future renewals.' },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="text-6xl font-extrabold text-surface-container-high mb-6">{s.step}</div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-on-surface-variant">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="glass-pane p-8 rounded-[2.5rem] shadow-2xl z-20 relative">
                <div className="flex items-center justify-between mb-10">
                  <h4 className="font-bold text-xl">Subscriptions Overview</h4>
                  <div className="flex gap-2">
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-100">
                      <span className="material-symbols-outlined text-sm">filter_list</span>
                    </span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-white/60 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                      </div>
                      <div>
                        <p className="font-bold">Entertainment</p>
                        <p className="text-sm text-slate-500">4 services active</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">$64.95</p>
                      <p className="text-[10px] text-red-500 font-bold uppercase">+12% vs last mo</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white/60 rounded-2xl flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                        <span className="material-symbols-outlined">code</span>
                      </div>
                      <div>
                        <p className="font-bold">Software/SaaS</p>
                        <p className="text-sm text-slate-500">9 services active</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-lg">$214.30</p>
                      <p className="text-[10px] text-emerald-500 font-bold uppercase">-4% vs last mo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -left-12 top-12 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20 -z-10"></div>
            </div>
            <div>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-6">
                Financial Clarity in One Pane
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                Stop switching between five different banking apps. CUEWATCH aggregates everything into a single, beautiful interface designed for clarity.
              </p>
              <ul className="space-y-4">
                {['Categorized spending reports', 'One-click cancellation workflows', 'Predictive budget forecasting'].map((t) => (
                  <li key={t} className="flex items-center gap-3 font-medium">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-surface-container-low rounded-[2.5rem]">
              <div className="flex gap-1 text-primary mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-xl font-medium leading-relaxed mb-10 italic">
                "I found $200 worth of subscriptions I'd forgotten about in the first 10 minutes. CUEWATCH basically paid for itself for the next 5 years."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  alt="David Chen"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbr5hc28CAlcPOHFtERh3k_xQIPepf5EYKTlFE-Fqhcmm1a-ppqp3Du2_JE6ms5Ys6L-2o-Pzb8CPEowOBGZ9MZI0LHKIiEf6uKUOq8ggIBI0GPVp0oM3dQ-6_T0cE6O5-KbZf0rVLnVrjnXW-6H55I5QJVX_yEQiSYfBJaEBpvgOLqlQEc8dP13sFnx6Dcgi3RxIk2CQMVS3gzJXISjf7NwILmCUIL998UCuYXf6tkoLwsbNW4oZ9SNVL6h5OX_XC1Nhs7V-IMw"
                />
                <div>
                  <p className="font-bold">David Chen</p>
                  <p className="text-sm text-on-surface-variant">Tech Lead at Veridian</p>
                </div>
              </div>
            </div>
            <div className="p-12 bg-primary text-on-primary rounded-[2.5rem]">
              <div className="flex gap-1 text-on-primary-container mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <p className="text-xl font-medium leading-relaxed mb-10 italic">
                "The glass interface is stunning, but the usage alerts are the real winner. It told me I hadn't opened my gym app in 3 months. Cancelled immediately."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="w-12 h-12 rounded-full object-cover"
                  alt="Sarah Jenkins"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO3FonWSgvF6_ksc522PTeN57aFX943M0N6TVgSvObhSi2C6K_47qRxMzspf4vAJe28iPVaBK29g_Izq4wFLyqKusAZytt_f_WVsEQRJgcHIKJF1fGzDD375l6jPh9nGlowbeD3pZwBp9yanVclWkNM8YpdV4PNlHEMgviaM4XOthTMJz7aMQQm623ucxJcTFzinICo9IunnUVew6T5s2W69kuzK961J7EIfDHl6TB0Z-XYCxytctBYtM39rLpvVCIaRQ6iBmdLw"
                />
                <div>
                  <p className="font-bold">Sarah Jenkins</p>
                  <p className="text-sm opacity-80">Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-surface-container-lowest" id="pricing">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight">
              Simple, Value-Driven Pricing
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-10 rounded-[2rem] bg-surface-container-low border border-outline-variant/30 transition-transform hover:-translate-y-2">
              <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest mb-2">Basic</p>
              <h3 className="text-4xl font-extrabold mb-6">
                $0<span className="text-lg font-normal text-on-surface-variant">/mo</span>
              </h3>
              <p className="text-on-surface-variant mb-8">Essential tracking for casual users.</p>
              <ul className="space-y-4 mb-10">
                {['Up to 5 subscriptions', 'Monthly email summary', 'Standard alerts'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-lg">check</span> {t}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 border border-outline text-on-surface font-bold rounded-xl hover:bg-white transition-colors">
                Start for Free
              </button>
            </div>
            <div className="p-10 rounded-[2rem] bg-primary text-on-primary relative overflow-hidden transition-transform hover:-translate-y-2 ambient-glow">
              <div className="absolute top-5 right-5 bg-white/20 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
              <p className="text-sm font-bold opacity-80 uppercase tracking-widest mb-2">Premium</p>
              <h3 className="text-4xl font-extrabold mb-6">
                $9<span className="text-lg font-normal opacity-80">/mo</span>
              </h3>
              <p className="opacity-80 mb-8">Advanced insights for power savers.</p>
              <ul className="space-y-4 mb-10">
                {['Unlimited subscriptions', 'AI Usage-based alerts', 'One-click cancellations', 'Priority 24/7 support'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-white text-lg">check</span> {t}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-white text-primary font-bold rounded-xl hover:bg-primary-fixed transition-colors">
                Get Premium
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto p-16 rounded-[3rem] bg-gradient-to-br from-primary to-primary-container text-white text-center relative overflow-hidden">
          <h2 className="font-headline text-5xl font-extrabold mb-6 relative z-10">
            Start saving today with CUEWATCH
          </h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10">
            Join 50,000+ users who have already reclaimed over $2M in wasted subscriptions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link
              to="/dashboard"
              className="px-10 py-5 bg-white text-primary font-extrabold rounded-xl text-lg hover:scale-105 transition-transform"
            >
              Get Started for Free
            </Link>
            <button className="px-10 py-5 bg-primary-fixed-dim/20 backdrop-blur-lg border border-white/30 text-white font-extrabold rounded-xl text-lg">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full rounded-t-[2rem] bg-slate-50 dark:bg-slate-900 tonal-shift-top">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="text-xl font-bold text-indigo-700 dark:text-indigo-400">CUEWATCH</div>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              © 2024 CUEWATCH. Ethereal Precision in Tracking.
            </p>
          </div>
          <div className="flex gap-10 flex-wrap justify-center">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface mb-2">Product</p>
              <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Features</a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Pricing</a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Documentation</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface mb-2">Legal</p>
              <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
              <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-on-surface mb-2">Company</p>
              <a className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Contact Support</a>
              <div className="flex gap-4 mt-2">
                <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">public</span>
                <span className="material-symbols-outlined text-slate-400 hover:text-primary cursor-pointer">groups</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
