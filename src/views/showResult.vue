
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
      font-size: 15px;
      display: inline-block;
      width: 110px;
    }
    .textInput{
      padding-left: 10px;
      font-size: 15px;
      color: #232323;
      font-family: Microsoft Yahei;
    }
    .selectText{
      font-size: 15px;
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
      top: 22px;
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
        <span class="textInput">{{department.live_address}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">经办人姓名:</span>
        <span class="textInput">{{department.live_address}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">经办人证件名称:</span>
        <span class="textInput">{{department.live_address}}</span>
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
      <div class="flexBetween">
        <div class="upload" v-for="(item,index) in imgDataOne">
          <div class="cha" v-show="(item.imgUrl)">
            <img :src="item.imgUrl">
          </div>
          <div class="phoneText">
            <span class="inputText">*</span><span class="text">{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if='applyType == 1'>
      <div class="textBox">
        <span class="line">|</span>
        <span class="text">填写基本信息</span>
      </div>
       <div class="inputBox clear"  v-if='applyStatus != 0'>
        <span class="textDetail">所有权</span>
        <span class="textInput">个人</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail" v-if='applyStatus != 0'>所有人</span>
        <span class="textDetail" v-else>申领人</span>
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
        <span class="textDetail">住所地址所在区:</span>
       <span class="textInput">{{department.live_area}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">住所地址:</span>
        <span class="textInput">{{department.live_address}}</span>
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">联系地址所在区:</span>
        <span class="textInput">{{department.proxy_area}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">联系地址:</span>
        <span class="textInput">{{department.proxy_address}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">联系电话:</span>
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
      <div class="flexBetween">
        <div class="upload" v-for="(item,index) in imgData">
          <div class="cha" v-show="(item.imgUrl)">
            <img :src="item.imgUrl">
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
        <span class="textInput">房价过快疯狂靠靠靠考虑考虑考虑</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">预约办理时间：</span>
        <span class="textInput">2018-32-4</span>
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
            <!-- 图片展示 -->
            <div class="cha" v-show="imgUrl">
              <img :src="imgUrl">
            </div>
            <!-- 图片上传控件 -->
            <div class="load" v-show="imgUrl == ''">
              <img class='loadImg' src='../assets/images/takephone.png' style='width:104px;height:104px;'>
              <input type="file"  v-if='isAndroid' capture="camera" @change="uploadIMG($event)">
              <input type="file"  v-if='!isAndroid'  @change="uploadIMG($event)">
            </div>
          </div>
          <div class="phoneText" >
            <span class="text">代领人个人照片</span>
          </div>
        </div>
      </div>
      <div v-else>
        <div style='background: #fff;width:100%;text-align: center;padding: 10px;' v-if='isSelectOne'>
          <div class="upload" style='left:35%;margin-bottom:10px;'>
            <!-- 图片展示 -->
            <div class="cha" v-show="imgUrl">
              <img :src="imgUrl">
            </div>
            <!-- 图片上传控件 -->
            <div class="load" v-show="imgUrl == ''">
              <img class='loadImg' src='../assets/images/takephone.png' style='width:104px;height:104px;'>
              <input type="file"  v-if='isAndroid' capture="camera" @change="uploadIMG($event)">
              <input type="file"  v-if='!isAndroid'  @change="uploadIMG($event)">
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
        <div class='codeInput'>
          <input type='text' placeholder="请输入临时编号" v-model='code'/>
        </div>
      <div class="submitBox">
        <span class="submit" @click="surePass">确定</span></div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    props: ["uploadUrl"],
    data() {
      return {
        code: '',
        ispass: true,
        ispassone: false,
        imgUrl: '',
        isAndroid:false,
        isSelect: true,
        isSelectOne: false,
        apply_no: '',
        imgDataOne:[{'imgUrl':'../../static/car.png','title':'经办人持本人与单位身份证明原件照片'},{'imgUrl':'../../static/car.png','title':'车辆照片'},{'imgUrl':'../../static/car.png','title':'车辆识别代码照片'}],
        imgData:[{'imgUrl':'../../static/car.png','title':'本人持身份证明照片'},{'imgUrl':'../../static/car.png','title':'车辆照片'},{'imgUrl':'../../static/car.png','title':'车辆识别代码照片'}],
        person: {
        "brand_model": "15940123656",
        "color": "15940123656",
        "pin": "15940123656",
        "card_pic": "15940123656",
        "car_pic": "15940123656",
        "car_pin_pic": "15940123656"
        },
        approve: {
            "id": 1,
            "applyNo": "01d19b0bc64b4fef993b0cd2a47b40fa",
            "approveType": "2",
            "approveName": "59898987887",
            "approveResult": "59898987887",
            "approveTime": 1530773056000
        },
        appointment: {

            "apply_no": "01d19b0bc64b4fef993b0cd2a47b40fa",
            "address": "59898987887",
            "time": "59898987887"
        },
        department: {
        "name": "15940123656",
        "cre_name": "15940123656",
        "cre_code": "15940123656",
        "live_area": "15940123656",
        "live_address": "15940123656",
        "live_phone": "15940123656",
        "proxy_name": "15940123656",
        "proxy_cre_name": "15940123656",
        "proxy_area": "15940123656",
        "proxy_address": "15940123656",
        "proxy_phone": "15940123656",
        "brand_model": "15940123656",
        "color": "15940123656",
        "pin": "15940123656",
        "card_pic": "15940123656",
        "car_pic": "15940123656",
        "car_pin_pic": "15940123656"
         },
        base: {
            "applyNo": "01d19b0bc64b4fef993b0cd2a47b40fa",
            "applyType": "1",
            "applyTime": 1530684639000,
            "applyCarNo": "京1234567",
            "applyStatus": "4",
            "proxyName": "wwwwwwwwwwwwwwwwwwwwwwwwwwwww",
            "userId": "10sssssssssssss"
        },
       applyType: '',
       applyStatus: '',
      };
    },
    watch: {
    },
    created() {
      document.getElementsByTagName('title')[0].innerHTML = '个人申报';
      console.log(this.cardCode)
      var u = navigator.userAgent;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid){
        this.isAndroid = true;
      }
      if(isiOS){
        this.isAndroid = false;
      }
      this.applyNo = this.$route.query.applyNo;
      this.applyType = '1';
      this.applyStatus = this.$route.query.applyStatus;
      console.log(this.applyStatus)
      this.getData()
    },
    methods: {

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
                apply_no: this.applyNo
            }
             axios.post(this.ajaxUrl+"/vehicle/getUserInfo" , data)
             .then(response => {
                console.log(response);
                }, err => {
                console.log(err);
                })
                .catch((error) => {
                    console.log(error)
            })
        },
          uploadIMG(event) {
            let files  = event.target.files || event.dataTransfer.files;
            if (!files.length) return;
            this.picavalue = files[0];
            if (this.picavalue.size / 1024 > 5000) {
            this.$message({
                message: "图片过大不支持上传",
                type: "warning"
            });
            } else {
            this.imgPreview(this.picavalue,'');
            }
        },
         //获取图片
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
        axios.post(self.ajaxUrl + "vehicle/uploadImage", formData, config)
          .then(response => {
            console.log(response);
            self.imgUrl = response.data.url;
            self.approve_url = response.data.url;
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
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
        console.log("*******压缩后的图片大小*******");
        console.log(ndata)
        console.log(ndata.length);
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
        console.log(444)
      },
      surePass(){
        if(this.parantValue == ''){
          Toast('请选择预约区域')
        }else if(this.address == ''){
          Toast('请选择预约机构')
        }else if(this.pickerValueTwo == ''){
          Toast('请选择预约时间')
        }else{
          var data = {
            apply_no: this.apply_no,
            approve_url: this.approve_url,
            approve_result: this.approve_result,
            apply_car_no: this.apply_car_no,
            approve_name: this.user_id
          }
          axios.post(this.ajaxUrl+"//vehicle/checkInfo" , data)
            .then(response => {
              if(response.data.result.rescode == 200){
                this.$router.push({path:'/pass'})//跳到申请成功页面
              }
            }, err => {
              console.log(err);
            })
            .catch((error) => {
              console.log(error)
            })
        }
      }
    }
  };

</script>


