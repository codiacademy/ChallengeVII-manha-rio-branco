interface ResumoCardProps {
  despesas: number;
  limite: number;
}

export default function ResumoCard({ despesas, limite }: ResumoCardProps) {
  const saldo = limite - despesas;

  return (
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md">
      <label className="text-white block mb-2 text-sm font-semibold">
        Resumo de Despesas |
      </label>

      <div className="mb-4">
        <h3 className="text-white text-base font-medium">Orçamento</h3>
        <p className="text-2xl text-yellow-400 font-bold">
          R$ {limite.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-gray-400">Orçamento planejado para o mês</p>
      </div>

      <div>
        <h3 className="text-white text-base font-medium">Total de Despesas</h3>
        <p className="text-2xl text-red-400 font-bold">
          R$ {despesas.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-gray-400">Gastos acumulados este mês</p>
      </div>

      <div>
        <h3 className="text-white text-base font-medium">Saldo Restante</h3>
        <p
          className={`text-xl font-bold ${
            saldo >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          R$ {saldo.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </p>
        <p className="text-sm text-gray-400">Orçamento disponível</p>
      </div>
    </div>
  );
}
