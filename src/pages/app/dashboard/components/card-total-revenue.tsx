import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export function CardTotalRevenue() {
  return (
    <Card className='bg-gray-800 border border-gray-700/30'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-xl text-gray-300'>Total</CardTitle>

          <DollarSign className='size-6 text-gray-300' />
        </div>
      </CardHeader>

      <CardContent>
        <strong className='text-2xl text-gray-100'>R$45,231.89</strong>
      </CardContent>
    </Card>
  )
}
