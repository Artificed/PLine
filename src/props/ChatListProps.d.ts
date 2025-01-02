interface ChatListProps {
  chatPreviews: ChatPreviewViewModel[];
  selectedChatIdx: number | null;
  onPreviewClicked: (index: number) => void;
}

export default ChatListProps;
