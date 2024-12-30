CREATE TABLE chat_users (
  chat_id VARCHAR(36) NOT NULL,
  user_id VARCHAR(36) NOT NULL,

  FOREIGN KEY (chat_id) REFERENCES chats(chat_id) ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON UPDATE CASCADE ON DELETE CASCADE,

  PRIMARY KEY(chat_id, user_id)
);