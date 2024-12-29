import ChatSearch from "../../components/ChatSearch";
import ChatDisplay from "../../components/ChatDisplay";

const ChatList: React.FC = () => {
  return (
    <div
      className="flex flex-col w-1/2 overflow-y-auto border-r border-white/10"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <ChatSearch />
      <div className="flex-1 overflow-y-auto scrollbar-webkit custom-scrollbar">
        {Array.from({ length: 14 }).map((_, index) => (
          <ChatDisplay key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
