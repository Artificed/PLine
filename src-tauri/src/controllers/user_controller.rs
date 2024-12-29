use std::sync::Mutex;
use tauri::State;

use crate::{user_repository, CurrentUser};

#[tauri::command]
pub fn is_logged_in(current_user: State<'_, Mutex<CurrentUser>>) -> bool {
    current_user.lock().unwrap().user.is_some()
}

#[tauri::command]
pub fn validate_login(
    current_user: State<'_, Mutex<CurrentUser>>,
    user_email: String,
    user_password: String,
) -> bool {
    let user = user_repository::get_users()
        .unwrap_or_default()
        .into_iter()
        .find(|user| user.user_email == user_email && user.user_password == user_password);

    match user {
        Some(user) => {
            println!("Logged in!");
            current_user.lock().unwrap().user = Some(user);
            true
        }
        None => false,
    }
}
