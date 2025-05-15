import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard } from 'lucide-react'

export function CardSales() {
  return (
    <Card className='bg-gray-800 border border-gray-700/30'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-xl text-gray-300'>Sales</CardTitle>

          <CreditCard className='size-6 text-gray-300' />
        </div>
      </CardHeader>

      <CardContent>
        <strong className='text-2xl text-gray-100'>+12,234</strong>
      </CardContent>
    </Card>
  )
}
