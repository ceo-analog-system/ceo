
// import WebSocket from 'react-websocket'
let websocket, lockReconnect = false;
let createWebSocket = (url) => {
    websocket = new WebSocket(url);
    websocket.onopen = function () {
       heartCheck.reset().start();
    }
    websocket.onerror = function () {
        reconnect(url);
    };
    websocket.onclose = function (e) {
        console.log('websocket 断开: ' + e.code + ' ' + e.reason + ' ' + e.wasClean)
    }
    websocket.onmessage = function (event) {
        lockReconnect=true;
        //event 为服务端传输的消息，在这里可以处理
    }
}
let reconnect = (url) => {
    if (lockReconnect) return;
    //没连接上会一直重连，设置延迟避免请求过多
    setTimeout(function () {
        createWebSocket(url);
        lockReconnect = false;
    }, 4000);
}
let heartCheck = {
    timeout: 60000, //60秒
    timeoutObj: null,
    reset: function () {
        clearInterval(this.timeoutObj);
        return this;
    },
    start: function () {
        this.timeoutObj = setInterval(function () {
            //这里发送一个心跳，后端收到后，返回一个心跳消息，
            //onmessage拿到返回的心跳就说明连接正常
            websocket.send("HeartBeat");
        }, this.timeout)
    }
}
//关闭连接
let closeWebSocket=()=> {
    websocket && websocket.close();
}
export {
    websocket,
    createWebSocket,
    closeWebSocket
};




























// // import { websocket } from "./Websocket"
// import {message} from 'antd'
// class createWebSocket {

// constructor(url){

//     this.connect(url)
//     //console.log(url)
//     this.myUrl = url
//     //this.getMessage()
// }

// connect(url){//连接服务器
//     this.ws = new WebSocket(url)
//     this.ws.onopen = (e) =>{
//         this.status = 'open'
//         message.info('link succeed')
//         console.log("connection to server is opened")
//         //this.heartCheck.reset().start()
//         this.ws.send('succeed')
//         // this.heartCheck()
//     }
// }
// async getMessage (){//异步获取数据
//     this.lockReconnect = true
//     this.messageList = '';
//     await new Promise((resolve) =>{
//         this.ws.onmessage = (e) =>{
//             //console.log(e.data)
//             this.messageList = e.data
//             //console.log(this.messageList)
//             resolve()
//         }
//     })
//     console.log(this.messageList)
//     return this.messageList
// }

// heartCheck () {//心跳
//     this.pingPong = 'ping'
//     this.pingInterval = setInterval(() => {
//         if(this.ws.readyState === 1){
//             this.ws.send('ping')
//         }
//     }, 10000);
//    this.pongInterval = setInterval(()=>{
//        if(this.pingPong === 'ping'){
//            this.closeHandle('pingPong没有改为pong')
//        }
//        console.log('return the pong')
//    },20000) 
// }
// closeHandle(res){
//     if(this.status !== 'close'){
//         console.log('断开，重连websocket',res)
//         if(this.pongInterval !== undefined && this.pingInterval !== undefined){
//             clearInterval(this.pongInterval)
//             clearInterval(this.pingInterval)
//         }
//         this.connect(this.myUrl)
//     }else{
//         console.log('websocket手动关闭了，或者正在连接')
//     }
// }

// close(){//关闭连接
//     // clearInterval(this.pingInterval)
//     clearInterval(this.pongInterval)
//     this.ws.send('close')
//     this.status = 'close'
//     this.ws.onclose = e =>{
//         console.log('close')
//     }
// }
// }
// export default createWebSocket
