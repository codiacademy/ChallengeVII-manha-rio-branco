import { TrendingUp } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  ResponsiveContainer,
} from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import colors from 'tailwindcss/colors'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

const chartData = [
  { month: 'Janeiro', revenue: 186, expenses: 100 },
  { month: 'Feveiro', revenue: 305, expenses: 200 },
  { month: 'Marçoo', revenue: 237, expenses: 100 },
  { month: 'Abril', revenue: 73, expenses: 33 },
  { month: 'Maio', revenue: 209, expenses: 100 },
  { month: 'Junho', revenue: 214, expenses: 77 },
  { month: 'Julho', revenue: 255, expenses: 99 },
  { month: 'Agosto', revenue: 255, expenses: 99 },
  { month: 'Setembro', revenue: 255, expenses: 233 },
  { month: 'Outubro', revenue: 255, expenses: 233 },
  { month: 'Novembro', revenue: 255, expenses: 40 },
  { month: 'Dezembro', revenue: 255, expenses: 66 },
]

const chartConfig = {
  revenue: {
    label: 'Receita',
    color: colors.green[300],
  },
  expenses: {
    label: 'Despesas',
    color: colors.red[300],
  },
} satisfies ChartConfig

export function CardCharts() {
  return (
    <Card className='flex-1 bg-gray-800 border border-gray-700/30'>
      <CardHeader>
        <CardTitle className='text-xl text-gray-100'>
          Receita x Despesas
        </CardTitle>
        <CardDescription className='text-gray-400'>
          Comparação entre receita e despesas
        </CardDescription>
      </CardHeader>
      <CardContent className='h-full'>
        <ResponsiveContainer width='100%' height={240}>
          <ChartContainer config={chartConfig} className='w-full h-[240px]'>
            <BarChart
              height={240}
              style={{ fontSize: '10px' }}
              accessibilityLayer
              data={chartData}
            >
              <CartesianGrid vertical={false} className='stroke-gray-600/30' />
              <XAxis
                dataKey='month'
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator='dashed' />}
              />

              <Bar dataKey='revenue' fill={colors.blue[300]} radius={8} />

              <Bar dataKey='expenses' fill={colors.red[300]} radius={8} />
            </BarChart>
          </ChartContainer>
        </ResponsiveContainer>
      </CardContent>

      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex text-gray-50 gap-2 font-medium leading-none'>
           Aumento de 5,2% neste mês <TrendingUp className='h-4 w-4' />
        </div>
        <div className=' leading-none text-gray-300'>
          Exibindo total de visitantes nos ultimos 6 meses
        </div>
      </CardFooter>
    </Card>
  )
}
