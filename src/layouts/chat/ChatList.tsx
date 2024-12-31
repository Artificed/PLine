import ChatSearch from "../../components/ChatSearch";
import ChatPreview from "../../components/ChatPreview";

interface ChatListProps {
  chatPreviews: ChatPreviewViewModel[];
  selectedChatId: string | null;
}

const ChatList: React.FC<ChatListProps> = ({
  chatPreviews,
  selectedChatId,
}) => {
  return (
    <div
      className="flex flex-col w-1/2 overflow-y-auto border-r border-white/10"
      style={{ height: "calc(100vh - 3rem)" }}
    >
      <ChatSearch />
      <div className="flex-1 overflow-y-auto scrollbar-webkit custom-scrollbar relative right-0">
        {chatPreviews.map((chatPreview) => (
          <ChatPreview
            chatPreviewViewModel={chatPreview}
            isSelected={chatPreview.chatId === selectedChatId}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
