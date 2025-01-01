use std::{str::FromStr, sync::Mutex};

use chrono::NaiveDate;
use mysql::{params, prelude::Queryable, Error, Result};
use tauri::State;
use uuid::Uuid;

use crate::{connect, dtos::MessageViewSenderDTO, CurrentUser, User};

pub fn get_users() -> Result<Vec<User>, Error> {
    connect::get_conn()
        .expect("Failed to get connection!")
        .query_map(
            "SELECT * FROM users;",
            |(
                user_id,
                user_line_id,
                user_password,
                user_display_name,
                user_status_message,
                user_email,
                user_birthday,
                user_profile_picture,
            ): (
                String,
                String,
                String,
                String,
                String,
                String,
                String,
                String,
            )| User {
                user_id: Uuid::parse_str(user_id.as_str()).expect("Failed to parse string!"),
                user_line_id,
                user_password,
                user_display_name,
                user_status_message,
                user_email,
                user_birthday: NaiveDate::from_str(user_birthday.as_str())
                    .expect("Failed to parse string!"),
                user_profile_picture,
            },
        )
}

pub fn get_display_name_by_id(user_id: &str) -> String {
    connect::get_conn()
        .expect("Failed to get connection!")
        .exec_first(
            "SELECT user_display_name FROM users WHERE user_id = :id",
            params! {"id" => user_id},
        )
        .expect("Failed to get data!")
        .map(|row: Option<String>| row.unwrap())
        .expect("Name is empty!")
}

pub fn get_current_user(current_user: State<'_, Mutex<CurrentUser>>) -> Option<User> {
    current_user.lock().unwrap().user.clone()
}

pub fn get_message_view_sender_data(sender_id: &str) -> MessageViewSenderDTO {
    connect::get_conn()
        .expect("Failed to get connection!")
        .exec_first(
            "SELECT user_id, user_display_name, user_profile_picture
            FROM users
            WHERE user_id = :id",
            params! {"id" => sender_id},
        )
        .expect("Failed to get data!")
        .map(|row: (String, String, String)| MessageViewSenderDTO {
            sender_id: row.0,
            sender_name: row.1,
            sender_image: row.2,
        })
        .expect("Failed to map data!")
}
