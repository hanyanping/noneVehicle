<style rel="stylesheet/scss" lang="scss" scoped>
$baseFontSize:75;
#canvas {
  width: 80%!important;
  height: auto!important;
}
</style>
<template>
  <div class="subsuccess">
    <div>
      <div id="query">
        <h1>二维码：</h1>
        <div id="qrcode"></div>
      </div>
      <p></p>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
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
    // this.getCode()
  },
  mounted() {
    this.getCode()
  },
  methods: {
    getCode() {
      var qrcode = new QRCode("qrcode", {
        text: "34344434434",
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  }
}
</script>


