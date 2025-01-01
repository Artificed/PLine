use crate::{
    enums::MessageType, message_file_repository, message_image_repository, message_repository,
    message_text_repository, message_video_repository, user_repository, MessageView,
};

fn get_message_content(message_id: &str, message_type: &MessageType) -> String {
    match message_type {
        MessageType::Text => message_text_repository::get_message_text(message_id),
        MessageType::Image => message_image_repository::get_message_image(message_id),
        MessageType::Video => message_video_repository::get_message_video(message_id),
        MessageType::File => message_file_repository::get_message_file(message_id),
    }
}

#[tauri::command]
pub fn get_message_views(chat_id: String) -> Vec<MessageView> {
    let chat_messages = message_repository::get_chat_messages(&chat_id);

    chat_messages
        .into_iter()
        .map(|chat_message| {
            let message_sender = user_repository::get_message_view_sender_data(
                &chat_message.message_sender_id.to_string(),
            );

            MessageView {
                sender_id: chat_message.message_sender_id.to_string(),
                sender_name: message_sender.sender_name,
                sender_image: message_sender.sender_image,
                message_type: chat_message.message_type.to_string(),
                message_content: get_message_content(
                    &chat_message.message_id.to_string(),
                    &chat_message.message_type,
                ),
                message_time: chat_message
                    .message_sent_time
                    .format("%Y-%m-%dT%H:%M:%S")
                    .to_string(),
            }
        })
        .collect()
}
