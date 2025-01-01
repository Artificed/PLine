import { useEffect, useState } from "react";
import logo from "../../assets/images/logos/line.svg";
import { invoke } from "@tauri-apps/api/core";
import {
  getCurrentWindow,
  currentMonitor,
  PhysicalSize,
  PhysicalPosition,
} from "@tauri-apps/api/window";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const checkFormEmpty = () => {
    form.email == "" && form.password == ""
      ? setFormEmpty(true)
      : setFormEmpty(false);
  };

  const [formEmpty, setFormEmpty] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    checkFormEmpty();
  }, [form]);

  const login = async () => {
    let loginSuccess = await invoke("validate_login", {
      userEmail: form.email,
      userPassword: form.password,
    });

    if (!loginSuccess) {
      setErrorMessage(
        "Email address or password is either incorrect or not registered with LINE.",
      );
      return;
    }

    setErrorMessage("");
    let monitor = await currentMonitor();
    let width = monitor?.size.width;
    let height = monitor?.size.height;
    if (height && width) {
      await getCurrentWindow().setPosition(new PhysicalPosition(0, 0));
      await getCurrentWindow().setSize(
        new PhysicalSize(Math.floor(width * 0.65), height - 76), // 76 to avoid menubar, currently hardcoded
      );
    }

    navigate("/");
  };

  return (
    <div className="w-[64%] border-r border-white/10 flex flex-col items-center text-white text-xs font-extralight">
      <img src={logo} className="h-[4.1rem] w-[4.1rem] mb-4 mt-9" />
      <div className="flex flex-col items-center">
        <input
          type="text"
          className={`bg-transparent border border-b-white/20 ${errorMessage === "" ? "border-white/20" : "border-[#E03247ff]/80"} focus:outline-none w-[17rem] h-[2.7rem] rounded-t-[0.25rem] px-3`}
          placeholder="Email address"
          autoComplete="off"
          value={form.email}
          onChange={(e) => {
            setForm({
              ...form,
              email: e.target.value,
            });
          }}
        />
        <input
          type="password"
          className={`bg-transparent border border-t-white/20 ${errorMessage === "" ? "border-white/20" : "border-[#E03247ff]/80"} focus:outline-none w-[17rem] h-[2.7rem] -translate-y-[0.05rem] rounded-b-[0.25rem] px-3`}
          placeholder="Password"
          autoComplete="off"
          value={form.password}
          onChange={(e) => {
            setForm({
              ...form,
              password: e.target.value,
            });
          }}
        />
      </div>
      <button
        type="submit"
        disabled={formEmpty ? true : false}
        className={`${formEmpty ? "bg-white bg-opacity-65" : "bg-[#00B744] bg-opacity-100"}  font-light w-[17rem] h-[2.6rem] my-[0.6rem] rounded-[0.25rem]`}
        onClick={login}
      >
        Log in
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
      <div>
        <p className="text-[#E03247ff] text-[0.67rem] font-light w-[17rem] mt-2.5">
          {errorMessage}
        </p>
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
