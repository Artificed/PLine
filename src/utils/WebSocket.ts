import WebSocket from "@tauri-apps/plugin-websocket";

class WebSocketClient {
  private webSocket: WebSocket | null = null;

  async connect(url: string) {
    if (this.webSocket) {
      console.warn("WebSocket is already connected.");
      return;
    }
    this.webSocket = await WebSocket.connect(url);

    this.webSocket.addListener((msg) => {
      console.log("Received Message:", msg);
    });

    console.log("WebSocket connected to", url);
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
