import { ThemeToggle } from '@/components/theme-toggle'
import { Link } from 'react-router-dom'

export function Sidebar() {
  return (
    <div className="flex flex-col gap-6 p-4 min-h-screen">
      <ThemeToggle />

      <nav className="flex flex-col gap-6 mt-4">
        <Link
          to="/"
          className="bg-white dark:bg-gray-800 text-black dark:text-white text-xl font-bold py-2 px-4 rounded-lg text-center shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/despesas"
          className="bg-white dark:bg-gray-800 text-black dark:text-white text-xl font-bold py-2 px-4 rounded-lg text-center shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Minhas despesas
        </Link>

        <Link
          to="/receita"
          className="bg-white dark:bg-gray-800 text-black dark:text-white text-xl font-bold py-2 px-4 rounded-lg text-center shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          Receita
        </Link>
      </nav>
    </div>
  )
}
