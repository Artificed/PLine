use chrono::NaiveDate;
use uuid::Uuid;

#[derive(Clone)]
pub struct User {
    pub user_id: Uuid,
    pub user_line_id: String,
    pub user_password: String,
    pub user_display_name: String,
    pub user_status_message: String,
    pub user_profile_picture: String,
    pub user_email: String,
    pub user_birthday: NaiveDate,
}

pub struct CurrentUser {
    pub user: Option<User>,
}
