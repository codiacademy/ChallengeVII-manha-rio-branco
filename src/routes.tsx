import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './pages/_layouts/app-layout'
import Dashboard from './pages/app/dashboard/page'
import Depesas from './pages/app/despesas/page'
import Receita from './pages/app/receita/page'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },

      {
        path: '/despesas',
        element: <Depesas />,
      },

      {
        path: '/receita',
        element: <Receita />,
      },
    ],
  },
])
