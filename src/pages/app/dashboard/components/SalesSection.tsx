import { RecentSales } from './RecentSales'
import { CreateSaleForm } from './CreateSaleForm'

export function SalesSection() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto w-full">
        <RecentSales />
        <CreateSaleForm onNewSale={() => {}} />

      </div>
    </div>
  )
}
