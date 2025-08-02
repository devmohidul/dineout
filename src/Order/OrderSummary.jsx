import { useState } from "react";
import FilterSvg from "../assets/Svg/FilterSvg";
import SummaryCard from "./SummaryCard";

export default function OrderSummary({ orders, setOrders }) {
  const [filter, setFilter] = useState("All");
  const totalOrders = orders;
  const pendingOrders = orders.filter((order) => order.status === "Pending");
  const deliveredOrders = orders.filter(
    (order) => order.status === "Delivered"
  );

  const filteredOrders =
    filter === "Pending"
      ? pendingOrders
      : filter === "Delivered"
      ? deliveredOrders
      : totalOrders;

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
            <SummaryCard
              count={totalOrders.length}
              label="Total Order"
              color="yellow"
            />

            {/* <!-- Pending Orders --> */}
            <SummaryCard
              count={pendingOrders.length}
              label="Pending"
              color="red"
            />

            {/* <!-- Delivered Orders --> */}
            <SummaryCard
              count={deliveredOrders.length}
              label="Delivered"
              color="green"
            />
          </div>
        </div>

        {/* <!-- Order Reports --> */}
        <div>
          <div className="flex justify-between">
            <h2 className="text-xl font-bold mb-4">Order Reports</h2>

            <div className="flex gap-4 items-center">
              <FilterSvg />
              <select
                className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
                onChange={(e) => setFilter(e.target.value)}
              >
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
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="border-t border-gray-700">
                      <td className="py-3">{order.id}</td>
                      <td className="py-3">{order.customerName}</td>
                      <td className="py-3">{order.items.length}</td>
                      <td className="py-3">BDT {order.total}</td>
                      <td className="py-3">
                        <span
                          className={`${
                            order.status === "Pending"
                              ? "text-red-500"
                              : "text-green-500"
                          }`}
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
                  {filteredOrders.length === 0 && (
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
