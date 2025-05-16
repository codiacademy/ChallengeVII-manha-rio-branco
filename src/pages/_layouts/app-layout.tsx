import { Sidebar } from '@/components/sidebar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className='min-h-screen flex'>
      {/* Removido bg-black */}
      <aside className='sidebar'>
        <Sidebar />
      </aside>
      <main className='flex-1 p-4'>
        <Outlet />
      </main>
    </div>
  )
}
