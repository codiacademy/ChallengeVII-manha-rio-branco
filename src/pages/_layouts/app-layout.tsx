import { Sidebar } from '@/components/sidebar'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  return (
    <div className='min-h-screen flex'>
      <aside className='bg-black p-8'>
        <Sidebar />
      </aside>
      <main className='flex-1'>
        <Outlet />
      </main>
    </div>
  )
}
