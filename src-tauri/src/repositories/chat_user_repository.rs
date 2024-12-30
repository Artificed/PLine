use mysql::{params, prelude::Queryable};

use crate::{connect, User};

pub fn get_current_user_chat_ids(user: &User) -> Vec<String> {
    connect::get_conn()
        .expect("Failed to get connection!")
        .exec_map(
            "SELECT chat_id FROM chat_users WHERE user_id = :user_id",
            params! {"user_id" => user.user_id.to_string()},
            |user_id: String| user_id,
        )
        .expect("Failed to get data!")
}
