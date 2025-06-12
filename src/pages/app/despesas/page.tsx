import { useState } from "react";
import { InfoCard } from "../receita/components/InfoCard";
import { InputCard } from "./components/InputCard";
import ResumoCard from "./components/ResumoCard";

export default function Depesas() {
  const [despesas, setDespesas] = useState(0);
  const [limite, setLimite] = useState(10000);

  // Adiciona uma nova despesa (soma o valor)
  const adicionarDespesa = (valor: number) => {
    setDespesas((prev) => prev + valor);
  };

  // Define o limite mensal
  const definirLimite = (valor: number) => {
    setLimite(valor);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="card mb-6">
        <h1 className="text-3xl font-bold">Despesas</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Total de Despesas"
          value={`R$ ${despesas.toFixed(2)}`}
          subtitle="Gastos acumulados este mês"
          color="text-red-400"
        />
        <InfoCard
          title="Limite Mensal"
          value={`R$ ${limite.toFixed(2)}`}
          subtitle="Orçamento planejado para o mês"
          color="text-yellow-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputCard
          label="Informe o valor gasto"
          placeholder="Ex: 8400"
          ringColor="focus:ring-red-500"
          buttonText="Adicionar Despesa"
          buttonColor="bg-red-500 hover:bg-red-400"
          onValueSubmit={adicionarDespesa}
        />
        <InputCard
          label="Informe o limite do mês"
          placeholder="Ex: 10000"
          ringColor="focus:ring-yellow-500"
          buttonText="Definir o Limite mensal"
          buttonColor="bg-yellow-500 hover:bg-yellow-400"
          onValueSubmit={definirLimite}
        />
      </div>

      <ResumoCard despesas={despesas} limite={limite} />
    </div>
  );
}
