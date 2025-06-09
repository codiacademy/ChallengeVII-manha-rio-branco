import React, { useState } from "react";

interface CreateSaleFormProps {
  onNewSale: () => void;
}

export function CreateSaleForm({ onNewSale }: CreateSaleFormProps){
  const[name, setName]= useState("");
  const[email, setEmail]= useState("");
  const[amount, setAmount]= useState("");

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();


    const newSale= {
      name,
      email,
      amount: `R$ ${parseFloat(amount).toFixed(2)}`,
    };

    try {
      const res = await fetch("http://localhost:3001/sales",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSale),
      });

       if (!res.ok) throw new Error("Erro ao cadastrar venda");


       //limpand form
       setName("");
       setEmail("");
       setAmount("");


       onNewSale();
    } catch(err){
      alert("Erro ao cadastrar venda")
      console.error(err);
    }
  }
    return (
    <div className="bg-gray-800 border border-gray-700 p-6 rounded-lg text-white w-full h-full">
      <h2 className="text-xl font-bold mb-4">Lançar Nova Venda</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm mb-1">Nome do Cliente</label>
          <input
            type="text"
            placeholder="Ex: Ana Souza"
            className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="cliente@email.com"
            className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Valor (R$)</label>
          <input
            type="number"
            step="0.01"
            placeholder="Ex: 1200.00"
            className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
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
  );
};
  