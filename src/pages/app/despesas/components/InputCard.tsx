import { useState } from "react";

interface InputCardProps {
  label: string;
  placeholder: string;
  ringColor: string;
  buttonText?: string;
  buttonColor?: string;
  onSubmit: (value: number, description?: string) => void;
  semDescricao?: boolean;
}

export function InputCard({
  label,
  placeholder,
  ringColor,
  buttonText,
  buttonColor,
  onSubmit,
  semDescricao = false,
}: InputCardProps) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    const valor = parseFloat(amount);
    if (isNaN(valor)) return;

    if (semDescricao) {
      onSubmit(valor);
    } else {
      if (!description.trim()) return;
      onSubmit(valor, description.trim());
    }

    setAmount("");
    setDescription("");
  };

  return (
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md">
      <label className="text-white block mb-2 text-sm font-semibold">{label}</label>

      {!semDescricao && (
        <input
          type="text"
          placeholder="Descrição"
          className={`w-full mb-2 p-3 rounded-md bg-[#111827] text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${ringColor}`}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      )}

      <input
        type="number"
        placeholder={placeholder}
        className={`w-full p-3 rounded-md bg-[#111827] text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${ringColor}`}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      {buttonText && (
        <button
          onClick={handleAdd}
          className={`mt-4 w-full text-white py-2 rounded-md transition-colors font-semibold ${buttonColor || "bg-red-500 hover:bg-red-400"}`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
