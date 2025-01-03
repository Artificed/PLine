import WebSocket from "@tauri-apps/plugin-websocket";

class WebSocketClient {
  private webSocket: WebSocket | null = null;
  private url: string = "ws://127.0.0.1:8080";

  async connect() {
    if (this.webSocket) {
      console.warn("WebSocket is already connected.");
      return;
    }
    this.webSocket = await WebSocket.connect(this.url);

    this.webSocket.addListener((msg) => {
      console.log("Received Message:", msg);
    });

    console.log("WebSocket connected to", this.url);
  }

  async send(message: string) {
    if (!this.webSocket) {
      throw new Error("WebSocket is not connected.");
    }

    await this.webSocket.send(message);
  }

  async disconnect() {
    if (this.webSocket) {
      await this.webSocket.disconnect();
      console.log("WebSocket disconnected.");
      this.webSocket = null;
    }
  }
}

const webSocketClient = new WebSocketClient();
export default webSocketClient;
