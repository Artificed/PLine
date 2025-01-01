use serde::Serialize;

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
pub struct MessageView {
    pub sender_id: String,
    pub sender_name: String,
    pub sender_image: String,
    pub message_type: String,
    pub message_content: String,
    pub message_time: String,
}
