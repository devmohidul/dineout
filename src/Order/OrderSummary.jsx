export default function OrderSummary({ orders, setOrders }) {
  const totalOrders = orders.length;
  const pendingOrders = orders.filter(
    (order) => order.status === "Pending"
  ).length;
  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  ).length;

  const handleDelete = (id) => {
    const updated = orders.filter((order) => order.id !== id);
    setOrders(updated);
  };

  const handleDeliver = (id) => {
    const updated = orders.map((order) =>
      order.id === id ? { ...order, status: "Delivered" } : order
    );
    setOrders(updated);
  };

  return (
    <>
      {/* <!-- Order Summary and Reports Section --> */}
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        {/* <!-- Order Summary --> */}
        <div>
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* <!-- Total Orders --> */}
            <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
              <div className="text-5xl font-bold text-yellow-500 mb-2">
                {totalOrders}
              </div>
              <div className="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                Total Order
              </div>
            </div>

            {/* <!-- Pending Orders --> */}
            <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
              <div className="text-5xl font-bold text-red-500 mb-2">
                {pendingOrders}
              </div>
              <div className="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                Pending
              </div>
            </div>

            {/* <!-- Delivered Orders --> */}
            <div className="bg-cardbg rounded-lg p-4 relative overflow-hidden">
              <div className="text-5xl font-bold text-green-500 mb-2">
                {deliveredOrders}
              </div>
              <div className="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
                Delivered
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Order Reports --> */}
        <div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4">Order Reports</h2>

            <div className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-funnel-icon lucide-funnel"
              >
                <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
              </svg>
              <select className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
                <option>All</option>
                <option>Pending</option>
                <option>Delivered</option>
              </select>
            </div>
          </div>
          {/* Order Table */}
          <div className="bg-cardbg rounded-lg p-4">
            <div className="reports-container">
              <table className="min-w-full">
                <thead>
                  <tr className="text-left text-sm">
                    <th className="pb-3 font-medium">ID</th>
                    <th className="pb-3 font-medium">Customer Name</th>
                    <th className="pb-3 font-medium">Items</th>
                    <th className="pb-3 font-medium">Amount</th>
                    <th className="pb-3 font-medium">Status</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {orders.map((order) => (
                    <tr key={order.id} className="border-t border-gray-700">
                      <td className="py-3">{order.id}</td>
                      <td className="py-3">{order.customerName}</td>
                      <td className="py-3">{order.items.length}</td>
                      <td className="py-3">BDT {order.total}</td>
                      <td className="py-3">
                        <span
                          className={`${order.status} === 'Pending' ? "text-red-500" : "text-green-500"`}
                        >
                          {order.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="py-3">
                        <button
                          className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                          onClick={() => handleDelete(order.id)}
                        >
                          Delete
                        </button>
                        {order.status === "Pending" && (
                          <button
                            className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                            onClick={() => handleDeliver(order.id)}
                          >
                            DELIVER
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                  {orders.length === 0 && (
                    <tr>
                      <td
                        colSpan="6"
                        className="text-center text-gray-400 py-4"
                      >
                        No orders placed yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
