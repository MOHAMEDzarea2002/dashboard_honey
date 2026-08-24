
export default function StatCard({ title, value, Icon, colorClass }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl  border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold mt-1 text-gray-800">{value}</h3>
      </div>

      {/* عرض الأيقونة باللون المناسب */}
      {Icon && (
        <div className={`p-3 rounded-lg ${colorClass}`}>
          <Icon className="w-6 h-6" />
        </div>
      )}
    </div>
  );
}
