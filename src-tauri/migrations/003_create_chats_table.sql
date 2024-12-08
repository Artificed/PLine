CREATE TABLE chats (
  chat_id VARCHAR(36) PRIMARY KEY NOT NULL,
  chat_name VARCHAR(255) NOT NULL,
  chat_type VARCHAR(10) NOT NULL,
  CHECK (chat_type IN ('Direct', 'Group'))
);
