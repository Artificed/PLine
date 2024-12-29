interface Message {
  messageId: String;
  messageChatId: String;
  messageSenderId: String;
  messageType: String;
  messageSentTime: Date;
  messageRead: boolean;
}
