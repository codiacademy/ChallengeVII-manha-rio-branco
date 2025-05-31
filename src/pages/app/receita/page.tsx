import { InfoCard } from './components/InfoCard'
import ReceitaCard from './components/ReceitaCard'

export default function Receita() {
  return (
    <div className="p-6 space-y-6">
      <div className="card mb-6">
        <h1 className="text-3xl font-bold">Receita</h1>
      </div>

      {/* Cards de indicadores */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Receita Total"
          value="R$ 12.500,00"
          subtitle="Atualizado em tempo real"
          color="text-green-400"
        />

        <InfoCard
          title="Meta do Mês"
          value="R$ 15.000,00"
          subtitle="Objetivo de receita mensal"
          color="text-blue-400"
        />
      </div>

      {/* Campos de entrada + botões */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md space-y-4">
          <label className="text-white block text-sm font-semibold">Informe sua receita</label>
          <input
            type="number"
            placeholder="Ex: 12500"
            className="w-full p-3 rounded-md bg-[#111827] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md">
            Adicionar Receita
          </button>
        </div>

        <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md space-y-4">
          <label className="text-white block text-sm font-semibold">Informe a meta do mês</label>
          <input
            type="number"
            placeholder="Ex: 15000"
            className="w-full p-3 rounded-md bg-[#111827] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-md">
            Definir Meta
          </button>
        </div>

        <ReceitaCard />
      </div>
    </div>
  )
}
