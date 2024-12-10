import ChatSearch from "../../components/ChatSearch";
import ChatDisplay from "../../components/ChatDisplay";

const ChatList: React.FC = () => {
  return (
    <div className="flex flex-col h-auto w-1/3 border-r border-white/10">
      <ChatSearch />
      <div>
        <ChatDisplay />
      </div>
    </div>
  );
}

export default ChatList;
