INSERT INTO messages (message_id, message_chat_id, message_sender_id, message_type, message_sent_time, message_read)
VALUES
(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Chat 1' LIMIT 1), 
        (SELECT user_id FROM users WHERE user_line_id = 'user1_line_id' LIMIT 1), 
        'Text', '2024-12-08', 1),

(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Chat 1' LIMIT 1), 
        (SELECT user_id FROM users WHERE user_line_id = 'user2_line_id' LIMIT 1), 
        'File', '2024-12-08', 0),

(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 1' LIMIT 1), 
        (SELECT user_id FROM users WHERE user_line_id = 'user2_line_id' LIMIT 1), 
        'Image', '2024-12-08', 0),

(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 1' LIMIT 1), 
        (SELECT user_id FROM users WHERE user_line_id = 'user3_line_id' LIMIT 1), 
        'Video', '2024-12-08', 1),

(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 2' LIMIT 1), 
        (SELECT user_id FROM users WHERE user_line_id = 'user4_line_id' LIMIT 1), 
        'Text', '2024-12-09', 0),

(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 2' LIMIT 1), 
        (SELECT user_id FROM users WHERE user_line_id = 'user3_line_id' LIMIT 1), 
        'File', '2024-12-09', 1),

(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 3' LIMIT 1), 
        (SELECT user_id FROM users WHERE user_line_id = 'user1_line_id' LIMIT 1), 
        'Image', '2024-12-10', 0),

(UUID(), (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 3' LIMIT 1), 
        (SELECT user_id FROM users WHERE user_line_id = 'user4_line_id' LIMIT 1), 
        'Video', '2024-12-10', 1);
