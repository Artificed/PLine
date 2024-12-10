import TopMenu from "../menus/TopMenu";
import ChatContent from "./ChatContent";
import ChatList from "./ChatList";

const ChatSection: React.FC = () => {
  return (
    <div className="bg-[#2D2E30] flex flex-1 flex-col h-full">
      <TopMenu />
      <div className="flex flex-1">
        <ChatList />
        <ChatContent />
      </div>
    </div>
  );
}

export default ChatSection;
