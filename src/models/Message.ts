interface Message {
  messageId: string;
  messageChatId: string;
  messageSenderId: string;
  messageType: string;
  messageSentTime: Date;
  messageRead: boolean;
}
