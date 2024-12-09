import TopMenu from "../menus/TopMenu";
import ChatContent from "./ChatContent";
import ChatList from "./ChatList";

export default function ChatSection() {
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
