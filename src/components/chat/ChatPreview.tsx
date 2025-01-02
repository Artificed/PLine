import ChatPreviewProps from "../../props/ChatPreviewProps";

const ChatPreview: React.FC<ChatPreviewProps> = ({
  chatPreviewViewModel,
  isSelected,
  onPreviewClicked,
}) => {
  return (
    <div
      onClick={onPreviewClicked}
      className={`flex h-[4.4rem] w-full text-white font-extralight ${isSelected ? "bg-white/5" : ""}`}
    >
      <img
        src={chatPreviewViewModel.chatImage}
        className="rounded-full m-2.5 ml-[1.1rem] mr-3.5"
      />
      <div className="flex flex-col justify-center gap-[0.08rem] -translate-y-0.5">
        <p className="text-sm">{chatPreviewViewModel.chatName}</p>
        <p className="text-[0.7rem] text-white text-opacity-50">
          {chatPreviewViewModel.lastMessageContent}
        </p>
      </div>
      <p className="text-[0.7rem] text-white text-opacity-50 mt-2.5 mr-[1.1rem] ml-auto">
        {chatPreviewViewModel.lastMessageTime}
      </p>
    </div>
  );
};

export default ChatPreview;
