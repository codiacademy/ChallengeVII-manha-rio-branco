import { CardActiveNow } from './components/card-active-now'
import { CardSales } from './components/card-sales'
import { CardSubscriptions } from './components/card-subscriptions'
import { CardTotalRevenue } from './components/card-total-revenue'
import { CardCharts } from './components/charts'
import { RecentSales } from './components/recent-sales'

export function Dashboard() {
  return (
    <div className='min-h-screen flex flex-col gap-10 p-10'>
      <h1 className='text-4xl text-gray-100 font-semibold'>Dashboard</h1>
      <div className='flex md:flex-row flex-col gap-10'>
        <CardCharts />
      </div>
    </div>
  )
}
