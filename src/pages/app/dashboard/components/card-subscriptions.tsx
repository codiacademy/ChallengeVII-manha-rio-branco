import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users2 } from 'lucide-react'

export function CardSubscriptions() {
  return (
    <Card className='bg-gray-800 border border-gray-700/30'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-xl text-gray-300'>Inscrições</CardTitle>

          <Users2 className='size-6 text-gray-300' />
        </div>
      </CardHeader>

      <CardContent>
        <strong className='text-2xl text-gray-100'>+2564</strong>
      </CardContent>
    </Card>
  )
}
