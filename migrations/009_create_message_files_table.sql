CREATE TABLE message_files (
  message_id CHAR(36) NOT NULL,
  message_file VARCHAR(255) NOT NULL,

  FOREIGN KEY (message_id) REFERENCES messages(message_id) ON UPDATE CASCADE ON DELETE CASCADE
);
