INSERT INTO users (user_id, user_line_id, user_password, user_display_name, user_status_message, user_email, user_birthday, user_profile_picture) 
VALUES
(UUID(), 'user1_line_id', 'password123', 'User One', 'Hello, world!', 'user1@example.com', '1990-01-01', './defaults/DefaultPfp.jpg'),
(UUID(), 'user2_line_id', 'password123', 'User Two', 'Hi there!', 'user2@example.com', '1992-02-02', './defaults/DefaultPfp.jpg'),
(UUID(), 'user3_line_id', 'password123', 'User Three', 'Having a great day!', 'user3@example.com', '1993-03-03', './defaults/DefaultPfp.jpg'),
(UUID(), 'user4_line_id', 'password123', 'User Four', 'Ready to chat!', 'user4@example.com', '1994-04-04', './defaults/DefaultPfp.jpg');
