import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard } from 'lucide-react'

export function CardSales() {
  return (
    <Card className="w-full bg-gray-800 text-white shadow transition-all">
      <CardHeader className="flex items-center justify-between mb-2">
        <CardTitle className="text-sm font-semibold">Vendas</CardTitle>
        <CreditCard className="w-5 h-5 text-white opacity-60" />
      </CardHeader>

      <CardContent>
        <p className="text-2xl font-bold">+12.234</p>
      </CardContent>
    </Card>
  )
}
