use anyhow::Result;
use futures_util::{SinkExt, StreamExt};
use tokio::net::{TcpListener, TcpStream};
use tokio_tungstenite::accept_async;
use tokio_tungstenite::tungstenite::protocol::Message;

async fn handle_connection(stream: TcpStream) -> Result<()> {
    let mut ws_stream = accept_async(stream).await?;

    while let Some(message) = ws_stream.next().await {
        let message = message?;
        if message.is_text() {
            let received_message = message.to_text()?;
            ws_stream
                .send(Message::Text(received_message.to_string()))
                .await?;
        }
    }

    Ok(())
}

#[tokio::main]
async fn main() {
    let listener = TcpListener::bind("127.0.0.1:8080")
        .await
        .expect("Failed to bind to server port!");

    while let Ok((stream, _)) = listener.accept().await {
        tokio::spawn(handle_connection(stream));
    }
}
