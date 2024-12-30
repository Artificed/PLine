use chrono::NaiveDateTime;
use mysql::{params, prelude::Queryable};

use crate::{connect, ChatPreviewMessageDTO};

pub fn get_chat_preview_message_data(chat_id: &str) -> ChatPreviewMessageDTO {
    connect::get_conn()
        .expect("Failed to get connection!")
        .exec_map(
            "SELECT message_type, CAST(message_sent_time AS CHAR)
                FROM messages
                WHERE message_chat_id = :chat_id
                ORDER BY message_sent_time DESC
                LIMIT 1",
            params! {"chat_id" => chat_id},
            |(message_type, message_sent_time): (String, String)| ChatPreviewMessageDTO {
                message_content: message_type.to_string(),
                message_time: NaiveDateTime::parse_from_str(
                    message_sent_time.as_str(),
                    "%Y-%m-%d %H:%M:%S",
                )
                .expect("Failed to parse message time!"),
            },
        )
        .expect("Failed to get data!")
        .into_iter()
        .next()
        .expect("First index is empty!")
}
