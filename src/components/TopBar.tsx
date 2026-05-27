export default function TopBar() {
  return (
    <header className="fixed top-0 right-0 w-full md:w-[calc(100%-18rem)] z-40 bg-[#faf8ff]/80 dark:bg-[#0f172a]/80 backdrop-blur-2xl">
      <div className="flex justify-between items-center px-6 md:px-10 py-4">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative w-full max-w-md group">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
              search
            </span>
            <input
              className="w-full bg-surface-container-low border-none rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary-fixed transition-all text-sm"
              placeholder="Search subscriptions..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative text-slate-400 hover:text-[#2a14b4] transition-colors">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="text-slate-400 hover:text-[#2a14b4] transition-colors">
            <span className="material-symbols-outlined">support</span>
          </button>
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <img
              className="w-full h-full object-cover"
              alt="User profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkTwQnDAGonpIOK65wr8xrvH14qWezxIRVPl-wDMQGxbJVtOA0AYW76rgVxAwEg-S1WYi2dg1Tz4uRfZwqDqDdLQ9MaTacKHLB8GU-9OcTAZPTpvQnw2m0wRSW2E_OevPyeNcqsR2_xy39yF6RDmPOvePTywMjdrVYEuLHA5bJwgkhgefkuUKeAhHEMo-kvkuQ7H7HRMEbzm03SPIINGq-s8OrpOYsOdSBoGhNFsLaNC0t4w9rwZn0IHHM0sxW9toCHz7mIO761w"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
