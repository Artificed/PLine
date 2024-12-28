INSERT INTO message_images (message_id, message_image)
VALUES
((SELECT message_id FROM messages WHERE message_type = 'Image' AND message_chat_id = (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 1' LIMIT 1) LIMIT 1), 
 'image_url_1.jpg'),

((SELECT message_id FROM messages WHERE message_type = 'Image' AND message_chat_id = (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 3' LIMIT 1) LIMIT 1), 
 'image_url_2.jpg');
