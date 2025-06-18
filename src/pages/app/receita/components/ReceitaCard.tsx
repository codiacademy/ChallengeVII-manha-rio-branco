
interface Venda {
  valor?: number | string | null
  amount?: number | string | null
  data: string
}

interface ReceitaCardProps {
  vendas: Venda[]
}

export default function ReceitaCard({ vendas }: ReceitaCardProps) {
  return (
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md space-y-2">
      <label className="text-white block mb-2 text-sm font-semibold">Resumo da Receita</label>
      {vendas.length === 0 ? (
        <p className="text-gray-400">Nenhuma venda registrada</p>
      ) : (
        <ul className="max-h-60 overflow-y-auto">
          {vendas.map((venda, index) => {         
            let valorNumber = Number(venda.amount ?? venda.valor)
            if (isNaN(valorNumber)) valorNumber = 0

            return (
              <li
                key={index}
                className="text-white border-b border-gray-600 py-2 flex justify-between"
              >
                <span>Valor: R$ {valorNumber.toFixed(2)}</span>
                <span>{new Date(venda.data).toLocaleDateString()}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
