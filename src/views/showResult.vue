
<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize:75;
  .text{
    font-size: 28rem/$baseFontSize;
  }



  .textBox{
    color: #666;
    padding: 15px;
    height: 20px;
    line-height: 20px;
    .text{
      padding-left: 6px;
      font-size: 16px;
    }
  }
  .inputText{
    color: #f00;
    vertical-align: middle;
  }
  .inputBox{
    padding: 15px;
    background: #fff;
    .selctOwn{
        .yuanImg{
            display: inline-block;
            vertical-align: middle;
            height: 25px;
            width: 25px;
        }
        .yuanText{
            display: inline-block;
            vertical-align: middle;
            font-size: 15px;
            color: #232323;
            padding-left: 6px;
        }
    }
    .textDetail{
      color: #232323;
      font-size: 14px;
      display: inline-block;
      width: 110px;
    }
    .textInput{
      padding-left: 10px;
      font-size: 14px;
      color: #232323;
      font-family: Microsoft Yahei;
    }
    .selectText{
      font-size: 14px;
      color: #bbb;
      padding-right: 16px;
      font-family: Microsoft Yahei;
      text-align: right;
    }
    .tanInput{
      padding-right: 16px;
    }
    .selectImg{
      height: 8px;
      width: 12px;
      position: absolute;
      right: 12px;
      top: 18px;
    }
    .tanhaoImg{
      height: 19px;
      width: 19px;
      position: absolute;
      right: 9px;
      top: 16px;
    }
  }
  .selectBox{
     position: relative;
  }

  .flexBetween{
    padding: 10px 10px 64px;
    background: #fff;
    .phoneText{
      position: absolute;
      top: 105px;
      padding-bottom: 6px;
      width: 100%;
      text-align: center;
      .text{
        font-size: 14px;
        color: #232323;
      }
    }
  }
      .upload {
        position: relative;
        width: 30%;
        height:100px;
        background: #fff;
    // 图片展示
    .cha {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100px;
      border-radius: 6px;
      /*overflow: hidden;*/
      box-sizing: border-box;
      .layer {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100px;
        background-color: rgba(0, 0, 0, 0.3);
        text-align: center;
        line-height: 100px;
        opacity: 0;
        color: #ffffff;
        border: none;
      }
      .del {
        position: absolute;
        bottom: 0;
        right: 0;
        opacity: 0;
        z-index: 2;
        border: none;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
        object-fit:cover;
      }
    }
    //鼠标放上时显示删除和放大
    .cha:hover .layer,
    .cha:hover .del {
      opacity: 1;
    }
    .load {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100px;
      .loadImg{
        height: 100%;
        width: 100%;
        object-fit:cover;
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
    .load::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%);
      width: 1px;
      height: 80%;
    }
    .load:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 1px;
    }
  }
  .codeInput{
    background: #fff;
    width: 100%;
    height: 40px;
    padding-left: 16px;
    font-size: 15px;
    input{
      border: 1px solid #f4f4f4;
      padding: 16px;
      width: 80%;
      border-radius:6px;
    }
    .selectText {
      float: left;
      font-size: 15px;
      padding: 16px;
      color: #bbb;
      font-family: Microsoft Yahei;
      /*text-align: right;*/
    }
  }
  .submitBox{
    background: #fff;
    padding: 30px;
    text-align: center;
    .submit{
      display: inline-block;
      height:40px;
      width: 120px;
      line-height: 40px;
      border-radius: 10px;
      background: #26a2ff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
    }
  }
  .zhegaicengone{
      background: rgba(0, 0, 0, 0.4);
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      .lodingimg{
          position: absolute;
          height: 60px;
          width: 60px;
          left: 0;
          right: 0;
          margin: 30vh auto;
      }
  }
</style>
<template>
  <div style="background: #f4f4f4;min-height: 100vh;">
    <div v-if='applyType == 2'>
      <div class="textBox">
        <span class="line">|</span>
        <span class="text">填写基本信息</span>
      </div>
       <div class="inputBox clear">
        <span class="textDetail">所有权</span>
        <span class="textInput">单位</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">所有人</span>
        <span class="textInput">{{department.name}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">证件名称:</span>
        <span class="textInput">{{department.cre_name}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">证件号码:</span>
        <span class="textInput">{{department.cre_code}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">单位地址所在省:</span>
       <span class="textInput">{{department.live_area}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">单位地址:</span>
        <span class="textInput">{{department.live_address}}</span>
      </div>
       <div class="inputBox clear">
        <span class="textDetail">单位联系电话:</span>
        <span class="textInput">{{department.live_phone}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">经办人姓名:</span>
        <span class="textInput">{{department.proxy_name}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">经办人证件名称:</span>
        <span class="textInput">{{department.proxy_cre_name}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">经办人联系地址所在区:</span>
        <span class="textInput">{{department.proxy_area}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">经办人联系地址:</span>
        <span class="textInput">{{department.proxy_address}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">经办人联系电话:</span>
        <span class="textInput">{{department.proxy_phone}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">品牌型号:</span>
        <span class="textInput">{{department.brand_model}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">车身颜色:</span>
        <span class="textInput">{{department.color}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">车辆识别代码：</span>
        <span class="textInput">{{department.pin}}</span>
      </div>
      <div class="textBox">
        <span class="line">|</span>
        <span class="text">照片信息</span>
      </div>
      <div class="flexBetween" id="scaleImg1">
        <div class="upload" v-for="(item,index) in imgDataOne" :key='(item,index)'>
          <div class="cha" v-show="(item.imgUrl)">
            <img :src="item.imgUrl" :data-src="item.bigUrl">
          </div>
          <div class="phoneText">
           <span class="text">{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if='applyType == 1'>
      <div class="textBox">
        <span class="line">|</span>
        <span class="text">填写基本信息</span>
      </div>
       <div class="inputBox clear">
        <span class="textDetail">所有权</span>
        <span class="textInput">个人</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">所有人</span>
        <span class="textInput">{{person.name}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">证件名称:</span>
        <span class="textInput">{{person.cre_name}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">证件号码:</span>
        <span class="textInput">{{person.cre_code}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">住所地址所在区:</span>
        <span class="textInput">{{person.card_address}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">住所地址:</span>
        <span class="textInput">{{person.card_detail_address}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">联系地址所在区:</span>
        <span class="textInput">{{person.link_area}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">联系地址:</span>
        <span class="textInput">{{person.card_detail_address}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">联系电话:</span>
        <span class="textInput">{{person.link_phone}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">品牌型号:</span>
        <span class="textInput">{{person.brand_model}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">车身颜色:</span>
        <span class="textInput">{{person.color}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">车辆识别代码：</span>
        <span class="textInput">{{person.pin}}</span>
      </div>
      <div class="textBox">
        <span class="line">|</span>
        <span class="text">照片信息</span>
      </div>
      <div class="flexBetween" id="scaleImg">
        <div class="upload" v-for="(item,index) in imgData" :key='(item,index)'>
          <div class="cha" v-show="(item.imgUrl)">
            <img :src="item.imgUrl" :data-src="item.bigUrl">
          </div>
          <div class="phoneText">
           <span class="text">{{item.title}}</span>
          </div>
        </div>
      </div>

    </div>
    <div class="textBox">
        <span class="line">|</span>
        <span class="text">预约信息</span>
    </div>
    <div>
       <div class="inputBox clear">
        <span class="textDetail">预约办理地点：</span>
        <span class="textInput">{{appointment.address}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">预约办理时间：</span>
        <span class="textInput">{{appointment.time}}</span>
      </div>
    </div>
     <div class="textBox">
        <span class="line">|</span>
        <span class="text">领取人信息</span>
    </div>
    <div>
      <div v-if="applyType == 1">
        <div class="inputBox flexAround" >
          <div class='selctOwn'>
            <img  class='yuanImg' @click='select' v-if='isSelect' src='../assets/images/selectyuan.png'>
            <img class='yuanImg' @click='select' v-if='!isSelect' src='../assets/images/yuan.png'>
            <span class='yuanText'>本人领取</span></div>
          <div class='selctOwn'>
            <img class='yuanImg' @click='selectOne' v-if='isSelectOne' src='../assets/images/selectyuan.png'>
            <img class='yuanImg' @click='selectOne' v-if='!isSelectOne' src='../assets/images/yuan.png'>
            <span class='yuanText'>他人领取</span>
          </div>
        </div>
        <div style='background: #fff;width:100%;text-align: center;padding: 10px;' v-if='isSelectOne'>
          <div class="upload" style='left:35%;margin-bottom:10px;'>
            <!-- 图片上传控件 -->
            <div class="load">
              <img class="loadImg" :src="imgUrl ? imgUrl : img" style='width:104px;height:104px;' @click="getPhone()">
              <!--<input type="file"  v-if='isAndroid' capture="camera" @change="uploadIMG($event)">-->
              <!--<input type="file"  v-if='!isAndroid'  @change="uploadIMG($event)">-->
            </div>
          </div>
          <div class="phoneText" >
            <span class="text">代领人个人照片</span>
          </div>
        </div>
      </div>
      <div v-if="applyType == 2">
        <div style='background: #fff;width:100%;text-align: center;padding: 10px;'>
          <div class="upload" style='left:35%;margin-bottom:10px;'>
            <!-- 图片展示 -->
            <!--<div class="cha" v-show="imgUrl">-->
              <!--<img :src="imgUrl">-->
            <!--</div>-->
            <!-- 图片上传控件 -->
            <div class="load" >
              <img class="loadImg" :src="imgUrl ? imgUrl : img" style='width:104px;height:104px;' @click="getPhone()">
              <!--<input type="file"  v-if='isAndroid' capture="camera" @change="uploadIMG($event)">-->
              <!--<input type="file"  v-if='!isAndroid'  @change="uploadIMG($event)">-->
            </div>
          </div>
          <div class="phoneText" >
            <span class="text">单位及经办人身份证明照片</span>
          </div>
        </div>
      </div>
        <div class="textBox">
          <span class="line">|</span>
          <span class="text">现场审核结果</span>
        </div>
        <div class="inputBox flexAround">
            <div class='selctOwn'>
                <img  class='yuanImg' @click='pass' v-if='ispass' src='../assets/images/selectyuan.png'>
                <img class='yuanImg' @click='pass' v-if='!ispass' src='../assets/images/yuan.png'>
                <span class='yuanText'>审核通过</span>
            </div>
            <div class='selctOwn'>
                <img class='yuanImg' @click='nopass' v-if='ispassone' src='../assets/images/selectyuan.png'>
                <img class='yuanImg' @click='nopass' v-if='!ispassone' src='../assets/images/yuan.png'>
                <span class='yuanText'>审核不通过</span>
            </div>
        </div>
        <div class='codeInput' v-if='ispass'>
          <input type='text' placeholder="请输入临时编号" v-model='apply_car_no'/>
        </div>
      <div class='codeInput'>
        <select   v-if='ispassone' v-model='approve_result' class="fr selectText selectText1">
          <option value="" style="color: #bbb;">请选择不通过理由</option>
          <option v-for="item in result" :value="item.label" :key='(item)'>{{item.label}}</option>
        </select>
      </div>
      <div class="submitBox">
        <span class="submit" @click="surePass">确定</span></div>
    </div>
      <div class="zhegaicengone zhegaiceng" v-if="isShowthree">
          <img class='lodingimg' src="../assets/images/loadingpop.gif">
      </div>
  </div>
</template>
<script>
    import Viewer from 'viewerjs';
  import axios from 'axios'
  import { Toast } from 'mint-ui';
  import moment from 'moment/moment';
  export default {
    props: ["uploadUrl"],
    data() {
      return {
        isShowthree: false,
        img: '../../static/takephone.png',
        ispass: true,
        ispassone: false,
        imgUrl: '',
        isAndroid:false,
        isSelect: true,
        isSelectOne: false,
        apply_no: '',
        imgDataOne:[{'title':'经办人持本人与单位身份证明原件照片'},{'title':'车辆照片'},{'title':'车辆识别代码照片'}],
        imgData:[{'title':'本人持身份证明照片'},{'title':'车辆照片'},{'title':'车辆识别代码照片'}],
        person: {},
        approve: {},
        appointment: {},
        department: {},
        base: {},
       applyType: '',
       applyStatus: '',
        approve_result: '',
        result: [],
        apply_car_no:'',
        user_id: ''

      };
    },
    watch: {
      'approve_result': function() {
        if ((this.approve_result !== '')) {
          $(".selectText").css("color", '#232323')
        }else{
          $(".selectText").css("color", '#bbb')
        }
        $(".selectText").find("option").css("color","#232323")
      },
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '扫码结果展示';
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid){
        this.isAndroid = true;
      }
      if(isiOS){
        this.isAndroid = false;
      }
      this.apply_no = this.$route.query.apply_no;
      this.user_id = this.$route.query.user_id;
    },
    mounted() {
      this.getData();
      this.getApproveresult('approve_result');
      $(".selectText").css("color", '#bbb');
      var self = this;
      self.bridge.registerHandler('webviewGetImage', function (data, responseCallback) {//注册客户端主动触发js端
        self.isShowthree = true;
        axios.post(self.ajaxUrl + '/vehicle/uploadBaseImage', {
          image: data.image ? 'data:image/jpeg;base64,'+ data.image : ''
        })
          .then(response => {
            self.isShowthree = false;
            if (response.data.result.rescode == 200) {
              self.imgUrl = response.data.url;
              self.approve_url = response.data.url;
              self.card_pic = response.data.url;
            }
            // this.area = response.data.list
          })
          .catch(err => {
            console.log(err);
            self.isShowthree = false;
          })
        var responseData = {'rescode': '200'}
        responseCallback(responseData)
      })
    },
    methods: {
      getApproveresult(type) {
        axios.post(this.ajaxUrl + '/vehicle/dict', {
          type: type
        })
          .then(response => {
              this.result = response.data.list;
          })
          .catch(err => {
            console.log(err);
          })
      },
        select() {
            if(!this.isSelect){
                this.isSelect = !this.isSelect;
                this.isSelectOne = false;
            }
        },
        selectOne() {
            if(!this.isSelectOne){
                this.isSelectOne = !this.isSelectOne;
                this.isSelect = false;
            }
        },
        pass(){
            if(!this.ispass){
                this.ispass = !this.ispass;
                this.ispassone = false;
            }
        },
         nopass(){
            if(!this.ispassone){
                this.ispassone = !this.ispassone;
                this.ispass = false;
            }
        },
      getData(){
        var data= {
          apply_no: this.apply_no
        }
        axios.post(this.ajaxUrl+"/vehicle/getUserInfo" , data)
          .then(response => {
            console.log(response);
            if(response.data.result.rescode == 200){
              this.base = response.data.base;
              this.applyType = this.base.applyType;
              this.person = response.data.person
              this.department = response.data.department;
              this.appointment = response.data.appointment;
              this.appointment.time = moment(this.appointment.time).format('YYYY-MM-DD')
              this.approve = response.data.approve;
              if(this.applyType == 1){
                this.imgData[0].imgUrl =  response.data.person.card_pic_min;
                this.imgData[1].imgUrl =  response.data.person.car_pic_min;
                this.imgData[2].imgUrl =  response.data.person.car_pin_pic_min;
                this.imgData[0].bigUrl =  response.data.person.card_pic;
                this.imgData[1].bigUrl =  response.data.person.car_pic
                this.imgData[2].bigUrl =  response.data.person.car_pin_pic;
                  this.$nextTick(() => {
                      new Viewer(document.getElementById('scaleImg'), {
                          url: 'data-src',
                          navbar:false,
                          toolbar:true,
                          loop: true
                      })
                  })

              }else if(this.applyType == 2){
                this.imgDataOne[0].imgUrl =  response.data.department.card_pic_min;
                this.imgDataOne[1].imgUrl =  response.data.department.car_pic_min;
                this.imgDataOne[2].imgUrl =  response.data.department.car_pin_pic_min;
                this.imgDataOne[0].bigUrl =  response.data.department.card_pic;
                this.imgDataOne[1].bigUrl =  response.data.department.car_pic
                this.imgDataOne[2].bigUrl =  response.data.department.car_pin_pic;
                  this.$nextTick(() => {
                      new Viewer(document.getElementById('scaleImg1'), {
                          url: 'data-src',
                          navbar:false,
                          toolbar:true,
                          loop: true
                      })
                  })
              }
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
      getPhone() {
        // event.preventDefault();//取消原来的方法
        var position= '';
        console.log(position)
        this.bridge.callHandler('openCamera', {'position': position}, function (response) {
          console.log('js调用客户端方法回调传参' + response);
        });
      },
      uploadIMG(event) {
        let files  = event.target.files || event.dataTransfer.files;
        if (!files.length) return;
        this.picavalue = files[0];
        // if (this.picavalue.size / 1024 > 5000) {
        // this.$message({
        //     message: "图片过大不支持上传",
        //     type: "warning"
        // });
        // } else {
            this.imgPreview(this.picavalue,'');
        // }
    },

      //
      //    //获取图片
      imgPreview(file, callback) {
        let self = this;
        //判断支不支持FileReader
        if (!file || !window.FileReader) return;
        var formData = new FormData();
        formData.append("image", file);
        let config = {
          headers: { "Content-Type": "multipart/form-data" }
        };
        // 发送请求;
          this.isShowthree = true;
        axios.post(self.ajaxUrl + "vehicle/uploadImage", formData, config)
          .then(response => {
              self.imgUrl = response.data.url;
              self.approve_url = response.data.url;
              this.isShowthree = false;
          }, err => {
            console.log(err);
              this.isShowthree = false;
          })
          .catch((error) => {
            console.log(error)
              this.isShowthree = false;
          })
      },
      // 压缩图片
      compress(img) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext("2d");
        let initSize = img.src.length;
        let width = img.width;
        let height = img.height;
        canvas.width = width;
        canvas.height = height;
        // 铺底色
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, width, height);
        //进行最小压缩
        let ndata = canvas.toDataURL("image/jpeg", 0.1);
        return ndata;
      },
      // base64转成bolb对象
      dataURItoBlob(base64Data) {
        var byteString;
        if (base64Data.split(",")[0].indexOf("base64") >= 0)
          byteString = atob(base64Data.split(",")[1]);
        else byteString = unescape(base64Data.split(",")[1]);
        var mimeString = base64Data
          .split(",")[0]
          .split(":")[1]
          .split(";")[0];
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        return new Blob([ia], { type: mimeString });
      },
      surePass(){
        //判断是个人还是单位
        if(this.applyType == 1){
          //判断是本人还是他人
          if(this.isSelect){//本人

            if(this.ispass){
              if(!this.apply_car_no){
                Toast('请输入临时编号')
                return;
              }else{
                this.submitSure()
              }
            }else if(this.ispassone){
              if(this.approve_result == ''){
                Toast('请输入不通过理由')
                return;
              }else{
                this.submitSure()
              }
            }
          }else if(this.isSelectOne){//待领
            if(this.imgUrl == ''){
              Toast('请上传代领人个人照片')
              return;
            }
            if(this.ispass){
              if(this.apply_car_no == ''){
                Toast('请输入临时编号')
                return;
              }
            }
            if(this.ispassone){
              if(this.approve_result == ''){
                Toast('请输入不通过理由')
                return;
              }
            }
              this.submitSure()
          }
        }else if(this.applyType == 2){
          if(this.imgUrl == ''){
            Toast('请上传单位及经办人身份证明照片')
            return;
          }
          if(this.ispass){
            if(this.apply_car_no == ''){
              Toast('请输入临时编号')
              return;
            }
          }
          if(this.ispassone){
            if(this.approve_result == ''){
              Toast('请输入不通过理由')
              return;
            }
          }
          this.submitSure()
        }
      },
      submitSure(){
        var data = {
          apply_no: this.apply_no,
          approve_url: this.imgUrl,
          approve_result: this.approve_result,
          apply_car_no: this.apply_car_no,
          approve_name: this.user_id
        }
        axios.post(this.ajaxUrl+"/vehicle/checkInfo" , data)
          .then(response => {
            if(response.data.result.rescode == 200){
              this.$router.push({path:'/pass'})//跳到申请成功页面
            }else{
              Toast(response.data.result.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      }
      },

  };

</script>


