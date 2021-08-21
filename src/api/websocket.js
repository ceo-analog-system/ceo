 export default class socketConnect {

    constructor(url, msgCallback,key) {
        this.url = url + key;
        this.msgCallback = msgCallback;
        this.ws = null;  // websocket对象
        this.status = null; // websocket是否关闭
        this.init();
    }
    init(){
        //判断当前浏览器支持不支持WebSocket
        if ('WebSocket' in window) {
            this.socket = new WebSocket(this.url);
        } else {
            // alertTip("该浏览器不支持WebSocket，请切换浏览器或升级后再试");
            return;
        }
        this.connect(); 
    }
    connect(data) {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = e => {
            // 连接ws成功回调
            this.status = 'open';
            console.log(`${this.key}连接成功`, e)
            // this.heartCheck();
            if (data !== undefined) {
                // 有要传的数据,就发给后端
                return this.ws.send(data);
            }
        }
        // 监听服务器端返回的信息
        this.ws.onmessage = e => {
            return this.msgCallback(e.data);
        }
        // ws关闭回调
        this.ws.onclose = e => {
            this.closeHandle(e); // 判断是否关闭
        }
        // ws出错回调
        this.onerror = e => {
            this.closeHandle(e); // 判断是否关闭
        }
    }
    // 发送信息给服务器
    sendHandle(data) {
        console.log(`${this.name}发送消息给服务器:`, data)
        return this.ws.send(data);
    }
    closeHandle(e = 'err') {
        // 因为webSocket并不稳定，规定只能手动关闭(调closeMyself方法)，否则就重连
        if (this.status !== 'close') {
            console.log(`${this.key}断开，重连websocket`, e)
            this.connect(); // 重连
        } else {
            console.log(`${this.key}websocket手动关闭`)
        }
    }
    // 手动关闭WebSocket
    closeMyself() {
        console.log(`关闭${this.key}`)
        this.status = 'close';
        return this.ws.close();
    }
}

