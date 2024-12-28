INSERT INTO friends (user_id, friend_id)
VALUES
((SELECT user_id FROM users WHERE user_line_id = 'user1_line_id' LIMIT 1), 
 (SELECT user_id FROM users WHERE user_line_id = 'user2_line_id' LIMIT 1)),

((SELECT user_id FROM users WHERE user_line_id = 'user2_line_id' LIMIT 1), 
 (SELECT user_id FROM users WHERE user_line_id = 'user3_line_id' LIMIT 1)),

((SELECT user_id FROM users WHERE user_line_id = 'user3_line_id' LIMIT 1), 
 (SELECT user_id FROM users WHERE user_line_id = 'user4_line_id' LIMIT 1)),

((SELECT user_id FROM users WHERE user_line_id = 'user4_line_id' LIMIT 1), 
 (SELECT user_id FROM users WHERE user_line_id = 'user1_line_id' LIMIT 1));
