import { useEffect, useState } from "react";
import ChatHeader from "../../components/ChatHeader";
import ChatTextBox from "../../components/ChatTextBox";
import { invoke } from "@tauri-apps/api/core";

interface ChatContentProps {
  chatId: string | null;
  chatName: string | null;
}

const ChatContent: React.FC<ChatContentProps> = ({ chatId, chatName }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <ChatHeader chatName={chatName} />
      <div className="flex-1 overflow-auto">{/* TODO: Messages Here */}</div>
      <ChatTextBox />
    </div>
  );
};

export default ChatContent;
