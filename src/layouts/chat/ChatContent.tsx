import { useEffect, useState } from "react";
import ChatHeader from "../../components/ChatHeader";
import ChatTextBox from "../../components/ChatTextBox";
import { invoke } from "@tauri-apps/api/core";

interface ChatContentProps {
  chatId: string | null;
  chatName: string | null;
}

const ChatContent: React.FC<ChatContentProps> = ({ chatId, chatName }) => {
  const [messages, setMessages] = useState<MessageViewModel[]>([]);

  useEffect(() => {
    if (!chatId) return;
    const fetchData = async () => {
      let data = await invoke<MessageViewModel[]>("get_message_views", {
        chatId: chatId,
      });
      console.log(data);
      setMessages(data);
    };

    fetchData();
  }, [chatId]);

  if (!chatId) {
    return;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <ChatHeader chatName={chatName} />
      <div className="flex-1 overflow-auto">
        {messages.map((message: MessageViewModel) => (
          <div>
            <p>{message.messageContent}</p>
          </div>
        ))}
      </div>
      <ChatTextBox />
    </div>
  );
};

export default ChatContent;
