INSERT INTO message_videos (message_id, message_video)
VALUES
((SELECT message_id FROM messages WHERE message_type = 'Video' AND message_chat_id = (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 1' LIMIT 1) LIMIT 1), 
 'video_url_1.mp4'),

((SELECT message_id FROM messages WHERE message_type = 'Video' AND message_chat_id = (SELECT chat_id FROM chats WHERE chat_name = 'Group Chat 3' LIMIT 1) LIMIT 1), 
 'video_url_2.mp4');
