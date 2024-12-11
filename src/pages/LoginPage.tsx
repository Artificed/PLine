import logo from "../assets/images/logos/line.svg";

const LoginPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-[#2D2E30]">
      <div className="w-[64%] border-r border-white/10 flex flex-col items-center text-white text-xs font-extralight">
        <img src={logo} className="h-[4.1rem] w-[4.1rem] mb-4 mt-[4rem]" />
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
        >
          Login
        </button>
        <div className="flex items-center justify-between w-[17rem]">
          <div className="flex items-center">
            <input type="checkbox" id="auto-login" className="mr-2" />
            <label htmlFor="auto-login">Log me in automatically</label>
          </div>
          <a className="text-right">Reset password</a>
        </div>
        <div className="flex items-center justify-between w-[17rem] mb-6 mt-auto">
          <a className="text-right">Log in with my smartphone {">"}</a>
        </div>
      </div>
      <div className="w-[36%]">QR Form</div>
    </div>
  );
};

export default LoginPage;
