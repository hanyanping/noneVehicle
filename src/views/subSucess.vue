<style rel="stylesheet/scss" lang="scss" scoped>
$baseFontSize:75;
.subsuccess {
  background: #f4f4f4;
  height: 100vh;
  width: 100%;
  .showCode{
    background: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    padding-top: 40px;
    padding-bottom:40px;
    #query{
      width: 100%;
      #qrcode{
        margin: 0 auto;
        width: 180px;
        height: 180px;
        padding-bottom: 20px;
      }
    }
    .showText{
      color: #6D6D6D;
      font-size: 15px;
      padding: 20px 20px 5px;
      line-height: 24px;
    }
    .showText1{
      color: #2985DE;
      border-top: 1px solid #f4f4f4;
    }
  }
}
</style>
<template>
  <div class="subsuccess">
    <div style="padding: 40px 20px;">
      <div class="showCode">
        <div id="query">
          <div id="qrcode"></div>
        </div>
        <p class="showText showText1">预约成功</p>
        <p class="showText">需车主本人或代理人携带车主及代理人身份证明原件，按照预约时间到预约发放点出示二维码信息现场领取标识，未按照预约时间领取标识的，需重新进行预约</p>
      </div>
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
    this.user_id = localStorage.getItem('userId')
    // this.getCode()
  },
  mounted() {
    this.getCode()
  },
  methods: {
    getCode() {
      var qrcode = new QRCode("qrcode", {
       text: "https://mock.zhongchebaolian.com/vehicle/showResult?apply_no="+this.apply_no+"&user_id="+this.user_id,
//         text: "http://192.168.0.114:8081/vehicle/showResult?apply_no="+this.apply_no+"&user_id="+this.user_id,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  }
}
</script>


