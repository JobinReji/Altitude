import impeerical_logo from "../assets/Impeerical_logo.png";
import Dr_Reddys_Logo from "../assets/Logo_white.png";
import logout from "../assets/logout.png";

export default function Header() {
  return (
    <header className="flex justify-between h-[10%] items-center sticky top-0 right-0 w-full z-50 bg-white">
      <div className="w-[80%] h-[70%] bg-[#5224B5] rounded-r-full flex justify-between items-center">
        <div className="pl-2 w-[30%]">
          <img
            src={Dr_Reddys_Logo}
            className="w-full sm:w-[50%]"
            alt="Dr. Reddys Logo"
          />
        </div>
        <div className="text-sm w-[50%] sm:text-2xl font-semibold text-white text-center">
          Altitude - Screener
        </div>
        <div>
          <button
            className="w-[60%] sm-[80%] nav-btn  cursor-pointer"
            title="Logout"
          >
            <img src={logout} className="w-full" alt="Logout" />
          </button>
        </div>
      </div>
      <div className="w-[25%] sm:w-[8%]">
        <img
          src={impeerical_logo}
          className="w-full p-2"
          alt="Impeerical Logo"
        />
      </div>
    </header>
  );
}
