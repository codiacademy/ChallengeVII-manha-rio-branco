interface InputCardProps {
  label: string
  placeholder: string
  ringColor: string
}

export function InputCard({ label, placeholder, ringColor }: InputCardProps) {
  return (
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md">
      <label className="text-white block mb-2 text-sm font-semibold">{label}</label>
      <input
        type="number"
        placeholder={placeholder}
        className={`w-full p-3 rounded-md bg-[#111827] text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${ringColor}`}
      />
    </div>
  )
}
