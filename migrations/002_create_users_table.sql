CREATE TABLE users (
  user_id VARCHAR(36) PRIMARY KEY NOT NULL,
  user_line_id VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  user_display_name VARCHAR(255),
  user_status_message VARCHAR(255),
  user_email VARCHAR(255),
  user_birthday DATE
);
