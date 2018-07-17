<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize:75;
  #canvas{
    width: 80%!important;
    height: auto!important;
  }
</style>
<template>
  <div class="subsuccess">
    <div>
      <div id="query">
        <h1>二维码：</h1>
        <div id="qrcode">二维码位置</div>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "subscribeSucess",
      data() {
        return {
          apply_no: ''
        }
      },
      created() {
        document.getElementsByTagName('title')[0].innerHTML = '预约成功';
        this.apply_no = this.$route.query.apply_no;
      },
      methods: {

      }
    }
</script>


