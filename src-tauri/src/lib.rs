// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/

pub mod controllers;
pub mod enums;
pub mod models;
pub mod utils;

pub use controllers::auth_controller;
pub use controllers::chat_controller;
pub use controllers::friend_controller;
pub use controllers::message_controller;
pub use controllers::user_controller;

pub use enums::ChatType;

pub use models::Chat;
pub use models::Friend;
pub use models::Message;
pub use models::User;

pub use utils::connect;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
