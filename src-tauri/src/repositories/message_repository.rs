use chrono::NaiveDateTime;
use mysql::{params, prelude::Queryable};
use uuid::Uuid;

use crate::{connect, enums::MessageType, ChatPreviewMessageDTO, Message};

pub fn get_chat_preview_message_data(chat_id: &str) -> ChatPreviewMessageDTO {
    connect::get_conn()
        .expect("Failed to get connection!")
        .exec_map(
            "SELECT message_id, message_sender_id, message_type, CAST(message_sent_time AS CHAR)
                FROM messages
                WHERE message_chat_id = :chat_id
                ORDER BY message_sent_time DESC
                LIMIT 1",
            params! {"chat_id" => chat_id},
            |(message_id, message_sender_id, message_type, message_sent_time): (
                String,
                String,
                String,
                String,
            )| {
                ChatPreviewMessageDTO {
                    message_id,
                    message_sender_id,
                    message_content: message_type.to_string(),
                    message_time: NaiveDateTime::parse_from_str(
                        message_sent_time.as_str(),
                        "%Y-%m-%d %H:%M:%S",
                    )
                    .expect("Failed to parse message time!"),
                }
            },
        )
        .expect("Failed to get data!")
        .into_iter()
        .next()
        .expect("First index is empty!")
}

pub fn get_chat_messages(chat_id: &str) -> Vec<Message> {
    connect::get_conn()
        .expect("Failed to get connection!")
        .exec_map(
            "SELECT message_id, message_chat_id, message_sender_id, message_type, CAST(message_sent_time AS CHAR), message_read
                FROM messages
                WHERE message_chat_id = :chat_id
                ORDER BY message_sent_time ASC",
            params! {"chat_id" => chat_id},
            |(message_id, message_chat_id, message_sender_id, message_type, message_sent_time, message_read): (
                String,
                String,
                String,
                String,
                String,
                i32
            )| {
                Message {
                    message_id: Uuid::parse_str(&message_id).expect("Failed to parse Uuid!"),
                    message_chat_id: Uuid::parse_str(&message_chat_id).expect("Failed to parse Uuid!"),
                    message_sender_id: Uuid::parse_str(&message_sender_id).expect("Failed to parse Uuid!"),
                    message_type: MessageType::parse_str(&message_type).expect("Invalid Message Type!"),
                    message_sent_time: NaiveDateTime::parse_from_str(
                        message_sent_time.as_str(),
                        "%Y-%m-%d %H:%M:%S",
                    )
                    .expect("Failed to parse message time!"),
                    message_read: message_read == 1,
                }
            },
        )
        .expect("Failed to get data!")
}
