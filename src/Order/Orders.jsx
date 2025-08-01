import { useState } from "react";

export default function Orders({ items, setItems, onPlaceOrder }) {
  const [customerName, setCustomerName] = useState("");

  const toggleItem = (id) => {
    const updated = items.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setItems(updated);
  };

  // Calculate total price
  const total = items.reduce(
    (sum, item) => (item.selected ? sum + item.price : sum),
    0
  );

  const hasSelection = items.some((item) => item.selected);
  const hasCustomerName = customerName.trim().length > 0;
  const canPlaceOrder = hasSelection && hasCustomerName;

  const handleClick = () => {
    if (canPlaceOrder) {
      onPlaceOrder(customerName);
      setCustomerName("");
    }
  };

  return (
    <>
      <div className="bg-[#5956564A] rounded-lg p-6 h-[calc(100vh_-_60px)]">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>

        {/* Customer Name Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Customer Name
          </label>
          <input
            type="text"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>

        {/* Choose Items */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Choose Items</label>
          <div className="items-container">
            {items.map((item) => {
              return (
                <div
                  key={item.id}
                  className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
                >
                  <div className="flex items-center">
                    <div className="w-12 h-12   flex items-center justify-center mr-3">
                      <img
                        src={item.image}
                        alt="Hamburger"
                        className="w-10 h-10"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-xs text-gray-400">BDT {item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                  >
                    {item.selected ? (
                      // Minus Icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      // Plus Icon
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-green-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Place Order Button */}
        <button
          className={`w-full bg-[#FF602C] hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${
            canPlaceOrder
              ? "bg-[#FF602C] hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1"
              : "bg-gray-700 text-gray-400 cursor-not-allowed"
          }`}
          onClick={handleClick}
          disabled={!canPlaceOrder}
        >
          Place Order (BDT {total})
        </button>
      </div>
    </>
  );
}
