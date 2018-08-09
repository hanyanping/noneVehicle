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
.imgcode{
      margin: 0 auto;
    width: 180px;
    height: 180px;
    padding-bottom: 20px;
}
.gosubscribe{
  margin: 20px auto;
  background:#4399E8;
  color: #fff;
  height: 40px;
  line-height: 40px;
  text-align: center;
  width: 100px;
  border-radius: 6px;
}
</style>
<template>
  <div class="subsuccess">
    <div style="padding: 40px 20px;" v-if='isOverdue'>
      <div class="showCode">
        <div id="query">
          <div id="qrcode"></div>
        </div>
        <p class="showText showText1">预约成功</p>
        <p class="showText">需车主本人或代理人携带车主及代理人身份证明原件，按照预约时间到预约发放点出示二维码信息现场领取标识，未按照预约时间领取标识的，需重新进行预约</p>
      </div>
    </div>
     <div style="padding: 40px 20px;" v-else>
      <div class="showCode">
        <div class="imgcode">
          <img src='../assets/images/code.png'>
        </div>
        <p class="showText">您的预约办理信息已经过期，请您重新预约！</p>
        <div class='gosubscribe' @click='gosubscribe'>重新预约</div>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcodejs2';
import moment from 'moment/moment';
export default {
  name: "subscribeSucess",
  data() {
    return {
      apply_no: '',
      isOverdue: true,
      phone: '',
      user_id: ''
    }
  },
  created() {
    document.getElementsByTagName('title')[0].innerHTML = '预约二维码';
    this.apply_no = this.$route.query.apply_no;
    this.user_id = localStorage.getItem('userId');
    this.phone = localStorage.getItem('phone');
    var time = localStorage.getItem('appointmentTime');
    time = time.replace(/年|月/g, '-').replace(/日/g, '');
    time  = parseInt(Number(new Date(time)));
    console.log(time)
    var subyear = this.gettime(time,'year');
    var submonth = this.gettime(time,'month');
    var subday = this.gettime(time,'day')
    var newDay = new Date();
    newDay = Number(newDay);
    var year = this.gettime(newDay,'year');
    var month = this.gettime(newDay,'month');
    var day = this.gettime(newDay,'day');
    console.log(subyear,submonth,subday,year,month,day)
   var substing = parseInt(Number(new Date(subyear+'-'+submonth+'-'+subday)));
   
   var currentstring = parseInt(Number(new Date(year+'-'+month+'-'+day)));
   if(currentstring>substing){
     this.isOverdue = false;
   }else{
     this.isOverdue = true;
   }

  },  
  mounted() {
    var code = this.$route.query.code;
    if(this.isOverdue){
      this.getCode(code)
    }
  },
  methods: {
    gettime(time,type){
      time = new Date(time)
      if(type == 'year'){
        return time.getFullYear();
      }else if(type == 'month'){
        return time.getMonth()+1;
      }else if(type== 'day'){
        return time.getDate();
      }
    },
    getCode(code) {
      var linkurl = ''
      if(code == 0){
        linkurl = "https://mock.zhongchebaolian.com/vehicle/showResult?apply_no="+this.apply_no+"&user_id="+this.user_id//审核页面
      }else if(code == 1){
        linkurl = "https://mock.zhongchebaolian.com/vehicle/onlineverify?apply_no="+this.apply_no+"&user_id="+this.user_id+'&phone='+this.phone//审核页面
      }
      var qrcode = new QRCode("qrcode", {
       text: linkurl,
       //  text: "http://10.2.8.59:8081/vehicle/showResult?apply_no="+this.apply_no+"&user_id="+this.user_id,
        width: 180,
        height: 180,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    },
    gosubscribe(){
      if(code == 1){
          this.$router.push({path:'/personsubscribe'})
      }else if(code == 0){
        this.$router.push({path:'/subscribe'})
      }
    }
  }
}
</script>


