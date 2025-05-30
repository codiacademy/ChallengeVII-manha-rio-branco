export default function ReceitaCard() {
    return (
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md">
        <label className="text-white block mb-2 text-sm font-semibold">
            Resumo da Receita |
        </label>
        <div className="mb-4">
            <h3 className="text-white text-base font-medium">Ganhos |</h3>
            <p className="text-2xl text-green-400 font-bold">+ R$ 4.400,00</p>
            <p className="text-sm text-gray-400">Ganho Contabilizado</p>

            <div>
                <h3 className="text-white text-base font-medium">Ganhos |</h3>
                <p className="text-2xl text-green-400 font-bold">+ R$ 3.500,00</p>
                <p className="text-sm text-gray-400">Ganho Contabilizado</p>
            </div>

            <div>
                <h3 className="text-white text-base font-medium">Ganhos |</h3>
                <p className="text-2xl text-green-400 font-bold">+ R$ 2.000,00</p>
                <p className="text-sm text-gray-400">Ganho Contabilizado</p>
            </div>

            <div>
                <h3 className="text-white text-base font-medium">Ganhos |</h3>
                <p className="text-2xl text-green-400 font-bold">+ R$ 2.600,00 </p>
                <p className="text-sm text-gray-400">Ganho Contabilizado</p>
            </div>
        </div>
        </div>

    )
}

