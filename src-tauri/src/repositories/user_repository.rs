use std::str::FromStr;

use chrono::NaiveDate;
use mysql::{prelude::Queryable, Error, Result};
use uuid::Uuid;

use crate::{connect, User};

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
