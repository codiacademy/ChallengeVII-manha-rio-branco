export function CreateSaleForm() {
  return (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-white w-full h-full">
      <h2 className="text-xl font-bold mb-4">Lançar Nova Venda</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Nome do Cliente</label>
          <input
            type="text"
            placeholder="Ex: Ana Souza"
            className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="cliente@email.com"
            className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Valor (R$)</label>
          <input
            type="number"
            placeholder="Ex: 1200.00"
            className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded-md"
        >
          Adicionar Venda
        </button>
      </form>
    </div>
  )
}
