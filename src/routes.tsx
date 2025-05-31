import { createBrowserRouter } from 'react-router-dom'
import AppLayout from './pages/_layouts/app-layout'
import Dashboard from './pages/app/dashboard/page'
import Depesas from './pages/app/despesas/page'
import Receita from './pages/app/receita/page'
import { SalesSection } from '@/pages/app/dashboard/components/SalesSection'

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
      {
        path: '/vendas', // ✅ nova rota para o formulário + lista
        element: <SalesSection />,
      },
    ],
  },
])
