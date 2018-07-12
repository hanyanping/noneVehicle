<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize:75;
  .banner{
    width: 100%;
    height: 443rem/$baseFontSize;
    .guildBanner{
      height: 100%;
      width: 100%;
    }
  }
  .jumpBox{
    margin-top: 10px;
    padding: 16px;
    line-height: 28px;
    height: 30px;
    color: #3d3d3d;
    font-size: 30rem/$baseFontSize;
    .clear{
      background: #fff;
      padding: 26px;
      margin-bottom: 16px;
      border: 1px solid #fff;
      border-radius: 10px;
      box-shadow:0px 0px 15px 6px rgba(209,209,209,0.25);
      .orderIcon{
        height:35px;
        width: 35px;
        display: inline-block;
        vertical-align: middle;
        margin-right: 10px;
      }
      .goOrder{
        height: 14px;
        width: 18px;
        display: inline-block;
        vertical-align: middle;
      }
    }

  }

</style>
<template>
  <div style="height: 100vh;background: #f4f4f4;">
    <div class="banner">
      <img class='guildBanner' src="../assets/images/banner.png">
    </div>
    <div id="qrcode"></div>
    <div class="jumpBox">
      <div class="clear" @click="goPerson">
        <img class="orderIcon" src="../assets/images/geren.png">
        <span>个人申报</span>
        <div class=" fr" >
          <img class="goOrder" src="../assets/images/jiantou.png">
        </div>
      </div>
      <div class="clear" @click="goDanwei">
        <img class="orderIcon" src="../assets/images/geren.png">
        <span>单位预录入</span>
        <div class=" fr" >
          <img class="goOrder" src="../assets/images/jiantou.png">
        </div>
      </div>
      <div class="clear" @click="goHistory">
        <img class="orderIcon" src="../assets/images/geren.png">
        <span>历史申请记录</span>
        <div class=" fr" >
          <img class="goOrder" src="../assets/images/jiantou.png">
        </div>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "guild",
      data(){
          return{

          }
      },
      created() {
          document.getElementsByTagName('title')[0].innerHTML = '过渡期电动自行车';
      },
      methods:{
        goPerson() {
          this.$router.push({'path':'/personalDeclaration'})
        },
        goDanwei() {
          this.$router.push({'path':'/companyDeclar'})
        },
        goHistory() {
          this.$router.push({'path':'/historyList'})
        }
      }
      // new QRCode(document.getElementById("qrcode"),"https://www.baidu.com/")
    }
</script>


