<style rel="stylesheet/scss" lang="scss" scoped>
$baseFontSize:75;
.text {
  font-size: 28rem/$baseFontSize;
}

.upload {
  position: relative;
  width: 30%;
  height: 100px; // 图片展示
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
  } //鼠标放上时显示删除和放大
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
    font-size: 15px;
  }
  .textInput {
    text-align: right;
    font-size: 15px;
    color: #232323;
    font-family: Microsoft Yahei;
    text-align: right;
  }
  .selectText {
    font-size: 15px;
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

.zhegaiceng {
  background: rgba(0, 0, 0, 0.6);
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  .zhegaiContent {
    background: #fff;
    position: absolute;
    width: 60%;
    left: 0;
    right: 0;
    top: 12vh;
    margin: 20vh auto;
    padding: 20px 20px 5px;
    border-radius: 10px;
    .chengnuo {
      color: #096FD4;
      font-size: 18px;
      text-align: center;
      margin-bottom: 15px;
      font-weight: 700;
    }
    .chengnuoText {
      color: #232323;
      margin-bottom: 25px;
      font-size: 15px;
      line-height: 24px;
    }
    .selectBox {
      margin-bottom: 20px;
      color: #bbb;
      .selectImg {
        display: inline-block;
        vertical-align: middle;
        height: 20px;
        width: 20px;
        padding-right: 6px;
      }
    }
    .sureBox {
      margin: 20px auto 20px;
      text-align: center;
      .sure {
        background: #096FD4;
        color: #fff;
        padding: 12px 40px;
        font-size: 15px;
        border-radius: 6px;
      }
    }
  }
}

.flexBetween {
  padding: 10px 10px 30px;
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
    <div>
      <div class="textBox">
        <span class="line">|</span>
        <span class="text">填写基本信息</span>
      </div>
      <div class="inputBox clear">
        <label class="inputText">*</label>
        <span class="textDetail">申领人姓名</span>
        <input v-model='name' type="text" class="textInput fr" placeholder="请输入申领人姓名">
      </div>
      <div class="inputBox clear selectBox">
        <label class="inputText">*</label>
        <span class="textDetail">证件名称</span>
        <img class='selectImg' src="../assets/images/down.png">
        <select placeholder="请选择证件名称" v-model='cre_name' class="fr selectText">
          <option value="" style="color: #bbb;">请选择证件名称</option>
          <option value="居民身份证">居民身份证</option>
          <option value="军官证">军官证</option>
          <option value="士兵证">士兵证</option>
          <option value="军官离退休证">军官离退休证</option>
          <option value="境外人员身份证">境外人员身份证</option>
          <option value="外交人员身份证">外交人员身份证</option>
        </select>
      </div>
      <div class="inputBox clear">
        <label class="inputText">*</label>
        <span class="textDetail">证件号码</span>
        <input type="text" v-model="cre_code" class="textInput fr" placeholder="请输入证件号码">
      </div>
      <div class="inputBox clear selectBox">
        <label class="inputText">*</label>
        <span class="textDetail">身份证地址</span>
        <img class='selectImg' src="../assets/images/down.png">
        <select class="fr selectText" v-model="card_address">
          <option value="" style="color: #bbb;">请选择身份证地址所在省份</option>
          <option value="0">北京市</option>
          <option value="1">河北省</option>
          <option value="2">士兵证</option>
          <option value="3">军官离退休证</option>
          <option value="4">境外人员身份证</option>
          <option value="5">外交人员身份证</option>
        </select>
      </div>
      <div class="inputBox clear">
        <label class="inputText">*</label>
        <span class="textDetail">证件详细地址</span>
        <input v-model="card_detail_address" type="text" class="textInput fr" placeholder="请输入证件详细地址">
      </div>
      <div class="inputBox clear selectBox">
        <label class="inputText">*</label>
        <span class="textDetail">联系地址所在区</span>
        <img class='selectImg' src="../assets/images/down.png">
        <select class="fr selectText" v-model="link_area">
          <option value="" style="color: #bbb;">请选择联系地址行政区</option>
          <option value="0">北京市</option>
          <option value="1">河北省</option>
          <option value="2">士兵证</option>
          <option value="3">军官离退休证</option>
          <option value="4">境外人员身份证</option>
          <option value="5">外交人员身份证</option>
        </select>
      </div>
      <div class="inputBox clear">
        <label class="inputText">*</label>
        <span class="textDetail">联系地址</span>
        <input type="text" class="textInput fr" v-model="link_address" placeholder="请输入联系地址">
      </div>
      <div class="inputBox clear">
        <label class="inputText">*</label>
        <span class="textDetail">联系电话</span>
        <input type="tel" class="textInput fr" v-model="link_phone" placeholder="请输入联系电话">
      </div>
      <div class="inputBox clear">
        <label class="inputText">*</label>
        <span class="textDetail">品牌型号(车辆铭牌)</span>
        <input type="tel" v-model='brand_model' class="textInput fr" placeholder="请输入品牌型号">
      </div>
      <div class="inputBox clear selectBox">
        <label class="inputText">*</label>
        <span class="textDetail">车身颜色</span>
        <input type="tel" v-model="color" class="textInput fr tanInput" placeholder="请输入车身颜色">
        <img class='tanhaoImg' @click="ShowOne" src="../assets/images/tanhao.png">
      </div>
      <div class="inputBox clear selectBox">
        <span class="textDetail">电动车整车编码（钢架号）</span>
        <input type="tel" v-model="pin" class="textInput fr tanInput" placeholder="请输入车架号">
        <img class='tanhaoImg' @click="ShowTwo" src="../assets/images/tanhao.png">
      </div>
      <div class="textBox">
        <span class="line">|</span>
        <span class="text">照片信息</span>
      </div>
      <div class="flexBetween">
        <div class="upload" v-for="(item,index) in imgData" :key="index">
          <!-- 图片上传控件 -->
          <div class="load">
            <img class="loadImg" :src="item.imgUrl ? item.imgUrl : item.img">
            <input type="file" v-if='isAndroid' capture="camera" @change="uploadIMG($event ,index)">
            <input type="file" v-if='!isAndroid' @change="uploadIMG($event ,index)">
          </div>
          <div class="phoneText">
            <span class="inputText">*</span>
            <span class="text">{{item.text}}</span>
          </div>
          <!-- 图片预览弹框 -->
          <!--<el-dialog :visible.sync="isEnlargeImage" size="large"  :append-to-body="true" top="8%" width="60%">-->
          <!--<img @click="isEnlargeImage = false" style="width:100%;" :src="imgUrl">-->
          <!--</el-dialog>-->
        </div>
      </div>
      <div class="submitBox">
        <div class="submit" @click="submit">提交信息</div>
      </div>
    </div>
    <div class="zhegaiceng" v-if="isShow">
      <div class="zhegaiContent">
        <h1 class="chengnuo">本人承诺</h1>
        <p class="chengnuoText">
          该车系本人合法所得，如不属实，愿承担一切法律责任。
        </p>
        <div class="selectBox">
          <img class='selectImg' src="../assets/images/select.png">
          <span>以上内容已看过，同意并提交</span>
        </div>
        <div class="sureBox">
          <span class="sure" @click="sure">确认</span>
        </div>
      </div>
    </div>
    <div class="zhegaiceng" v-if="isShowOne">
      <div class="zhegaiContent">
        <p class="chengnuoText">
          如车辆为多种颜色，则填写其中面积最大的三种颜色，顺序为"从前至后"或"从上至"
        </p>
        <div class="sureBox">
          <span class="sure" @click="sureOne">确认</span>
        </div>
      </div>
    </div>
    <div class="zhegaiceng" v-if="isShowTwo">
      <div class="zhegaiContent">
        <p class="chengnuoText">
          如车辆无车架号，车主本人须到我市指定发放点现场查验车辆进行申报
        </p>
        <div class="sureBox">
          <span class="sure" @click="sureTwo">确认</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from 'axios';
import * as regAction from '@/utils/reg';

export default {
  props: ["uploadUrl"],
  data() {
    return {
      isShow: true,
      isShowOne: false,
      isShowTwo: false,
      name: '',
      cre_name: '',
      cre_code: '',
      card_address: '',
      card_detail_address: '',
      link_area: '',
      link_address: '',
      link_phone: '',
      brand_model: '',
      color: '',
      pin: '',
      card_pic: '',
      car_pic: '',
      car_pin_pic: '',
      cardCode: '',
      provinceCode: '',
      picavalue: "",
      imgUrl: null,
      imgData: [{ 'imgUrl': '', 'img': '../../static/cardImg.png', 'text': '本人持身份证照片' }, { 'imgUrl': '', 'img': '../../static/car.png', 'text': '车辆照片' }, { 'imgUrl': '', 'img': '../../static/carCode.png', 'text': '电动车整车编码（钢架号）照片' }],
      isEnlargeImage: false,
      isAndroid: true
    };
  },
  watch: {
    'cardCode': function() {
      console.log(this.cardCode)
      if ((this.cardCode !== '')) {
        $(".selectText").css("color", '#232323')
      }
    }
  },
  created() {
    document.getElementsByTagName('title')[0].innerHTML = '个人申报';
    console.log(this.cardCode)
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) {
      this.isAndroid = true;
    }
    if (isiOS) {
      this.isAndroid = false;
    }
  },
  mounted() {
    this.getArea();
  },
  methods: {
    //  获取省会或者区域
    getArea(id) {
      axios.post(this.ajaxUrl + 'vehicle/area', {
        parentId: id ? id : ''
      })
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log(err);
        })
    },
    sureOne() {
      this.isShowOne = false;
    },
    sureTwo() {
      this.isShowTwo = false;
    },
    ShowOne() {
      this.isShowOne = true;
    },
    ShowTwo() {
      this.isShowTwo = true;
    },
    sure() {
      this.isShow = false;
    },
    uploadIMG(event, num) {
      console.log(num)
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      this.picavalue = files[0];
      if (this.picavalue.size / 1024 > 5000) {
        Toast("图片过大不支持上传");
      } else {
        this.imgPreview(this.picavalue, '', num);
      }
    },
    //获取图片
    imgPreview(file, callback, num) {
      let self = this;
      //判断支不支持FileReader
      if (!file || !window.FileReader) return;
      if (/^image/.test(file.type)) {
        //创建一个reader
        let reader = new FileReader();
        //将图片转成base64格式
        reader.readAsDataURL(file);
        //读取成功后的回调
        reader.onloadend = function() {
          let result = this.result;
          let img = new Image();
          img.src = result;
          console.log("********未压缩前的图片大小********");
          console.log(result.length);
          img.onload = function() {
            let data = self.compress(img);
            self.imgData[num].imgUrl = result;
            if (num == 0) {
              self.card_pic = result;
            } else if (num == 1) {
              self.car_pic = result;
            } else if (num == 2) {
              self.car_pin_pic = result;
            }
            console.log(self.imgData)
            // self.imgUrl = result;
            let blob = self.dataURItoBlob(data);
            console.log("*******base64转blob对象******");
            console.log(blob);
            var formData = new FormData();
            formData.append("file", blob);
            console.log("********将blob对象转成formData对象********");
            console.log(formData.get("file"));
            let config = {
              headers: { "Content-Type": "multipart/form-data" }
            };
            return;
            // 发送请求;
            axios.post(self.ajaxUrl + "/vehicle/uploadImage", formData, config)
              .then(response => {
                console.log(response);
                self.imgData[num].imgUrl = result.url;
                if (num == 0) {
                  self.card_pic = result.url;
                } else if (num == 1) {
                  self.car_pic = result.url;
                } else if (num == 2) {
                  self.car_pin_pic = result.url;
                }
              }, err => {
                console.log(err);
              })
              .catch((error) => {
                console.log(error)
              })
          };
        };
      }
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
    },
    //删除事件
    delImg() {
      this.imgUrl = null;
    },
    submit() {
      if (this.name == '') {
        Toast('请输入申领人姓名')
        return;
      }
      if (this.cre_name == '') {
        Toast('请选择证件名称')
        return;
      }
      if (this.cre_code == '') {
        Toast('请选择证件号码')
        return;
      }
      if (this.card_address == '') {
        Toast('请输入身份证地址所在省')
        return;
      }
      if (this.card_detail_address == '') {
        Toast('请输入身份证地址')
        return;
      }
      if (this.link_area == '') {
        Toast('请选择联系地址所在区')
        return;
      }
      if (this.link_address == '') {
        Toast('请输入联系地址')
        return;
      }
      if (this.link_phone == '') {
        Toast('请输入联系电话')
        return;
      } else {
        const flag = regAction.phone(this.link_phone);
        if (!flag) {
          Toast('请输入正确手机号!');
          return;
        }
      }
      if (this.brand_model == '') {
        Toast('请输入品牌型号')
        return;
      }
      if (this.color == '') {
        Toast('请输入车辆颜色')
        return;
      }
      if (this.card_pic == '') {
        Toast('请上传身份证照片')
        return;
      }
      if (this.car_pic == '') {
        Toast('请上传车辆照片')
        return;
      }
      if (this.car_pin_pic == '') {
        Toast('请上传车架号照片')
        return;
      }
      var data = {
        "name": this.name,
        "cre_name": this.cre_name,
        "cre_code": this.cre_code,
        "card_address": this.card_address,
        "card_detail_address": this.card_detail_address,
        "link_area": this.link_area,
        "link_address": this.link_address,
        "link_phone": this.link_phone,
        "brand_model": this.brand_model,
        "color": this.color,
        "pin": this.pin,
        "card_pic": this.card_pic,
        "car_pic": this.car_pic,
        "car_pin_pic": this.car_pin_pic
      }
      console.log(JSON.stringify(data));
      // 发送请求;
      axios.post(this.ajaxUrl + "vehicle/person", data)
        .then(response => {
          console.log(response);
          const { data } = response;
          const { result } = data;
          const { rescode, resdes } = result;
          if (rescode != 200) {
            Toast(resdes);
          } else {
            //  成功跳转到申报成功页面
            this.$router.push('/declareSuccess');
          }
        }, err => {
          console.log(err);
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
};

</script>


