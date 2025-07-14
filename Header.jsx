import dineLogo from "./src/assets/logo.svg";
import lwsIcon from "./src/assets/user-icon.svg";

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#5956564A] rounded-full mt-4 px-8 py-3 flex justify-between items-center">
        <div className="flex items-center ">
          <div className="text-primary mr-2">
            <img src={dineLogo} />
          </div>
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Dine</span>Out
          </h1>
        </div>
        <div className="flex items-center">
          <img src={lwsIcon} className="h-10" />
        </div>
      </nav>
    </>
  );
}
