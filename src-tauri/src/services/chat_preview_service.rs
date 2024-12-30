use chrono::{Local, NaiveDateTime};
use std::sync::Mutex;
use tauri::State;

use crate::{
    chat_repository, chat_user_repository, message_repository, user_repository, ChatPreview,
    ChatPreviewChatDTO, CurrentUser,
};

fn format_last_message(message_time: NaiveDateTime) -> String {
    let time_gap = Local::now().naive_local() - message_time;

    if time_gap.num_hours() < 24 {
        message_time.format("%I:%M %p").to_string()
    } else if time_gap.num_hours() < 48 {
        String::from("Yesterday")
    } else if time_gap.num_hours() < 168 {
        message_time.format("%A").to_string()
    } else {
        message_time.format("%b %e").to_string()
    }
}

#[tauri::command]
pub fn get_chat_previews(current_user: State<'_, Mutex<CurrentUser>>) -> Vec<ChatPreview> {
    let user = user_repository::get_current_user(current_user).expect("User is not logged in!");

    let user_chat_ids = chat_user_repository::get_current_user_chat_ids(&user);

    let chat_preview_chat_datas: Vec<ChatPreviewChatDTO> =
        chat_repository::get_chat_preview_chat_datas()
            .into_iter()
            .filter(|chat_preview_dto| user_chat_ids.contains(&chat_preview_dto.chat_id))
            .collect();

    println!("{}", chat_preview_chat_datas.len());

    chat_preview_chat_datas
        .into_iter()
        .map(|chat_preview_chat_data| {
            let chat_preview_message_data = message_repository::get_chat_preview_message_data(
                chat_preview_chat_data.chat_id.as_str(),
            );
            ChatPreview {
                chat_name: chat_preview_chat_data.chat_name,
                chat_image: chat_preview_chat_data.chat_image,
                last_message_content: chat_preview_message_data.message_content,
                last_message_time: format_last_message(chat_preview_message_data.message_time),
            }
        })
        .collect()
}
