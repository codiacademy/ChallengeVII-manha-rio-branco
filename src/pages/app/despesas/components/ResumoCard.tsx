
export default function ResumoCard() {
  return (
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md">
      <label className="text-white block mb-2 text-sm font-semibold">
        Resumo de Despesas |
      </label>

    <div className="mb-4">
        <h3 className="text-white text-base font-medium"></h3>
        <p className="text-2xl text-yellow-400 font-bold">R$ 10.000,00</p>
        <p className="text-sm text-gray-400">Orçamento planejado para o mês</p>
    </div>

    <div>
        <h3 className="text-white text-base font-medium">Total de Despesas</h3>
        <p className="text-2xl text-red-400 font-bold">R$ 8.400,00</p>
        <p className="text-sm text-gray-400">Gastos acumulados este mês</p>
    </div>
      
    <div>
        <h3 className="text-white text-base font-medium">Gasto |</h3>
        <p className="text-1xl text-green-400 font-bold">- R$ 2.000,00</p>
        <p className="text-sm text-gray-400">Gasto Contabilizado</p>
    </div>
    
    <div>
        <h3 className="text-white text-base font-medium">Gasto |</h3>
        <p className="text-1xl text-green-400 font-bold">- R$ 3.500,00</p>
        <p className="text-sm text-gray-400">Gasto Contabilizado</p>
    </div>

    <div>
        <h3 className="text-white text-base font-medium">Gasto |</h3>
        <p className="text-1xl text-green-400 font-bold">- R$ 1.500,00</p>
        <p className="text-sm text-gray-400">Gasto Contabilizado</p>
    </div>

    <div>
        <h3 className="text-white text-base font-medium">Gasto |</h3>
        <p className="text-1xl text-green-400 font-bold">- R$ 1.400,00</p>
        <p className="text-sm text-gray-400">Gasto Contabilizado</p>
    </div>

    </div>
  );
}

