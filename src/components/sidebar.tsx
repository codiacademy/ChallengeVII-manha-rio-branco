import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Sidebar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark'
    if (saved) {
      setTheme(saved)
      document.documentElement.classList.toggle('dark', saved === 'dark')
    } else {
      document.documentElement.classList.add('dark')
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }

  return (
    <div className="h-full flex flex-col gap-8">
      <button
        onClick={toggleTheme}
        className="theme-toggle px-4 py-2 border rounded-md font-medium text-sm"
      >
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>

      <nav className="flex flex-col gap-6 mt-4">
        <Link to={'/'} className='text-[var(--sidebar-foreground)] text-xl font-bold'>
          Dashboard
        </Link>
        <Link
          to="/despesas"
          className="text-[--sidebar-foreground] text-xl font-bold hover:underline"
        >
          Minhas despesas
        </Link>
        <Link
          to="/receita"
          className="text-[--sidebar-foreground] text-xl font-bold hover:underline"
        >
          Receita
        </Link>
      </nav>
    </div>
  )
}
