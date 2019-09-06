<template>
  <div id="mySocketComponent" style="line-height: 36px; color: #20A0FF" >
    <h1>websocket连接</h1>
    <input type = "text" v-model = "text">
    <button @click="send()">发送消息</button>
    <br/>
    <br/>
    <button  @click="closeWebSocket()">关闭连接</button>
    <br/>
    <div>{{data}}</div>
  </div>


</template>
<script type="text/javascript">

  function ab2str(u,e,f){
    var r = new FileReader();
    r.readAsText(u, 'utf-8');
    r.onload = function (){if(f)f.call(null,r.result)}
  }
  function packgeObj(msg){
    const json = {};
    const index = msg.indexOf('"')
    if(null!=msg && msg.length>=8){
      json.code =msg.substring(0,3)
      json.length=msg.substring(3,index)
      json.data=msg.substring(index+1,msg.length-1)
    }

    return json;
  }
  export default {
    name:"websocket",
    components:{

    },
    data(){
      return{
        text:'',
        data:'',
        websocket:null
      }
    },
    mounted() {
      if('WebSocket'in window){
        this.websocket = new WebSocket('ws://localhost:1000/websocket/room')
        this.initwebsocket()
      }else{
        alert('当前浏览器不支持websocket')
      }
    },
    beforeDestroy() {
      this.onbeforeunload()
    },
    methods:{
      initwebsocket(){
        //连接错误
        this.websocket.onerror = this.setErrorMessage
        // //连接成功
        this.websocket.onopen = this.setOnopenMessage
        //收到消息的回调
        this.websocket.onmessage = this.setOnmessageMessage
        //连接关闭的回调
        this.websocket.onclose = this.setOncloseMessage
        this.onbeforeunload = this.onbeforeunload

      },
      setErrorMessage(){
        this.data = "websocket连接发送错误"+ '   状态码：' + this.websocket.readyState;
      },  setOnopenMessage() {

        this.data = "WebSocket连接成功" + '   状态码：' + this.websocket.readyState;

      },
      setOnmessageMessage: function (event) {
        const obj = this
        ab2str(event.data,obj,function(str){
          //包装返回数据

          console.info(str)
          obj.data =packgeObj(str)
        });

        //fr.readAsBinaryString(event.data);


      },
      setOncloseMessage() {
        this.data = "WebSocket连接关闭" + '   状态码：' + this.websocket.readyState;
      },
      onbeforeunload() {
        this.closeWebSocket()
      },
//websocket发送消息
      send() {
        const json  ={}
        json.code =201;
        json.data = encodeURI(this.text)
        const buffer = string2buffer(JSON.stringify(json));
        this.websocket.send(buffer);
        //this.websocket.send(JSON.stringify(json))
      },
      closeWebSocket() {
        this.websocket.close()
      }



    }
  }
  const string2buffer =function (str) {
    // 首先将字符串转为16进制
    let val = ""
    for (let i = 0; i < str.length; i++) {
      if (val === '') {
        val = str.charCodeAt(i).toString(16)
      } else {
        val += ',' + str.charCodeAt(i).toString(16)
      }
    }
    // 将16进制转化为ArrayBuffer
    return new Uint8Array(val.match(/[\da-f]{2}/gi).map(function (h) {
      return parseInt(h, 16)
    })).buffer
  }
</script>


