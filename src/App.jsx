import { useEffect, useState } from "react";
import Header from "../Header";
import "./App.css";
import { foodItems } from "./Order/FoodItems";
import Orders from "./Order/Orders";
import OrderSummary from "./Order/OrderSummary";

export default function App() {
  const [items, setItems] = useState(foodItems);
  const [orders, setOrders] = useState([]);

  // Load orders from localStorage or first mount
  useEffect(() => {
    const saved = localStorage.getItem("orders");
    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  // Save orders to localStorage on change
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const handlePlaceOrder = (customerName) => {
    const selectedItems = items.filter((item) => item.selected);
    const total = selectedItems.reduce((sum, item) => sum + item.price, 0);

    const newOrder = {
      id: Date.now(), // unique order ID
      customerName,
      items: selectedItems,
      total,
      status: "Pending",
    };

    // Add to order list
    setOrders((prev) => [...prev, newOrder]);

    // Deselect all items
    const deselectItems = items.map((item) => ({ ...item, selected: false }));
    setItems(deselectItems);
  };

  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <Orders
            items={items}
            setItems={setItems}
            onPlaceOrder={handlePlaceOrder}
          />
          <OrderSummary orders={orders} setOrders={setOrders} />
        </div>
      </div>
    </div>
  );
}
