import { useEffect, useState } from "react";
import ChatHeader from "../chat/ChatHeader";
import ChatTextBox from "../../components/chat/ChatTextBox";
import { invoke } from "@tauri-apps/api/core";
import ReceiveMessage from "../../components/message/ReceiveMessage";
import SendMessage from "../../components/message/SendMessage";

interface ChatContentProps {
  chatId: string | null;
  chatName: string | null;
}

const ChatContent: React.FC<ChatContentProps> = ({ chatId, chatName }) => {
  const [messages, setMessages] = useState<MessageViewModel[]>([]);
  const [currentUserId, setCurrentUserId] = useState("");

  useEffect(() => {
    if (!chatId) return;

    const fetchMessageData = async () => {
      let data = await invoke<MessageViewModel[]>("get_message_views", {
        chatId: chatId,
      });
      setMessages(data);
    };

    const fetchCurrentUserData = async () => {
      let data = await invoke<string>("get_current_user_id");
      setCurrentUserId(data);
    };

    fetchMessageData();
    fetchCurrentUserData();
  }, [chatId]);

  if (!chatId) {
    return;
  }

  return (
    <div className="w-full h-full flex flex-col">
      <ChatHeader chatName={chatName} />
      <div className="flex-1 overflow-auto px-3">
        {messages.map((message: MessageViewModel) =>
          message.senderId === currentUserId ? (
            <SendMessage message={message} />
          ) : (
            <ReceiveMessage message={message} />
          ),
        )}
      </div>
      <ChatTextBox />
    </div>
  );
};

export default ChatContent;
