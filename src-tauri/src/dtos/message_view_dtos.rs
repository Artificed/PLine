#[derive(mysql::prelude::FromRow)]
pub struct MessageViewSenderDTO {
    pub sender_id: String,
    pub sender_name: String,
    pub sender_image: String,
}
