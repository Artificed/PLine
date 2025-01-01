import { useEffect, useState } from "react";
import TopMenu from "../menus/TopMenu";
import ChatContent from "./ChatContent";
import ChatList from "./ChatList";
import { invoke } from "@tauri-apps/api/core";

const ChatSection: React.FC = () => {
  const [chatPreviews, setChatPreviews] = useState<ChatPreviewViewModel[]>([]);
  const [selectedChatIdx, setSelectedChatIdx] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      let data = await invoke<ChatPreviewViewModel[]>("get_chat_previews");
      setChatPreviews(data);
      if (data.length > 0) {
        setSelectedChatIdx(0);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-[#2D2E30] flex-1 flex flex-col h-full">
      <TopMenu />
      <div className="flex-1 flex">
        <ChatList
          chatPreviews={chatPreviews}
          selectedChatIdx={selectedChatIdx}
        />
        <ChatContent
          chatId={chatPreviews[selectedChatIdx]?.chatId}
          chatName={chatPreviews[selectedChatIdx]?.chatName}
        />
      </div>
    </div>
  );
};

export default ChatSection;
