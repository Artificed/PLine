use chrono::NaiveDateTime;
use uuid::Uuid;

use crate::enums::MessageType;

pub struct Message {
    pub message_id: Uuid,
    pub message_chat_id: Uuid,
    pub message_sender_id: Uuid,
    pub message_type: MessageType,
    pub message_sent_time: NaiveDateTime,
    pub message_read: bool,
}
