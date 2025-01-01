use std::sync::Mutex;

pub mod controllers;
pub mod dtos;
pub mod enums;
pub mod models;
pub mod repositories;
pub mod services;
pub mod utils;
pub mod viewmodels;

pub use controllers::chat_controller;
pub use controllers::friend_controller;
pub use controllers::message_controller;
pub use controllers::user_controller;

pub use dtos::ChatPreviewChatDTO;
pub use dtos::ChatPreviewMessageDTO;

pub use enums::ChatType;

pub use models::Chat;
pub use models::ChatUser;
pub use models::CurrentUser;
pub use models::Friend;
pub use models::Message;
pub use models::User;

pub use repositories::chat_repository;
pub use repositories::chat_user_repository;
pub use repositories::friend_repository;
pub use repositories::message_file_repository;
pub use repositories::message_image_repository;
pub use repositories::message_repository;
pub use repositories::message_text_repository;
pub use repositories::message_video_repository;
pub use repositories::user_repository;

pub use services::chat_preview_service;

use services::message_view_service;
pub use tauri::Manager;
pub use utils::connect;

pub use viewmodels::ChatPreview;
pub use viewmodels::MessageView;

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
            user_controller::validate_login,
            user_controller::is_logged_in,
            chat_preview_service::get_chat_previews,
            message_view_service::get_message_views,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
