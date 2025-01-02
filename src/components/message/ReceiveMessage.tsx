import MessageProps from "../../props/MessageProps";

const ReceiveMessage: React.FC<MessageProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };
  return (
    <div className="flex mb-3">
      <img
        src={message.senderImage}
        className="w-[2.38rem] h-[2.38rem] rounded-full"
      />
      <div className="flex flex-col font-extralight text-[13px] font-sans ml-2.5">
        <p className="text-white/80">{message.senderName}</p>
        <div className="flex">
          <div className="bg-white/20 text-white/80 w-max h-max py-[0.37rem] px-3 mt-0.5 rounded-2xl">
            <p className="translate-y-[1px]">{message.messageContent}</p>
          </div>
          <p className="self-end translate-y-0.5 text-white/40 text-[10.5px] ml-1.5">
            {formatTime(new Date(message.messageTime))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReceiveMessage;
