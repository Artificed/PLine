use mysql::{params, prelude::Queryable};

use crate::connect;

pub fn get_message_video(message_id: &str) -> String {
    connect::get_conn()
        .expect("Failed to get connection!")
        .exec_first(
            "SELECT message_video from message_videos WHERE message_id = :message_id",
            params! {"message_id" => message_id},
        )
        .expect("Failed to get data!")
        .map(|row: Option<String>| row.unwrap())
        .expect("Image is empty!")
}
