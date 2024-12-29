use uuid::Uuid;

use crate::enums::ChatType;

pub struct Chat {
    pub chat_id: Uuid,
    pub chat_name: String,
    pub chat_type: ChatType,
    pub chat_image: String,
}
