CREATE TABLE message_videos (
  message_id CHAR(36) NOT NULL,
  message_video VARCHAR(255) NOT NULL,

  FOREIGN KEY (message_id) REFERENCES messages(message_id) ON UPDATE CASCADE ON DELETE CASCADE
);
