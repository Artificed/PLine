// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

pub mod controllers;
pub mod enums;
pub mod models;
pub mod repositories;
pub mod utils;

use std::sync::Mutex;

pub use controllers::chat_controller;
pub use controllers::friend_controller;
pub use controllers::message_controller;
pub use controllers::user_controller;

pub use enums::ChatType;

pub use models::Chat;
pub use models::CurrentUser;
pub use models::Friend;
pub use models::Message;
pub use models::User;

pub use repositories::chat_repository;
pub use repositories::friend_repository;
pub use repositories::message_repository;
pub use repositories::user_repository;

pub use tauri::Manager;
pub use utils::connect;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            app.manage(Mutex::new(CurrentUser { user: None }));
            Ok(())
        })
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![
            greet,
            user_controller::validate_login,
            user_controller::is_logged_in,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
