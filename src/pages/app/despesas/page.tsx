import { InfoCard } from '../receita/components/InfoCard'
import { InputCard } from './components/InputCard'

export default function Depesas() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-white">Despesas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Total de Despesas"
          value="R$ 8.400,00"
          subtitle="Gastos acumulados este mês"
          color="text-red-400"
        />
        <InfoCard
          title="Limite Mensal"
          value="R$ 10.000,00"
          subtitle="Orçamento planejado para o mês"
          color="text-yellow-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputCard
          label="Informe o valor gasto"
          placeholder="Ex: 8400"
          ringColor="focus:ring-red-500"
        />
        <InputCard
          label="Informe o limite do mês"
          placeholder="Ex: 10000"
          ringColor="focus:ring-yellow-500"
        />
      </div>

      <div className="bg-[#111827] p-6 rounded-2xl shadow-md mt-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Resumo</h2>
        <p className="text-gray-300 text-sm">
          Aqui você pode acompanhar o total de gastos e ajustar seu limite de despesas mensais.
        </p>
      </div>
    </div>
  )
}
