<template>
  <div id = "firstComponent">
      <h1>this is my first component</h1>
      <a> written by {{author}}</a>
  </div>
</template>
<script type="text/javascript">

 export default{
    data: function () {
      return {
        author: "周希来"
      }
    }
  }

</script>
