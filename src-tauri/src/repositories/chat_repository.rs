// use std::sync::Mutex;
//
// use mysql::prelude::Queryable;
// use tauri::State;
//
// use crate::{connect, Chat, CurrentUser};
//
// pub fn get_chat_preview_chat_data(current_user: State<'_, Mutex<CurrentUser>>) -> Vec<Chat> {
//     connect::get_conn()
//         .expect("Failed to get connection!")
//         .query_map("SELECT chat_id, chat_name, chat_image
//                     FROM ", f)
// }
