import Header from "../Header";
import "./App.css";
import Orders from "./Order/Orders";
import OrderSummary from "./Order/OrderSummary";

export default function App() {
  return (
    <div className="text-white bg-background">
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <Orders />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
