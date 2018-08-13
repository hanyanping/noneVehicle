<style rel="stylesheet/scss" lang="scss" scoped>
  $baseFontSize: 75;
  .text {
    font-size: 28rem/$baseFontSize;
  }

  .upload {
    position: relative;
    width: 30%;
    height: 100px;
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
        object-fit: cover;
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
      .loadImg {
        height: 100%;
        width: 100%;
        object-fit: cover;
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

  .submitBox {
    background: #fff;
    padding: 30px;
    .submit {
      height: 40px;
      width: 120px;
      line-height: 40px;
      border-radius: 10px;
      background: #26a2ff;
      color: #fff;
      text-align: center;
      margin: 0px auto;
    }
  }

  .textBox {
    color: #666;
    padding: 15px;
    height: 20px;
    line-height: 20px;
    .text {
      padding-left: 6px;
      font-size: 16px;
    }
  }

  .inputText {
    color: #f00;
    vertical-align: middle;
  }

  .inputBox {
    padding: 15px;
    background: #fff;
    border-bottom: 1px solid #f4f4f4;
    .textDetail {
      color: #232323;
      font-size: 14px;
      display: inline-block;
      width: 130px;
    }
    .textInput {
      padding-left: 10px;
      font-size: 14px;
      color: #232323;
      font-family: Microsoft Yahei;
    }
    .selectText {
      font-size: 14px;
      color: #bbb;
      padding-right: 16px;
      font-family: Microsoft Yahei;
      text-align: right;
    }
    .tanInput {
      padding-right: 16px;
    }
    .selectImg {
      height: 8px;
      width: 12px;
      position: absolute;
      right: 12px;
      top: 22px;
    }
    .tanhaoImg {
      height: 19px;
      width: 19px;
      position: absolute;
      right: 9px;
      top: 16px;
    }
  }

  .selectBox {
    position: relative;
  }

  .flexBetween {
    padding: 10px 10px 64px;
    background: #fff;
    .phoneText {
      position: absolute;
      top: 105px;
      padding-bottom: 6px;
      width: 100%;
      text-align: center;
      .text {
        font-size: 14px;
        color: #232323;
      }
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
        <div class="upload" v-for="(item,index) in imgDataOne" :key="index">
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
        <span class="text">基本信息</span>
      </div>
      <div class="inputBox clear" v-if='applyStatus != "待审核"'>
        <span class="textDetail">所有权</span>
        <span class="textInput">个人</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail" v-if='applyStatus != "待审核"'>所有人</span>
        <span class="textDetail" v-else>申领人</span>
        <span class="textInput">{{person.name}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">证件号码:</span>
        <span class="textInput">{{person.cre_code}}</span>
      </div>
    </div>
    <div class="textBox" v-if='applyStatus == "预约成功"'>
      <span class="line">|</span>
      <span class="text">预约信息</span>
    </div>
    <div v-if='applyStatus == "预约成功"'>
      <div class="inputBox clear">
        <span class="textDetail">预约办理地点：</span>
        <span class="textInput">{{appointment.address}}</span>
      </div>
      <div class="inputBox clear">
        <span class="textDetail">预约办理时间：</span>
        <span class="textInput">{{appointment.time}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import Viewer from 'viewerjs';
  import axios from 'axios'
  import moment from 'moment/moment';

  export default {
    props: ["uploadUrl"],
    data() {
      return {
        apply_no: '',
        imgDataOne: [{'title': '经办人持本人与单位身份证明原件照片'}, {'title': '车辆照片'}, {'title': '车辆识别代码照片'}],
        imgData: [{'title': '本人持身份证明照片'}, {'title': '车辆照片'}, {'title': '车辆识别代码照片'}],
        person: {},
        approve: {},
        appointment: {},
        department: {},
        base: {},
        applyType: '',
        applyStatus: ''
      };
    },
    watch: {
      'cardCode': function () {
        console.log(this.cardCode)
        if ((this.cardCode !== '')) {
          $(".selectText").css("color", '#232323')
        }
      }
    },
    created() {
      this.applyNo = this.$route.query.applyNo;
      this.applyType = this.$route.query.applyType;
      this.applyStatus = this.$route.query.applyStatus;
    },
    mounted() {
      this.getData();
    },
    methods: {
      getData() {
        var data = {
          apply_no: this.applyNo
        }
        axios.post(this.ajaxUrl + "/vehicle/getUserInfo", data)
          .then(response => {
            if (response.data.result.rescode == 200) {
              this.base = response.data.base;
              this.person = response.data.person
              this.department = response.data.department;
              this.appointment = response.data.appointment;
              this.appointment.time = moment(this.appointment.time).format('YYYY-MM-DD')
              this.approve = response.data.approve;
              if (this.applyType == 1) {
                this.imgData[0].imgUrl = response.data.person.card_pic_min;
                this.imgData[1].imgUrl = response.data.person.car_pic_min;
                this.imgData[2].imgUrl = response.data.person.car_pin_pic_min;
                this.imgData[0].bigUrl = response.data.person.card_pic;
                this.imgData[1].bigUrl = response.data.person.car_pic
                this.imgData[2].bigUrl = response.data.person.car_pin_pic;
                this.$nextTick(() => {
                  new Viewer(document.getElementById('scaleImg'), {
                    url: 'data-src',
                    navbar: false,
                    toolbar: true,
                    loop: true
                  })
                })
              } else if (this.applyType == 2) {
                this.imgDataOne[0].imgUrl = response.data.department.card_pic_min;
                this.imgDataOne[1].imgUrl = response.data.department.car_pic_min;
                this.imgDataOne[2].imgUrl = response.data.department.car_pin_pic_min;
                this.imgDataOne[0].bigUrl = response.data.department.card_pic;
                this.imgDataOne[1].bigUrl = response.data.department.car_pic
                this.imgDataOne[2].bigUrl = response.data.department.car_pin_pic;
                this.$nextTick(() => {
                  new Viewer(document.getElementById('scaleImg1'), {
                    url: 'data-src',
                    navbar: false,
                    toolbar: true,
                    loop: true
                  })
                })
              }
              console.log(this.imgData)
            } else {
              Toast(response.data.result.resdes)
            }
          }, err => {
            console.log(err);
          })
          .catch((error) => {
            console.log(error)
          })
      },
    }
  };

</script>


