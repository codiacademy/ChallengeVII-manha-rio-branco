import { CardCharts } from './components/charts'

export default function AppLayout() {
  return (
    <div className='min-h-screen flex flex-col gap-10 p-10'>
      <h1 className='text-4xl text-gray-100 font-semibold'>Dashboard</h1>
      <div className='flex md:flex-row flex-col gap-10'>
        <CardCharts />
      </div>
    </div>
  )
}
