interface SendMessageProps {
  message: MessageViewModel;
}

const SendMessage: React.FC<SendMessageProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  return (
    <div className="flex justify-end mb-3 mr-2 font-extralight text-[13px] font-sans">
      <p className="flex flex-col self-end translate-y-0.5 text-white/40 text-[10.5px] mr-1.5">
        {/* <p className="self-end">Read</p> */}
        <p>{formatTime(new Date(message.messageTime))}</p>
      </p>
      <div className="bg-[#67DC6F] w-max h-max py-[0.37rem] px-3 mt-0.5 rounded-2xl">
        <p className="translate-y-[1px]">{message.messageContent}</p>
      </div>
    </div>
  );
};

export default SendMessage;
