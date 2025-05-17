import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components/sidebar'

export default function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#0f172a] dark:bg-black text-foreground">
      {/* Sidebar */}
      <aside
        className={`sidebar fixed md:static z-50 top-0 left-0 h-full w-[250px] bg-[#0f172a] dark:bg-black text-white transition-transform duration-300
          ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >

        {/* Botão de fechar (mobile) */}
        <div className="md:hidden flex justify-end p-2">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-2xl"
            aria-label="Fechar menu"
          >
            ✖
          </button>
        </div>
        <Sidebar />
      </aside>

      {/* Conteúdo */}
      <div className="flex-1 flex flex-col">
        {/* Topbar (mobile) */}
        <header className="md:hidden sticky top-0 z-40 bg-[var(--sidebar)] text-[var(--sidebar-foreground)] flex items-center justify-between px-4 py-3 transition-colors">
          
          <span className="font-bold text-lg text-white">Codi Cash</span>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl"
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </header>

        {/* Conteúdo com rolagem */}
        <main className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
