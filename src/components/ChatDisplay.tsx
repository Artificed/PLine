import DefaultPfp from "../assets/images/defaults/DefaultPfp.jpg";

const ChatDisplay: React.FC = () => {
  return (
    <div className="flex h-[4.4rem] text-white font-extralight">
      <img src={DefaultPfp} className="rounded-full m-2.5 ml-[1.1rem] mr-3.5" />
      <div className="flex flex-col justify-center gap-[0.08rem] -translate-y-0.5">
        <p className="text-sm">Keep Memo</p>
        <p className="text-[0.7rem] text-white text-opacity-50">Test</p>
      </div>
      <p className="text-[0.7rem] text-white text-opacity-50 mt-2.5 mr-[1.1rem] ml-auto">
        10:24 PM
      </p>
    </div>
  );
};

export default ChatDisplay;
