export default function SummaryCard({ count, label, color }) {
  const colors = {
    yellow: {
      text: "text-yellow-500",
      bg: "bg-yellow-800",
      badge: "text-yellow-200",
    },
    red: {
      text: "text-red-500",
      bg: "bg-red-800",
      badge: "text-red-200",
    },
    green: {
      text: "text-green-500",
      bg: "bg-green-800",
      badge: "text-green-200",
    },
  };

  const style = colors[color] || colors.yellow;

  return (
    <>
      <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
        <div className={`text-5xl font-bold mb-2 ${style.text}`}>{count}</div>
        <div
          className={`${style.bg} bg-opacity-50 ${style.badge} text-xs font-medium px-3 py-1 rounded-full inline-block`}
        >
          {label}
        </div>
      </div>
    </>
  );
}
