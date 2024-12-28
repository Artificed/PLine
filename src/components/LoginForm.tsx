import { useState } from "react";
import logo from "../assets/images/logos/line.svg";
import { invoke } from "@tauri-apps/api/core";

const LoginForm: React.FC = () => {
  const email = useState("");
  const password = useState("");

  const login = async () => {
    await invoke("validate_login", {
      userEmail: "user1@example.com",
      userPassword: "password123",
    });
  };

  return (
    <div className="w-[64%] border-r border-white/10 flex flex-col items-center text-white text-xs font-extralight">
      <img src={logo} className="h-[4.1rem] w-[4.1rem] mb-4 mt-9" />
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="bg-transparent border border-white/20 focus:outline-none w-[17rem] h-[2.7rem] rounded-t-[0.25rem] px-3"
          placeholder="Email address"
        />
        <input
          type="text"
          className="bg-transparent border border-white/20 focus:outline-none w-[17rem] h-[2.7rem] -translate-y-[0.05rem] rounded-b-[0.25rem] px-3"
          placeholder="Password"
        />
      </div>
      <button
        type="submit"
        className="bg-white bg-opacity-65 w-[17rem] h-[2.6rem] my-[0.6rem] rounded-[0.25rem]"
        onClick={login}
      >
        Login
      </button>
      <div className="flex items-center justify-between w-[17rem]">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="auto-login"
            className="mr-2 hover:cursor-pointer"
          />
          <label
            htmlFor="auto-login"
            className="text-white text-opacity-50 hover:cursor-pointer"
          >
            Log me in automatically
          </label>
        </div>
        <a className="text-white text-opacity-50 text-right hover:cursor-pointer">
          Reset password
        </a>
      </div>
      <div className="flex items-center justify-between w-[17rem] mb-6 mt-auto">
        <a className="text-right hover:cursor-pointer">
          Log in with my smartphone {">"}
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
