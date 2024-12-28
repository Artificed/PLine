CREATE TABLE message_images (
  message_id CHAR(36) NOT NULL,
  message_image VARCHAR(255) NOT NULL,

  FOREIGN KEY (message_id) REFERENCES messages(message_id) ON UPDATE CASCADE ON DELETE CASCADE
);
