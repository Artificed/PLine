CREATE TABLE friends (
  user_id CHAR(36) NOT NULL,
  friend_id CHAR(36) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (friend_id) REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE,
  PRIMARY KEY (user_id, friend_id)
);
