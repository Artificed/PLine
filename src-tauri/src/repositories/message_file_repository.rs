use mysql::{params, prelude::Queryable};

use crate::connect;

pub fn get_message_file(message_id: &str) -> String {
    connect::get_conn()
        .expect("Failed to get connection!")
        .exec_first(
            "SELECT message_file from message_files WHERE message_id = :message_id",
            params! {"message_id" => message_id},
        )
        .expect("Failed to get data!")
        .map(|row: Option<String>| row.unwrap())
        .expect("File is empty!")
}
