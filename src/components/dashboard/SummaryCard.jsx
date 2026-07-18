export default function SummaryCard({
  title,
  value,
  subtitle,
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-200">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-gray-900 mt-2">
        {value}
      </h2>

      <p className="text-sm text-gray-500 mt-2">
        {subtitle}
      </p>

    </div>
  );
}