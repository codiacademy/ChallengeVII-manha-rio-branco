interface InfoCardProps {
  title: string
  value: string
  subtitle: string
  color?: string
}

export function InfoCard({ title, value, subtitle, color = "text-white" }: InfoCardProps) {
  return (
    <div className="bg-[#1f2937] p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className={`text-3xl font-bold mt-2 ${color}`}>{value}</p>
      <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
    </div>
  )
}
