use chrono::NaiveDateTime;

pub struct ChatPreviewChatDTO {
    pub chat_id: String,
    pub chat_name: String,
    pub chat_image: String,
}

pub struct ChatPreviewMessageDTO {
    pub message_id: String,
    pub message_sender_id: String,
    pub message_content: String,
    pub message_time: NaiveDateTime,
}
