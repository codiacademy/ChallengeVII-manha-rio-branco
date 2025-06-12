// Despesas.tsx atual
import { useEffect, useState } from "react";
import { InfoCard } from "../receita/components/InfoCard";
import { InputCard } from "./components/InputCard";
import ResumoCard from "./components/ResumoCard";

interface Despesa {
  id: number;
  valor: number;
  descricao: string;
  createdAt: string;
}

export default function Despesas() {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [limite, setLimite] = useState(10000);

  useEffect(() => {
    fetch("http://localhost:3001/despesas")
      .then((res) => res.json())
      .then((data) => setDespesas(data))
      .catch((err) => console.error("Erro ao buscar despesas:", err));
  }, []);

  const adicionarDespesa = (valor: number, descricao?: string) => {
    if (isNaN(valor) || valor <= 0) return;

    const novaDespesa: Despesa = {
      id: Date.now(),
      valor,
      descricao: descricao || "",
      createdAt: new Date().toISOString(),
    };

    setDespesas((prev) => [...prev, novaDespesa]);

    fetch("http://localhost:3001/despesas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaDespesa),
    }).catch((err) => console.error("Erro ao salvar despesa:", err));
  };

  const definirLimite = (valor: number) => {
    if (isNaN(valor) || valor <= 0) return;
    setLimite(valor);
  };

  const totalDespesas = despesas.reduce((acc, item) => {
    const val = Number(item.valor);
    return acc + (isNaN(val) ? 0 : val);
  }, 0);

  return (
    <div className="p-6 space-y-6">
      <div className="card mb-6">
        <h1 className="text-3xl font-bold">Despesas</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="Total de Despesas"
          value={`R$ ${totalDespesas.toFixed(2)}`}
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
          onSubmit={adicionarDespesa}
        />
        <InputCard
          label="Informe o limite do mês"
          placeholder="Ex: 10000"
          ringColor="focus:ring-yellow-500"
          buttonText="Definir o Limite mensal"
          buttonColor="bg-yellow-500 hover:bg-yellow-400"
          onSubmit={definirLimite}
          semDescricao
        />
      </div>

      <ResumoCard despesas={totalDespesas} limite={limite} />
    </div>
  );
}
