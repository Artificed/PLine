use std::sync::Mutex;
use tauri::State;

use crate::{user_repository, CurrentUser};

#[tauri::command]
pub fn is_logged_in(current_user: State<'_, Mutex<CurrentUser>>) -> bool {
    user_repository::get_current_user(current_user).is_some()
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
            current_user.lock().unwrap().user = Some(user);
            true
        }
        None => false,
    }
}

#[tauri::command]
pub fn get_current_user_id(current_user: State<'_, Mutex<CurrentUser>>) -> String {
    user_repository::get_current_user(current_user)
        .expect("Failed to get current user!")
        .user_id
        .to_string()
}
