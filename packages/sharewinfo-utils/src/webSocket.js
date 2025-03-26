class WebSocketUtils {
  constructor(url, callback) {
    this.socket = new WebSocket(url);
    this.checkHeartTimer = null;
    this.url = url;
    this.startCheckHeart();
    if (callback) {
      this.socket.onmessage = callback;
    }
    this.socket.onerror = () => {
      console.log('websocket is Error');
      this.restart();
    };
  }

  /**
   * 开始心跳检查
   */
  startCheckHeart() {
    this.checkHeartTimer = setInterval(() => {
      try {
        this.sendMessage('Check heart');
      } catch (e) {
        console.log(e);
      }
    }, 3000);
  }
  /**
   *
   * @param {string} message 发送的信息
   */
  sendMessage(message) {
    this.socket.send(message);
  }

  close() {
    if (this.socket) {
      this.socket.close();
    }
  }

  restart() {
    this.socket = new WebSocket(this.url);
  }
}

function callback(res) {
  console.log(res.data);
}
const socket = new WebSocketUtils('ws://localhost:57419/ws?userId=123&commandId=1', callback);
