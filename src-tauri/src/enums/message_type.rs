use core::fmt;

pub enum MessageType {
    Text,
    Image,
    Video,
    File,
}

impl MessageType {
    pub fn parse_str(message_type: &str) -> Option<MessageType> {
        match message_type {
            "Text" => Some(MessageType::Text),
            "Image" => Some(MessageType::Image),
            "Video" => Some(MessageType::Video),
            "File" => Some(MessageType::File),
            _ => None,
        }
    }
}

impl fmt::Display for MessageType {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match self {
            MessageType::Text => write!(f, "Text"),
            MessageType::Image => write!(f, "Image"),
            MessageType::Video => write!(f, "Video"),
            MessageType::File => write!(f, "File"),
        }
    }
}
