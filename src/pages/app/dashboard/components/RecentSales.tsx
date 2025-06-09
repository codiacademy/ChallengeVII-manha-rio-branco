import { Avatar } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { User } from 'lucide-react'
import { CreateSaleForm } from './CreateSaleForm'

const data = [
  {
    id: 1,
    avatar: User,
    name: 'João Silva',
    email: 'joaosilva@example.com',
    amount: 'R$ 1000,00',
  },
  {
    id: 2,
    avatar: User,
    name: 'José Fernandes',
    email: 'zefernandes@example.com',
    amount: 'R$ 1004,00',
  },
  {
    id: 3,
    avatar: User,
    name: 'John Doe',
    email: 'johndoe@example.com',
    amount: 'R$ 2338,00',
  },
  {
    id: 4,
    avatar: User,
    name: 'Marcelo Oliveira',
    email: 'marcelooliveira@example.com',
    amount: 'R$ 89,00',
  },
  {
    id: 5,
    avatar: User,
    name: 'Bernardo Santos',
    email: 'besantos@example.com',
    amount: 'R$ 100,00',
  },
]

export function RecentSales() {
  return (
    <Card className="bg-gray-800 border border-gray-700/30 w-full">
      <CardHeader>
        <CardTitle className="text-xl text-white">Vendas Recentes</CardTitle>
        <CardDescription className="text-sm text-gray-50">
          Você realizou 265 vendas este mês.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Lista de vendas */}
          <div className="flex-1 space-y-6">
            {data.map((item) => {
              const Icon = item.avatar
              return (
                <div
                  key={item.id}
                  className="flex md:flex-row flex-col md:items-center items-start justify-between gap-5"
                >
                  <Avatar className="w-10 h-10 bg-gray-400 flex items-center justify-center">
                    <Icon className="text-gray-800" />
                  </Avatar>

                  <div className="flex-1 flex flex-col gap-1">
                    <span className="font-medium text-gray-200">{item.name}</span>
                    <span className="text-sm text-gray-400">{item.email}</span>
                  </div>

                  <strong className="text-gray-400">+{item.amount}</strong>
                </div>
              )
            })}
          </div>

          {/* Formulário ao lado */}
          <div className="flex-1">
            <CreateSaleForm />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
