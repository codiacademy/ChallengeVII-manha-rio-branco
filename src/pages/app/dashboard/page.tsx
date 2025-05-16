import { CardCharts } from './components/charts'

export default function AppLayout() {
  return (
    <div className='min-h-screen flex flex-col gap-10 p-10'>
      <div className="card mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>
      <div className='flex md:flex-row flex-col gap-10'>
        <CardCharts />
      </div>
    </div>
  )
}
