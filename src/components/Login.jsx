import { useState } from "react";
import image from "../assets/log-img.png";
import impeerical_logo from "../assets/Impeerical_logo_nb.png";
import Dr_Reddys_Logo from "../assets/Logo_purple.png";
import { User, Lock, Eye, EyeOff } from "lucide-react";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkLogin = () => {
    console.log(username, password);
  };
  return (
    <section className="bg-cover bg-center sm:bg-[url(/log-bg.png)] bg-[url(/log-bgM.png)] h-full w-full relative flex justify-center items-center sm:block">
      <div className="fixed sm:w-[14%] w-[40%] m-4 top-10 sm:left-48 left-8">
        <img src={Dr_Reddys_Logo} alt="Dr. Reddy Logo" />
      </div>
      <div className="fixed sm:w-[8%] w-[30%] m-4 sm:top-10 sm:right-72 right-8 bottom-10">
        <img src={impeerical_logo} alt="Impeerical Logo" />
      </div>
      <div className="flex flex-col justify-center items-center w-[20rem] sm:w-[30rem] p-6 absolute sm:top-44 sm:left-20  ">
        <div className="py-4 text-center">
          <div className="font-bold text-3xl text-[#5224B5]">WELCOME</div>
          <div className="text-sm text-[#6C737F] py-2">
            Please Login to your account
          </div>
        </div>
        <div className="flex items-center bg-[#f9f9f9] border-2 border-[#383838] rounded-md p-1 m-2 w-[18rem]">
          <div className="border-2 border-[#5224B5] rounded-full flex justify-center items-center h-8 w-8 p-0.5">
            <User className="text-[#5224B5] w-6" />
          </div>
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="outline-none p-2 w-full"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex items-center bg-[#f9f9f9] border-2 border-[#383838] rounded-md p-1 m-2 w-[18rem]">
          <div className="border-2 border-[#5224B5] rounded-full  flex justify-center items-center h-8 w-8 p-0.5">
            <Lock className="text-[#5224B5] w-6" />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            className="outline-none p-2 w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div onClick={toglePasswordVisibility} className="cursor-pointer">
            {showPassword ? (
              <EyeOff className="text-[#5224B5]" />
            ) : (
              <Eye className="text-[#5224B5]" />
            )}
          </div>
        </div>
        <div>
          <button
            className="flex items-center justify-center bg-[#5224B5] text-white font-semibold text-lg  rounded-md p-2 m-4 w-[18rem] cursor-pointer"
            id="login"
            onClick={checkLogin}
          >
            LOGIN
          </button>
        </div>
      </div>
      <div className="absolute top-44 right-16 sm:block hidden">
        <img src={image} className="w-[70%]" />
      </div>
    </section>
  );
}
