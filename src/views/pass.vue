/**
* 申报成功页面
*/
<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize:75;
  .declarSuccess{
    height: 100vh;
    text-align: center;
    margin: 15vh auto;
    position: fixed;
    left: 0;
    right: 0;
    img{
      height:73px;
      width: 61px;
    }
    p{
      margin: 20px 0;
      color: #232323;
      font-size: 16px;
    }
    .gobackGuild{
      width: 140px;
      height: 40px;
      color: #fff;
      background: #096FD4;
      line-height: 40px;
      text-align: center;
      margin: 40px auto;
      border-radius: 5px;
    }
  }
</style>
<template>
  <div class="declarSuccess">
    <img src="../assets/images/passIcon.png">
    <p>审核成功</p>
    <div class="gobackGuild" @click="goGuild">返回首页</div>
  </div>
</template>

<script>
  export default {
    data(){
      return{}

    },
    created(){
      document.getElementsByTagName('title')[0].innerHTML = '申请成功';
    },
    methods:{
      goGuild(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>
