import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function CardTotalRevenue() {
  return (
    <Card className='bg-gray-800 border border-gray-700/30'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-xl text-gray-300'>Total</CardTitle>
          <span className="text-gray-300 text-[1.5rem]">R$</span>
        </div>
      </CardHeader>

      <CardContent>
        <strong className='text-2xl text-gray-100'>R$45,231.89</strong>
      </CardContent>
    </Card>
  )
}
