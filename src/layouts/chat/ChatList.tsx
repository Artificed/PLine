import ChatSearch from "../../components/ChatSearch";
import ChatPreview from "../../components/ChatPreview";
import { invoke } from "@tauri-apps/api/core";
import { useEffect, useState } from "react";

const ChatList: React.FC = () => {
  const [chatPreviews, setChatPreviews] = useState<ChatPreviewViewModel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      let data = await invoke<ChatPreviewViewModel[]>("get_chat_previews");
      setChatPreviews(data);
    };
    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col w-1/2 overflow-y-auto border-r border-white/10"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <ChatSearch />
      <div className="flex-1 overflow-y-auto scrollbar-webkit custom-scrollbar">
        {chatPreviews.map((chatPreview) => (
          <ChatPreview
            chatName={chatPreview.chatName}
            chatImage={chatPreview.chatImage}
            lastMessageContent={chatPreview.lastMessageContent}
            lastMessageTime={chatPreview.lastMessageTime}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
