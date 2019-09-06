<template>
  <div id="roteComponent">
    <h1>这是一个页面</h1>
    <p>感谢<a href="https://github.com/showonne">{{author}}</a>
      大佬的指导
    </p>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h2 style="line-height: 36px; color: #20A0FF">这个样式有点怪</h2>
      </div>
      <div v-for="item in list" class="text item">
        {{item.title}}
      </div>
    </el-card>

  </div>


</template>
<script type="text/javascript">

  export default {
    data() {
      return {
        author: "周希来",
        list: [{title: "教父1"},
          {title: "这个手刹不太灵"},
          {title: "阿飞正传"},
          {title: "小黄人"},
          {title: "女巨人"},
          {title: "人类金华"}
        ]
      }
    },
    mounted() {
      this.$http.jsonp(
        'https://www.1905.com/coll/hotsearch2014.js?t=201908261653&callback=hotsearch2014', {}, {
          headers: {},
          emulateJSON: true
        }).then(function (response) {
        // 这里是处理正确的回调
        //alert(JSON.stringify(response))
        getSocket();
        // this.articles = response.data["subjects"] 也可以

      }, function (response) {
        // 这里是处理错误的回调
        //alert(JSON.stringify(response))
        getSocket();
        console.log(JSON.stringify(response))
      });}}
</script>
