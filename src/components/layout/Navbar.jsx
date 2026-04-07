import { navItems } from '@/data/content'

export function Navbar() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--electric)]/15 bg-[rgba(7,9,16,0.72)] backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-['Space_Grotesk'] text-sm font-semibold tracking-[0.12em] text-[var(--electric)]">
          ETHAN.Z
        </a>
        <ul className="flex flex-wrap items-center justify-end gap-2 text-xs text-slate-300 sm:gap-4 sm:text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded px-2 py-1 transition hover:bg-white/5 hover:text-[var(--electric)] hover:shadow-[0_0_14px_rgba(0,212,255,0.2)]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
