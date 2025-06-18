interface Venda {
    valor:number;
    data:string;
}

interface ReceitaCardProps {
    vendas: Venda[];
}

export default function ReceitaCard({ vendas }:ReceitaCardProps) {
    return(
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md">
      <label className="text-white block mb-2 text-sm font-semibold">
        Resumo da Receita |
      </label>

      {vendas.length === 0 && (
        <p className="text-gray-400">Nenhuma venda registrada ainda.</p>
      )}

      {vendas.map((venda, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-white text-base font-medium">Ganho</h3>
          <p className="text-2xl text-green-400 font-bold">
            + R$ {Number(venda.valor).toFixed(2)}
          </p>
          <p className="text-sm text-gray-400">
            Data: {new Date(venda.data).toLocaleDateString('pt-BR')}
          </p>
        </div>
      ))}
    </div>
    )
}
