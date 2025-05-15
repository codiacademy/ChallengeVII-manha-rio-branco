import { Link } from 'react-router-dom'

export function Sidebar() {
  return (
    <div>
      <h1>Sidebar</h1>

      <nav>
        <ul className='flex flex-col gap-10'>
          <li>
            <Link to={'/'} className='text-white text-xl font-bold'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to={'/despesas'} className='text-white text-xl font-bold'>
              Minhas despesas
            </Link>
          </li>
          <li>
            <Link to={'/receita'} className='text-white text-xl font-bold'>
              Receita
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
