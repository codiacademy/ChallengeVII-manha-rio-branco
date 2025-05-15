import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

export function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}
