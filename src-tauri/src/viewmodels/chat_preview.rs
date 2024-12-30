use chrono::NaiveDateTime;

pub struct ChatPreview {
    pub chat_name: String,
    pub chat_image: String,
    pub last_message_content: String,
    pub last_message_time: NaiveDateTime,
}