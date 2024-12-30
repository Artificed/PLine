use mysql::prelude::Queryable;

use crate::{connect, ChatPreviewChatDTO};

pub fn get_chat_preview_chat_datas() -> Vec<ChatPreviewChatDTO> {
    connect::get_conn()
        .expect("Failed to get connection!")
        .query_map(
            "SELECT chat_id, chat_name, chat_image
                    FROM chats",
            |(chat_id, chat_name, chat_image): (String, String, String)| ChatPreviewChatDTO {
                chat_id,
                chat_name,
                chat_image,
            },
        )
        .expect("Failed to get data!")
}
