INSERT INTO users (user_id, user_line_id, user_password, user_display_name, user_status_message, user_email, user_birthday) 
VALUES
(UUID(), 'user1_line_id', 'password123', 'User One', 'Hello, world!', 'user1@example.com', '1990-01-01'),
(UUID(), 'user2_line_id', 'password123', 'User Two', 'Hi there!', 'user2@example.com', '1992-02-02'),
(UUID(), 'user3_line_id', 'password123', 'User Three', 'Having a great day!', 'user3@example.com', '1993-03-03');

INSERT INTO chats (chat_id, chat_name, chat_type)
VALUES
(UUID(), 'Chat 1', 'Direct'),
(UUID(), 'Group Chat 1', 'Group'),
(UUID(), 'Group Chat 2', 'Group');

INSERT INTO messages (message_id, message_chat_id, message_sender_id, message_type, message_content, message_image, message_video, message_file, message_sent_time, message_read)
VALUES
(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Chat 1' LIMIT 1), (SELECT user_id FROM users WHERE user_line_id = 'user1_line_id' LIMIT 1), 'Text', 'Hello, User Two!', NULL, NULL, NULL, '2024-12-08', 1),
(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 1' LIMIT 1), (SELECT user_id FROM users WHERE user_line_id = 'user2_line_id' LIMIT 1), 'Image', NULL, 'image_url_1.jpg', NULL, NULL, '2024-12-08', 0),
(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 2' LIMIT 1), (SELECT user_id FROM users WHERE user_line_id = 'user3_line_id' LIMIT 1), 'Video', NULL, NULL, 'video_url_1.mp4', NULL, '2024-12-08', 1);

INSERT INTO friends (user_id, friend_id)
VALUES
((SELECT user_id FROM users WHERE user_line_id = 'user1_line_id' LIMIT 1), (SELECT user_id FROM users WHERE user_line_id = 'user2_line_id' LIMIT 1)),
((SELECT user_id FROM users WHERE user_line_id = 'user2_line_id' LIMIT 1), (SELECT user_id FROM users WHERE user_line_id = 'user3_line_id' LIMIT 1)),
((SELECT user_id FROM users WHERE user_line_id = 'user1_line_id' LIMIT 1), (SELECT user_id FROM users WHERE user_line_id = 'user3_line_id' LIMIT 1));

