use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ChatPreview {
    pub chat_id: String,
    pub chat_name: String,
    pub chat_image: String,
    pub last_message_content: String,
    pub last_message_time: String,
}
