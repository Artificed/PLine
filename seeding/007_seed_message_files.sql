INSERT INTO message_files (message_id, message_file)
VALUES
((SELECT message_id FROM messages WHERE message_type = 'File' AND message_chat_id = (SELECT chat_id FROM chats WHERE chat_name = 'Chat 1' LIMIT 1) LIMIT 1), 
 'file_url_1.pdf'),

((SELECT message_id FROM messages WHERE message_type = 'File' AND message_chat_id = (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 2' LIMIT 1) LIMIT 1), 
 'file_url_2.docx');
