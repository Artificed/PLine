import ChatSearch from "../../components/ChatSearch";
import ChatPreview from "../../components/ChatPreview";

const ChatList: React.FC = () => {
  const fetchData = async () => {};

  return (
    <div
      className="flex flex-col w-1/2 overflow-y-auto border-r border-white/10"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <ChatSearch />
      <div className="flex-1 overflow-y-auto scrollbar-webkit custom-scrollbar">
        {Array.from({ length: 14 }).map(() => (
          <ChatPreview
            chatName="Keep Memo"
            chatImage="../../assets/images/defaults/DefaultPfp.jpg"
            lastMessageContent="Test"
            lastMessageTime="10:37 PM"
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
