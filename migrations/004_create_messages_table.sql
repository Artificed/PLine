CREATE TABLE messages (
  message_id VARCHAR(36) PRIMARY KEY NOT NULL,
  message_chat_id VARCHAR(36) NOT NULL,
  message_sender_id VARCHAR(36) NOT NULL,
  message_type VARCHAR(255) NOT NULL,
  message_sent_time DATE,
  message_read INT,

  CONSTRAINT chk_message_read CHECK (message_read IN (0, 1)),
  CONSTRAINT chk_message_type CHECK (message_type IN ('Text', 'Image', 'Video', 'File')),

  FOREIGN KEY (message_chat_id) REFERENCES chats(chat_id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (message_sender_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE
);
