import { ArrowUpRight } from "lucide-react";

export default function SummaryCard({
  title,
  value,
  subtitle,
  icon,
  color = "bg-blue-600",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      <div className="flex justify-between items-start">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-3 text-gray-900">
            {value}
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            {subtitle}
          </p>

        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white ${color}`}
        >
          {icon}
        </div>

      </div>

      <div className="flex items-center gap-2 mt-6 text-green-600">

        <ArrowUpRight size={16} />

        <span className="text-sm font-medium">
          Improved since last week
        </span>

      </div>

    </div>
  );
}