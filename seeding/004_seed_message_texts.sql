INSERT INTO message_texts (message_id, message_text)
VALUES
((SELECT message_id FROM messages WHERE message_type = 'Text' AND message_chat_id = (SELECT chat_id FROM chats WHERE chat_name = 'Chat 1' LIMIT 1) LIMIT 1), 
 'Hello, User Two!'),

((SELECT message_id FROM messages WHERE message_type = 'Text' AND message_chat_id = (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 2' LIMIT 1) LIMIT 1), 
 'Hi everyone! Let’s plan the meeting.');
