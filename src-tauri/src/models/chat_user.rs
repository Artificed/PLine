use uuid::Uuid;

pub struct ChatUser {
    pub chat_id: Uuid,
    pub user_id: Uuid,
}
