use uuid::Uuid;

pub struct Friend {
    pub user_id: Uuid,
    pub friend_id: Uuid,
}
