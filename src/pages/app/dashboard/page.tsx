import { CardActiveNow } from './components/card-active-now'
import { CardSales } from './components/card-sales'
import { CardSubscriptions } from './components/card-subscriptions'
import { CardTotalRevenue } from './components/card-total-revenue'
import { CardCharts } from './components/charts'
import { RecentSales } from './components/recent-sales'

export default function DashboardPage() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <h1 className="text-xl md:text-2xl font-bold bg-gray-800 text-white p-4 rounded-lg mb-6">
        Dashboard
      </h1>

      {/* Grid de cards de indicadores */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <CardTotalRevenue />
        <CardSubscriptions />
        <CardSales />
        <CardActiveNow />
      </div>

      {/* Gráfico com scroll horizontal se necessário */}
      <div className="bg-gray-800 text-white p-4 md:p-6 rounded-lg mb-6 w-full overflow-x-auto">
        <CardCharts />
      </div>

      {/* Lista de vendas recentes */}
      <div className="bg-gray-800 text-white p-4 md:p-6 rounded-lg w-full">
        <RecentSales />
      </div>
    </div>
  )
}
