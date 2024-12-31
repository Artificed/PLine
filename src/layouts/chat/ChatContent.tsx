import ChatHeader from "../../components/ChatHeader";
import ChatTextBox from "../../components/ChatTextBox";

interface ChatContentProps {
  chat_id: string | null;
}

const ChatContent: React.FC<ChatContentProps> = ({ chat_id }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <ChatHeader />
      <div className="flex-1 overflow-auto">{/* TODO: Messages Here */}</div>
      <ChatTextBox />
    </div>
  );
};

export default ChatContent;
