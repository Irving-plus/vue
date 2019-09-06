<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <firstComponent></firstComponent>

    <div class="header">
      <div class="tab-item">
        <router-link to="/first">点我跳第一个页面</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/second">点我跳第二个页面</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/third">点我跳第三个页面</router-link>
      </div>
    </div>
    <router-view/>

  </div>

</template>

<script>
  import firstComponent from "./components/first"

  export default {
    name: 'App',
    components: {firstComponent},
    data() {
      return {
        msg: "hello Vue"
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
