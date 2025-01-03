use chrono::{Local, NaiveDateTime};
use std::sync::Mutex;
use tauri::State;

use crate::{
    chat_repository, chat_user_repository, message_repository, message_text_repository,
    user_repository, ChatPreview, ChatPreviewChatDTO, ChatPreviewMessageDTO, CurrentUser, User,
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

fn format_last_message_content(
    current_user: &User,
    preview_message_dto: &ChatPreviewMessageDTO,
) -> String {
    let mut message_type = preview_message_dto.message_content.clone();

    if message_type == "Text" {
        message_text_repository::get_message_text(&preview_message_dto.message_id)
    } else {
        let mut sender_name =
            user_repository::get_display_name_by_id(&preview_message_dto.message_sender_id);

        if sender_name == current_user.user_display_name {
            sender_name = String::from("You");
        }

        if message_type == "Image" {
            message_type = String::from("photo");
        } else {
            message_type = message_type.to_lowercase()
        }

        format!("{} sent a {}.", sender_name, message_type)
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

    chat_preview_chat_datas
        .into_iter()
        .map(|chat_preview_chat_data| {
            let chat_preview_message_data = message_repository::get_chat_preview_message_data(
                chat_preview_chat_data.chat_id.as_str(),
            );
            ChatPreview {
                chat_id: chat_preview_chat_data.chat_id,
                chat_name: chat_preview_chat_data.chat_name,
                chat_image: chat_preview_chat_data.chat_image,
                last_message_content: format_last_message_content(
                    &user,
                    &chat_preview_message_data,
                ),
                last_message_time: format_last_message(chat_preview_message_data.message_time),
            }
        })
        .collect()
}
