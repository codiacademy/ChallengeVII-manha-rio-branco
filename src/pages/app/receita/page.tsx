import { InfoCard } from './components/InfoCard'
import ReceitaCard from './components/ReceitaCard'
import { useEffect, useState } from 'react'

interface Venda {
  valor?: number
  amount: number
  data: string
}

export default function Receita() {
  const [vendas, setVendas] = useState<Venda[]>([])
  const [novaReceita, setNovaReceita] = useState<number>(0)
  const [meta, setMeta] = useState<number>(15000)

  const carregarVenda = async () => {
    try {
      const res = await fetch('http://localhost:3001/sales')
      const data = await res.json()
      setVendas(data)
    } catch (err) {
      console.error("Erro ao buscar venda", err)
    }
  }

  useEffect(() => {
    carregarVenda()
  }, [])

  const handleAdicionarReceita = async () => {
    if (!novaReceita) return

    await fetch('http://localhost:3001/sales', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: novaReceita,
        data: new Date().toISOString(),
      }),
    })

    setNovaReceita(0)
    carregarVenda()
  }

  const totalReceita = vendas.reduce((acc, venda) => {
    const valor = Number(venda.amount ?? venda.valor)
    return acc + (isNaN(valor) ? 0 : valor)
  }, 0)

  return (
    <div className="p-6 space-y-6">
      <div className="card mb-6">
        <h1 className="text-3xl font-bold">Receita</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Receita Total"
          value={`R$ ${totalReceita.toFixed(2)}`}
          subtitle="Atualizado em tempo real"
          color="text-green-400"
        />
        <InfoCard
          title="Meta do Mês"
          value={`R$ ${meta.toFixed(2)}`}
          subtitle="Objetivo de receita mensal"
          color="text-blue-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md space-y-4">
          <label className="text-white block text-sm font-semibold">Informe sua receita</label>
          <input
            type="number"
            placeholder="Ex: 12500"
            value={novaReceita}
            onChange={(e) => setNovaReceita(Number(e.target.value))}
            className="w-full p-3 rounded-md bg-[#111827] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={handleAdicionarReceita}
            className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
          >
            Adicionar Receita
          </button>
        </div>

        <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md space-y-4">
          <label className="text-white block text-sm font-semibold">Informe a meta do mês</label>
          <input
            type="number"
            placeholder="Ex: 15000"
            value={meta}
            onChange={(e) => setMeta(Number(e.target.value))}
            className="w-full p-3 rounded-md bg-[#111827] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <ReceitaCard vendas={vendas} />
    </div>
  )
}
