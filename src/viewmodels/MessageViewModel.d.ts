interface MessageViewModel {
  senderId: string;
  senderName: string;
  senderImage: string;
  messageType: MessageType;
  messageContent: string;
  messageTime: Date;
}

export default MessageViewModel;
