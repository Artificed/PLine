import TopMenu from "../menus/TopMenu";
import ChatContent from "./ChatContent";
import ChatList from "./ChatList";

const ChatSection: React.FC = () => {
  return (
    <div className="bg-[#2D2E30] flex-1 flex flex-col h-full">
      <TopMenu />
      <div className="flex-1 flex">
        <ChatList />
        <ChatContent />
      </div>
    </div>
  );
};

export default ChatSection;
