import { open } from "@tauri-apps/plugin-shell";
import login_qr from "../assets/images/defaults/login_qr.png";

const QRLogin: React.FC = () => {
  const openLineHelp = async () => {
    await open("https://help.line.me/line/mac/categoryId/20009670?lang=en");
  };

  return (
    <div className="w-[36%] flex flex-col items-center">
      <div className="flex w-full justify-end gap-2 mr-6 translate-y-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className="size-5 hover:cursor-pointer"
          onClick={openLineHelp}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <img src={login_qr} className="mt-14" />
      <p className="text-white text-[0.82rem] mt-4 mb-3">QR code login</p>
      <p className="text-white text-opacity-50 text-xs font-extralight text-center w-36">
        To scan your QR code, open LINE on your mobile device and tap the QR
        code icon in the search box.
      </p>
    </div>
  );
};

export default QRLogin;
